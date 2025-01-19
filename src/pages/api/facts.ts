import { getRandomFacts } from '../../data/facts';

export async function GET() {
  const facts = getRandomFacts(3);
  
  return new Response(JSON.stringify(facts), {
    headers: {
      'Content-Type': 'application/json'
    }
  });
} 