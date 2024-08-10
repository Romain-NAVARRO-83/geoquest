import 'dotenv/config';
import express from "express";
import cors from 'cors';
import apiController from './controllers/apiController.js';

const app = express();
const port = process.env.PORT;

app.use(cors());


app.get('/', (req, res) => {
    res.send('Geoquest API');
})
app.get('/quests', apiController.getAllQuests);

app.listen(port, () => {
    console.log(`Success! Geocache API running on http://localhost:${port}.`);
});
