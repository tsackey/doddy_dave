import OpenAI from "openai";

export default {
	async fetch(request, env, ctx) {
        const openai = new OpenAI({
            apiKey: env.OPENAI_API_KEY
        })
        
        try {
            
            return new Response('Hello from my OpenAI API Worker!'); 
        } catch(e) {
            
        }
	},
};