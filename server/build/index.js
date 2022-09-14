import express from 'express';
const app = express();
app.get('/', (request, response) => {
    return response.json([
        { id: 1, name: 'Event 1' },
        { id: 2, name: 'Event 2' },
        { id: 3, name: 'Event 3' },
        { id: 4, name: 'Event 4' },
    ]);
});
app.listen(3333);
