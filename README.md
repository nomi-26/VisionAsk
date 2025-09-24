# Image Chatbot Chrome Extension

This Chrome extension allows you to upload images and ask questions about them using Google's Gemini API.

## Setup Instructions

1. **Get a Google AI API Key**:
   - Go to [Google AI Studio](https://makersuite.google.com/app/apikey).
   - Create a new API key (free tier available).

2. **Add Your API Key**:
   - Open `popup.js`.
   - Replace `AIzaSyBbzwF8qA_uSAa7aepdGfv9dNlqBBkRa2E` with your actual API key.

3. **Add Icons**:
   - Create or download PNG icons for the extension.
   - Place them in the `icons/` folder:
     - `icon16.png` (16x16 pixels)
     - `icon48.png` (48x48 pixels)
     - `icon128.png` (128x128 pixels)

4. **Load the Extension in Chrome**:
   - Open Chrome and go to `chrome://extensions/`.
   - Enable "Developer mode" (top right).
   - Click "Load unpacked" and select the `image-chatbot-extension` folder.

5. **Use the Extension**:
   - Click the extension icon in the toolbar.
   - Upload an image.
   - Enter a question about the image.
   - Click "Submit" to get the AI response.

## Features

- Upload images (JPEG, PNG, etc.).
- Ask questions about the uploaded image.
- Uses Google's Gemini Pro Vision model for accurate responses.
- Free tier available for API usage.

## Notes

- Ensure your API key has sufficient quota for image processing.
- The extension uses Manifest V3 for compatibility with modern Chrome.
