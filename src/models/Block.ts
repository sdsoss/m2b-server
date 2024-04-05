const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blockSchema = new Schema({
    type: {
        type: String,
        required: true
    },
    content: String,
    url: String // utilisé uniquement pour les blocks de type 'image'
});

module.exports = mongoose.model('Block', blockSchema);