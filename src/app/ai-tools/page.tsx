// File: /app/ai-tools/page.tsx
import React, { Suspense } from 'react';
import AiToolsClient from './AiToolsClient';

export default function AiToolsPage() {
    return (
        // The fallback can be a spinner or skeleton UI:
        <Suspense fallback={<div className="max-w-7xl mx-auto py-8 px-4 text-center">Loading AI Tools...</div>}>
            <AiToolsClient />
        </Suspense>
    );
}
