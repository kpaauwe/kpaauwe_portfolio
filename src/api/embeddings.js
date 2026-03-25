// Generate embeddings for all portfolio content chunks
// Use openAI "text-embedding-3-small"
// export pre-computed embeddings array

import OpenAI from "openai";
import { knowledgeChunks } from "./knowledgeBase";

export async function generateEmbeddings() {
    const openai = new OpenAI({apiKey: process.env.OPEN_API_KEY})
    
    const embeddings = [];
    for (const chunk of knowledgeChunks) {
        const response = await openai.embeddings.create({
            model: 'text-embedding-3-small',
            input: chunk.content,
        });

        embeddings.push({
            ... chunk,
            embedding: response.data[0].embedding
        });
    }
    return embeddings
}

// For production : export pre-computed embeddings to avoid regenerating each request
// Run generateEmbeddings() once, save to embeddingsData.js, import that instead
export { embeddingsData } from './embeddingsData.js';