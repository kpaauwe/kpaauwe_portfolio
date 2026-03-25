import OpenAI from "openai";
import { embeddingsData } from "./_lib/embeddingsData.js";
import { findRelevantChunks } from "./_lib/vectorSearch.js";

export default async function handler(req, res) {
    // CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { message, conversationHistory = [] } = req.body;

        if (!message || typeof message !== 'string' || message.length > 500) {
            return res.status(400).json({error: "Invalid Message"});
        }

        const openai = new OpenAI({
            apiKey: process.env.VITE_OPENAI_API_KEY || process.env.OPENAI_API_KEY
        });

        // Generate embedding for user query
        const embeddingResponse = await openai.embeddings.create({
            model: 'text-embedding-3-small',
            input: message,
        });
        const queryEmbedding = embeddingResponse.data[0].embedding;

        // Find relevant chunks using vector search
        const relevantChunks = findRelevantChunks(queryEmbedding, embeddingsData, 3);
        const content = relevantChunks.map(chunk => chunk.content).join('\n\n');

        const systemPrompt =
        `You are a helpful assistant for Kieran Paauwe's portfolio website. Answer questions about Kieran's background, skills, projects, and experience based on the provided context.

        Context (relevant information about Kieran):
        ${content}

        Guidelines:
        - Be friendly, professional, and concise
        - Answer based on the provided context
        - If the context doesn't contain enough information to answer fully, say so politely
        - Use first person when referring to Kieran (e.g., "I worked on..." not "Kieran worked on...")
        - Encourage users to contact Kieran directly for detailed discussions or opportunities`;

        // Prep messages for GPT-4o-mini
        const messages = [
            {role: 'system', content: systemPrompt},
            ...conversationHistory,
            {role: 'user', content: message}
        ];

        // Call GPT-4o-mini for generation
        const completion = await openai.chat.completions.create({
            model: 'gpt-4o-mini',
            messages: messages,
            temperature: 0.7,
            max_completion_tokens: 500
        });

        return res.status(200).json({
            response: completion.choices[0].message.content
        });
    } catch (error) {
        console.error('Chat API error:', error);
        return res.status(500).json({
            error: 'Failed to process chat request'
        });
    }
}
