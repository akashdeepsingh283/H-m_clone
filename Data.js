import express from 'express';
import cors from 'cors';
import { connectDB, User } from './mongo.js'; // Adjusting import for connectDB and User model

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to the database
connectDB();

// GET route for login
app.get('/login', (req, res) => {
    res.send('login page');
});

// POST route for login
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email: email });
        if (user) {
            res.json("exist");
        } else {
            res.json("not exist");
        }
    } catch (e) {
        res.status(500).json({ error: 'An error occurred while checking user login' });
    }
});

// POST route for signup
app.post('/signup', async (req, res) => {
    const { name, username, email, password } = req.body;
    const newUser = new User({
        name,
        username,
        email,
        password,
    });
    try {
        const check = await User.findOne({ email: email });
        if (check) {
            res.json("exist");
        } else {
            await newUser.save(); // Use save() to save the user document
            res.json("user created");
        }
    } catch (e) {
        res.status(500).json({ error: 'An error occurred while signing up the user' });
    }
});

// Start the server
app.listen(5000, () => {
    console.log('server started on port 5000');
});
