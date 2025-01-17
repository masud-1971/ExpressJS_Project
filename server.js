import express from 'express';
import  jwt from 'jsonwebtoken';
import {PORT} from "./config/config.js";
const app = express();
const port = PORT;

// Secret Key of JWT
const secretKey = 'your_secret_key';

// GET API যা JSON Web Token তৈরি করবে
app.get('/create-token', (req, res) => {
    // টোকেনের জন্য তথ্য
    const payload = {
        username: 'Masud',
        role: 'user'
    };

    // টোকেন তৈরি করা
    const token = jwt.sign(payload, secretKey, { expiresIn: '1h' });

    // রেসপন্সে টোকেন পাঠানো
    res.json({ token });
});

// সার্ভার শুরু
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
