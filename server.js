const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// アイデア生成エンドポイント
app.post('/api/generate', async (req, res) => {
  try {
    const { apiKey } = req.body;
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'anthropic-version': '2023-06-01',
        'anthropic-api-key': apiKey || process.env.VITE_CLAUDE_API_KEY
      },
      body: JSON.stringify({
        model: 'claude-3-sonnet-20240229',
        max_tokens: 4000,
        system: 'You are a business idea generator assistant. You generate creative and practical business ideas that can be implemented by individual developers.',
        messages: [
          {
            role: 'user',
            content: req.body.prompt
          }
        ]
      })
    });

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: error.message });
  }
});

// アイデア分析エンドポイント
app.post('/api/analyze', async (req, res) => {
  try {
    const { apiKey, idea } = req.body;
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'anthropic-version': '2023-06-01',
        'anthropic-api-key': apiKey || process.env.VITE_CLAUDE_API_KEY
      },
      body: JSON.stringify({
        model: 'claude-3-sonnet-20240229',
        max_tokens: 4000,
        system: 'You are a business analyst assistant. You provide detailed analysis of business ideas with practical implementation suggestions.',
        messages: [
          {
            role: 'user',
            content: req.body.prompt
          }
        ]
      })
    });

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});