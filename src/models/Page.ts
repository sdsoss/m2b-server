import mongoose from 'mongoose';
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

export default mongoose.model('Page', pageSchema);