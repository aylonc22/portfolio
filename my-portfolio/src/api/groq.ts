export async function getGroqResponse(prompt: string): Promise<string> {
    try {
        const res = await fetch('http://localhost:3000/api/groq', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt })
        });

        if (!res.ok) throw new Error('Groq API request failed');

        const data = await res.json();
        return data.output || '';
    } catch (err) {
        console.error(err);
        return "Oops, something went wrong.";
    }
}
