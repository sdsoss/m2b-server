import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const blockSchema = new Schema({
    type: {
        type: String,
        required: true
    },
    content: String,
    url: String,
    page: {
        type: Schema.Types.ObjectId,
        ref: 'Page',
        required: true
    }
});

export default mongoose.model('Block', blockSchema);