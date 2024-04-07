import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const blockSchema = new Schema({
    _type: {
        type: Schema.Types.String,
        required: true
    },
    content: {
        type: Schema.Types.Mixed,
        required: true
    },
    versionNumber: {
        type: Schema.Types.Number,
        required: false
    },
    page: {
        type: Schema.Types.ObjectId,
        ref: 'Page',
        required: true
    }
});

export default mongoose.model('Block', blockSchema);