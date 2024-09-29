const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());  // To allow front-end to call the backend
app.use(bodyParser.json());

const courses = [
    { id: 'web-dev', title: 'Introduction to Web Development', instructor: 'John Doe', duration: '10 hours' },
    { id: 'data-science', title: 'Data Science Basics', instructor: 'Jane Smith', duration: '12 hours' }
];

// Fetch courses
app.get('/api/courses', (req, res) => {
    res.json(courses);
});

// Simulate enrollment (in a real app, you would save this to a database)
app.post('/api/enroll', (req, res) => {
    const { userId, courseId } = req.body;
    console.log(`User ${userId} enrolled in course ${courseId}`);
    res.send('Enrollment successful');
});

// Update progress
app.post('/api/update-progress', (req, res) => {
    const { userId, progress } = req.body;
    console.log(`User ${userId} progress updated to ${progress}%`);
    res.send('Progress updated');
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
