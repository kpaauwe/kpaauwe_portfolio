/*
- Implement cosine similarity function
- Implement `findRelevantChunks(queryEmbedding, embeddings, topK=3)` function
- Returns top-k most similar chunks
 */

export function cosineSimilarity(vecA, vecB) {
    if (vecA.length !== vecB.length) {
        throw new Error('Vectors must have the same length');
    }

    let dotProduct = 0;
    let normA = 0;
    let normB = 0;

    for (let i=0; i< vecA.length; i++) {
        dotProduct += vecA[i] * vecB[i];
        normA += vecA[i] * vecA[i];
        normB += vecB[i] * vecB[i];
    }

    return dotProduct / (Math.sqrt(normA) * Math.sqrt(normB));
}

// KNN Algorithm
export function findRelevantChunks(queryEmbedding, embeddingsData, topK = 3) {
    const similarities = embeddingsData.map(chunk => ({
        chunk,
        similarity: cosineSimilarity(queryEmbedding, chunk.embedding)
    }));
    similarities.sort((a,b) => b.similarity - a.similarity);
    return similarities.slice(0, topK).map(item => item.chunk);
}