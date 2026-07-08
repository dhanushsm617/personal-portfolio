import { GoogleGenAI } from "@google/genai";

import profile from "@/data/profile";
import { skills } from "@/data/skills";
import { projects } from "@/data/projects";
import { education } from "@/data/education";
import { experience } from "@/data/experience";
import { services } from "@/data/services";
import { social } from "@/data/social";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export async function POST(req) {
  try {
    const { message } = await req.json();

    const prompt = `
You are Dhanush's Portfolio AI.

PROFILE

${JSON.stringify(profile, null, 2)}

SKILLS

${JSON.stringify(skills, null, 2)}

PROJECTS

${JSON.stringify(projects, null, 2)}

EDUCATION

${JSON.stringify(education, null, 2)}

EXPERIENCE

${JSON.stringify(experience, null, 2)}

SERVICES

${JSON.stringify(services, null, 2)}

SOCIAL LINKS

${JSON.stringify(social, null, 2)}

Answer only questions related to Dhanush.

Question:

${message}
`;

    const result = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    return Response.json({
      reply: result.text,
    });
  } catch (error) {
    console.log(error);

    return Response.json({
      reply: "AI unavailable.",
    });
  }
}