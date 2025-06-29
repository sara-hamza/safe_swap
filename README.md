## SafeSwap Backend

This project contains a simple Express API. A new `/api/chat` endpoint allows
integration with OpenAI for health chat and summary generation.

### Setup

1. Install dependencies
   ```bash
   cd server && npm install
   ```
2. Create an `.env` file with your database and OpenAI API keys:
   ```
   DB_URL=postgres://...
   OPENAI_API_KEY=sk-...
   ```
3. Start the server
   ```bash
   npm start
   ```

Endpoints:

* `POST /api/chat` – send `{ messages: [{role, content}] }` to receive an AI
  reply.
* `POST /api/chat/summary` – send the same payload to receive a doctor-friendly
  summary of the conversation.
