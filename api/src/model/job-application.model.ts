import mongoose from 'mongoose';

const JobApplicationSchema = new mongoose.Schema({
    description: {
        type: String,
        require: true
    },
    url: {
        type: String,
        require: true
    },
    keywords: [String]
});

const JobApplication = mongoose.model('JobApplication', JobApplicationSchema);
export default JobApplication;
