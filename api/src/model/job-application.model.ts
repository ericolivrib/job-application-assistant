import mongoose from 'mongoose';

const JobApplicationSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    keywords: [String]
});

const JobApplication = mongoose.model('JobApplication', JobApplicationSchema);
export { JobApplication };
