
import { GoogleGenAI, Type } from "@google/genai";
import { OnboardingStep, AnalysisResult } from '../types';

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

const analysisSchema = {
  type: Type.OBJECT,
  properties: {
    overallSummary: {
      type: Type.STRING,
      description: "A brief, high-level summary of the onboarding funnel's performance, including a week-over-week comparison. Highlight key improvements or regressions."
    },
    keyFrictionPoints: {
      type: Type.ARRAY,
      description: "An array of the top 2-3 most significant drop-off points in the funnel for the CURRENT week.",
      items: {
        type: Type.OBJECT,
        properties: {
          step: {
            type: Type.STRING,
            description: "The name of the onboarding step where the drop-off occurs."
          },
          dropOffPercentage: {
            type: Type.NUMBER,
            description: "The percentage of users who dropped off at this step compared to the previous step."
          },
          clusteredDropOffReasons: {
            type: Type.ARRAY,
            description: "A list of 2-4 likely reasons or user problems causing the drop-off, clustered thematically.",
            items: { type: Type.STRING }
          },
          uxRecommendations: {
            type: Type.ARRAY,
            description: "A list of actionable UX recommendations to fix the identified issues.",
            items: {
              type: Type.OBJECT,
              properties: {
                recommendation: {
                  type: Type.STRING,
                  description: "A clear, concise, and actionable recommendation."
                },
                priority: {
                  type: Type.STRING,
                  enum: ['High', 'Medium', 'Low'],
                  description: "The priority of implementing this recommendation."
                },
                effort: {
                  type: Type.STRING,
                  enum: ['High', 'Medium', 'Low'],
                  description: "The estimated effort required to implement this fix."
                }
              },
              required: ["recommendation", "priority", "effort"]
            }
          }
        },
        required: ["step", "dropOffPercentage", "clusteredDropOffReasons", "uxRecommendations"]
      }
    }
  },
  required: ["overallSummary", "keyFrictionPoints"]
};


export const analyzeOnboardingData = async (currentData: OnboardingStep[], previousData: OnboardingStep[]): Promise<AnalysisResult> => {
  const prompt = `
    Analyze the following user onboarding funnel data for a SaaS product.
    Act as a senior growth product manager. Your goal is to identify critical friction points for the current week,
    cluster the likely reasons for user drop-off, provide actionable UX recommendations, and summarize the week-over-week performance.

    Current Week Funnel Data:
    ${JSON.stringify(currentData, null, 2)}

    Previous Week Funnel Data:
    ${JSON.stringify(previousData, null, 2)}

    Based on this data, provide a detailed analysis. Your analysis should focus on the CURRENT week's data for identifying key friction points and making recommendations.
    In your 'overallSummary', please provide a week-over-week analysis, highlighting key improvements or regressions before giving the summary for the current week.
    The output must be a JSON object matching the provided schema.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: analysisSchema,
        temperature: 0.5,
      },
    });
    
    const jsonText = response.text.trim();
    const result = JSON.parse(jsonText);
    return result as AnalysisResult;

  } catch (error) {
    console.error("Error analyzing onboarding data:", error);
    throw new Error("Failed to get analysis from Gemini API.");
  }
};