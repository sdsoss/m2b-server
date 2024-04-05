const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pageSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    blocks: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Block'
        }
    ]
});

module.exports = mongoose.model('Page', pageSchema);