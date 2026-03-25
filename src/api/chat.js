/**
 * Key functionality:
1. Accept POST request with `{ message, conversationHistory }`
2. Generate embedding for user's message using OpenAI embeddings API
3. Search pre-computed embeddings to find top 3 relevant chunks
4. Assemble context with relevant chunks + conversation history
5. Call GPT-4o-mini with assembled context
6. Return response
* Error handling:
- CORS headers for cross-origin requests
- Input validation (message length limit)
- OpenAI API error handling
- Rate limiting consideration

 */

import OpenAI from "openai";
import { embeddingsData } from "./embeddings.js";
import { findRelevantChunks } from "./utils/vectorSearch.js";

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
            apiKey: process.env.OPEN_API_KEY
        });
        
        const embeddingResponse = await openai.embeddings.create({
            model: 'text-embedding-3-small',
            input: message,
        });
        const queryEmbedding = embeddingResponse.data[0].embedding
        
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
        - If the user question is not relevant to Kieran's background or projects, politely steer the conversation back to relevant topics
        - Encourage users to contact Kieran directly for detailed discussions or opportunities`;

        //Prep messages for GPT-4o-mini
        const messages = [
            {role: 'system', content: systemPrompt}, //Prompt and relevant content
            ...conversationHistory, //Previous conversation context
            {role: 'user', content: message} //User question
        ];

        //Call GPT-4o-mini for generation
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