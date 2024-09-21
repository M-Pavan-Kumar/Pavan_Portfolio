const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const { MongoClient, ServerApiVersion } = require('mongodb');
const projectsRouter = require('./routes/projects');
const nodemailer = require('nodemailer');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: 'http://localhost:3000', // or whatever your frontend URL is
  credentials: true
}));
app.use(express.json());

// Add this near the top of your file, after setting up middleware
app.use((req, res, next) => {
  console.log(`Received ${req.method} request for ${req.url}`);
  next();
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

// MongoDB connection URI
const uri = "mongodb+srv://Pavan:kumar123@cluster0.pfirt1o.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Connect to MongoDB using Mongoose
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => {
  console.error('MongoDB connection error:', err);
  process.exit(1); // Exit the process if unable to connect to MongoDB
});

// Routes
app.use('/api/portfolio', require('./routes/portfolio'));
app.use('/api/projects', projectsRouter);

// Nodemailer setup
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.post('/api/send-email', async (req, res, next) => {
  console.log('Received email request:', req.body);
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    console.log('Missing required fields');
    return res.status(400).json({ error: 'All fields are required' });
  }

  const mailOptions = {
    from: `"${name}" <${email}>`, // This will show the user's name and email as the sender
    to: process.env.EMAIL_USER, // Your email address
    subject: `New message from ${name} via your Portfoilio`,
    text: `
      Name: ${name}
      Email: ${email}
      Message: ${message}
    `,
    replyTo: email // This allows you to reply directly to the user's email
  };

  try {
    console.log('Attempting to send email');
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: error.message || 'Failed to send email' });
  }
});

// Place this at the end of your server.js file
app.use((req, res) => {
  res.status(404).json({ error: 'Not Found' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Add this at the very end of your server.js file
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ error: 'Internal Server Error' });
});