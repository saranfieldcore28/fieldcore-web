
import { GoogleGenAI, Type } from "@google/genai";

export class GeminiService {
  private ai: GoogleGenAI;

  constructor() {
    // Correctly initialize GoogleGenAI with a named parameter using process.env.API_KEY directly
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }

  async analyzeFleetData(data: any) {
    try {
      // Using gemini-3-flash-preview as recommended for basic/complex text tasks
      const response = await this.ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Analyze the following field service data and provide 3 actionable business insights in JSON format. 
        Data: ${JSON.stringify(data)}`,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                title: { type: Type.STRING },
                description: { type: Type.STRING },
                impact: { type: Type.STRING, description: 'High, Medium, or Low' },
                category: { type: Type.STRING, description: 'Efficiency, Revenue, or Maintenance' }
              },
              required: ['title', 'description', 'impact', 'category']
            }
          }
        }
      });
      
      // Directly access .text property
      return JSON.parse(response.text?.trim() || '[]');
    } catch (error) {
      console.error("Gemini Analysis Error:", error);
      return [];
    }
  }

  async performMarketResearch(query: string) {
    try {
      // Use googleSearch tool for grounding to get real-time info
      const response = await this.ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `You are a helpful research assistant for a field service contractor. 
        The user is asking: "${query}". 
        Provide a concise, professional answer suitable for a business dashboard. 
        Focus on pricing, technical specs, or market trends.`,
        config: {
          tools: [{ googleSearch: {} }]
        }
      });

      // Extract sources from grounding metadata
      const chunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
      const sources = chunks
        .map(c => c.web)
        .filter(w => w && w.uri && w.title)
        .map(w => ({ title: w!.title, uri: w!.uri }));

      return {
        text: response.text || "No results found.",
        sources: sources
      };

    } catch (error) {
      console.error("Gemini Research Error:", error);
      return { text: "Unable to perform research at this time. Please check your connection or API key.", sources: [] };
    }
  }
}

export const geminiService = new GeminiService();
