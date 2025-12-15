import type { VercelRequest, VercelResponse } from '@vercel/node';

import dotenv from 'dotenv';
import { getContext } from './data/context.js';


dotenv.config({path:'.env.local'});

export default async function handler(req: VercelRequest, res: VercelResponse) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
    if (req.method !== 'POST') return res.status(405).end();

  const { prompt } = req.body;

  try {   
    const context = await getContext();
    const groqRes = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.GROQ_KEY}`
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages: [
          {
            role: 'system', content: context
          },
          {
          role: 'user',
          content: prompt
        }]
      })
    });

    const data = await groqRes.json();
        
    if(data.error){
      res.status(500).json({ output: data.error })
    }
    else{
      res.status(200).json({ output: data.choices[0].message.content });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ output: 'Error connecting to Groq' });
  }
}
