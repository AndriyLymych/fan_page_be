const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    news: {
        type: String,
        required: true

    },

});

module.exports = mongoose.model("News", newsSchema);
