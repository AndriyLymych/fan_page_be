const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const NewsModel = require('./models/News');
const ResortModel = require('./models/Resort');

const app = express();

app.use(cors({}));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.post('/news', async (req, res) => {
    try {
        const newsData = req.body;

        const news = await new NewsModel(newsData).save();

        res.json(news)

    } catch (e) {
        console.log(e)
    }
});

app.post('/resorts', async (req, res) => {
    try {
        const resortData = req.body;

        const resort = await new ResortModel(resortData).save();

        res.json(resort)

    } catch (e) {
        console.log(e)
    }
});
app.get('/news', async (req, res) => {
    try {
        const news = await NewsModel.find();

        res.json(news)

    } catch (e) {
        console.log(e)
    }
});
app.get('/resorts', async (req, res) => {
    try {
        const resorts = await ResortModel.find();

        res.json(resorts)

    } catch (e) {
        console.log(e)
    }
});

mongoose.connect("mongodb://localhost/fan_page", {useNewUrlParser: true, useUnifiedTopology: true});


app.listen(3000, () => {
    console.log('listening port 3000...')
});
