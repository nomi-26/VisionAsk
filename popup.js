// Replace 'YOUR_API_KEY_HERE' with your actual Google AI API key from Google AI Studio
const API_KEY = 'AIzaSyBbzwF8qA_uSAa7aepdGfv9dNlqBBkRa2E';
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro-vision:generateContent?key=${API_KEY}`;

document.getElementById('submitBtn').addEventListener('click', async () => {
    const fileInput = document.getElementById('imageInput');
    const prompt = document.getElementById('prompt').value;
    const responseDiv = document.getElementById('response');

    if (!fileInput.files[0]) {
        responseDiv.textContent = 'Please select an image.';
        return;
    }

    if (!prompt.trim()) {
        responseDiv.textContent = 'Please enter a question.';
        return;
    }

    responseDiv.textContent = 'Processing...';

    try {
        const base64Image = await toBase64(fileInput.files[0]);

        const requestBody = {
            contents: [
                {
                    parts: [
                        {
                            text: prompt
                        },
                        {
                            inline_data: {
                                mime_type: fileInput.files[0].type,
                                data: base64Image.split(',')[1] // Remove data:image/...;base64, prefix
                            }
                        }
                    ]
                }
            ]
        };

        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        });

        if (!response.ok) {
            throw new Error(`API Error: ${response.status}`);
        }

        const data = await response.json();
        const answer = data.candidates[0].content.parts[0].text;
        responseDiv.textContent = answer;
    } catch (error) {
        responseDiv.textContent = `Error: ${error.message}`;
    }
});

function toBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}
