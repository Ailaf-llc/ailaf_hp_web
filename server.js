import express from 'express';
import cors from 'cors';
import axios from 'axios';

const app = express();
app.use(cors());
app.use(express.json());

const DISCORD_WEBHOOK_URL = process.env.DISCORD_WEBHOOK_URL;

if (!DISCORD_WEBHOOK_URL) {
    console.error('DISCORD_WEBHOOK_URL is not set. Please set this environment variable.');
    process.exit(1);
}

app.post('/api/send-to-discord', async (req, res) => {
    try {
        const { name, email, message } = req.body;
        const discordMessage = {
            content: `新しい問い合わせがありました：\n名前: ${name}\nメール: ${email}\nメッセージ: ${message}`
        };

        await axios.post(DISCORD_WEBHOOK_URL, discordMessage);
        res.status(200).json({ message: '問い合わせが正常に送信されました。' });
    } catch (error) {
        console.error('Error sending message to Discord:', error);
        res.status(500).json({ message: '問い合わせの送信中にエラーが発生しました。' });
    }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});