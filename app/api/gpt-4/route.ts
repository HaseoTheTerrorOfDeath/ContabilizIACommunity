import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [{ role: "user", content: message }],
      temperature: 0.7,
    });

    const responseText = completion.choices[0]?.message?.content || "Sem resposta.";
    return NextResponse.json({ response: responseText });
  } catch (error) {
    console.error("Erro na API GPT-4:", error);
    return NextResponse.json({ response: "Erro ao processar a resposta." });
  }
}

