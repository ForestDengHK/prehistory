import { creatures } from '../../data/creatures';
import type { APIRoute } from 'astro';

function truncateDescription(description: string) {
    const tempText = description.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    const words = tempText.split(' ');
    
    if (words.length <= 20) return description;
    
    let count = 0;
    let result = [];
    let inTag = false;
    let currentTag = '';
    
    for (const word of words) {
        if (count >= 20 && !inTag) break;
        
        if (word.includes('<') && !word.includes('</')) {
            inTag = true;
            currentTag = word.substring(word.indexOf('<')+1, word.indexOf('>'));
        }
        
        result.push(word);
        
        if (word.includes('</')) {
            inTag = false;
            currentTag = '';
        }
        
        if (!inTag && !word.includes('>')) count++;
    }
    
    if (inTag) {
        result.push(`</${currentTag}>`);
    }
    
    return result.join(' ') + ' ...';
}

export const GET: APIRoute = async () => {
    const shuffled = [...creatures].sort(() => 0.5 - Math.random());
    const randomCreatures = shuffled.slice(0, 3).map(creature => ({
        name: creature.name,
        period: creature.period,
        image: creature.image,
        description: truncateDescription(creature.description),
        id: creature.id
    }));

    return new Response(JSON.stringify(randomCreatures), {
        status: 200,
        headers: {
            'Content-Type': 'application/json'
        }
    });
} 