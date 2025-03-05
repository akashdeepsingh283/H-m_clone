import mongoose from 'mongoose';

// Connect to MongoDB
const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/user', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection failed:', error);
        process.exit(1);
    }
};

// Define the user schema
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true, match: [/.+\@.+\..+/, 'Please fill a valid email address'] },
    password: { type: String, required: true },
});

// Create the model
const User = mongoose.model('User', userSchema);

// Export the connection function and the User model
export { connectDB, User };
