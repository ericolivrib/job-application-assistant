import mongoose from 'mongoose';

const JobApplicationSchema = new mongoose.Schema({
    description: String,
    url: String,
    keywords: [String]
});

const JobApplication = mongoose.model('JobApplication', JobApplicationSchema);
export { JobApplication };
