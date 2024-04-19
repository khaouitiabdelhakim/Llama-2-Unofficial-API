/*
 * Copyright (c) 2024 KHAOUITI ABDELHAKIM
 * GitHub: khaouitiabdelhakim
 * Educational purpose
 */

const axios = require('axios');

const url = 'https://www.llama2.ai/api';
const headers = {
    'Content-Type': 'text/plain;charset=UTF-8',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36'
};

// Define the prompt as a variable
const prompt = 'what is python?';

const body = JSON.stringify({
    prompt: `<s>[INST] <<SYS>>\nYou are a helpful assistant.\n<</SYS>>\n\n ${prompt} [/INST]\n`,
    model: 'meta/llama-2-70b-chat',
    systemPrompt: 'You are a very assistant.',
    temperature: 0.75,
    topP: 0.9,
    maxTokens: 1024,
    image: null,
    audio: null
});

axios.post(url, body, { headers })
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error('Error:', error.message);
    });
