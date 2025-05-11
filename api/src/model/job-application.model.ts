import mongoose from 'mongoose';

// type JobApplicationType = {
//     description: string;
//     url: string;
//     keywords: string[];
// }

const JobApplicationSchema = new mongoose.Schema({
    description: String,
    url: String,
    keywords: [String]
});

const JobApplication = mongoose.model('JobApplication', JobApplicationSchema);
export default JobApplication;
