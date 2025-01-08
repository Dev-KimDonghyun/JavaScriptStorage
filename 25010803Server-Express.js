import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Main page get request!');
});

app.listen(3000, () => {
    console.log('Server is running!');
});