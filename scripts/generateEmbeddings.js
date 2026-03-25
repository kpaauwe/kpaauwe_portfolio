// Run this script once to generate embeddings: node scripts/generateEmbeddings.js

import OpenAI from "openai";
import { knowledgeChunks } from "../api/_lib/knowledgeBase.js";
import fs from 'fs';
import dotenv from 'dotenv';

dotenv.config();

async function generateEmbeddings() {
    console.log('Generating embeddings for', knowledgeChunks.length, 'chunks...');

    const openai = new OpenAI({
        apiKey: process.env.VITE_OPENAI_API_KEY || process.env.OPENAI_API_KEY
    });

    const embeddings = [];
    for (const chunk of knowledgeChunks) {
        console.log(`Processing: ${chunk.id}`);
        const response = await openai.embeddings.create({
            model: 'text-embedding-3-small',
            input: chunk.content,
        });

        embeddings.push({
            ...chunk,
            embedding: response.data[0].embedding
        });
    }

    // Write to file
    const output = `// Pre-computed embeddings generated on ${new Date().toISOString()}
export const embeddingsData = ${JSON.stringify(embeddings, null, 2)};
`;

    fs.writeFileSync('api/_lib/embeddingsData.js', output);
    console.log('✅ Embeddings saved to api/_lib/embeddingsData.js');
}

generateEmbeddings().catch(console.error);
