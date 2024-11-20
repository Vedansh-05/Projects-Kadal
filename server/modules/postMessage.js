import mongoose from 'mongoose';

const projectSchema = mongoose.Schema({
    organisationName: { type: String, required: true },
    projectName: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    enrollmentDeadline: { type: Date, required: true },
    stipend: { type: Number, required: true },
    logo: { type: String, required: true }, // URL to the uploaded logo
    registrationLink: { type: String, required: true }, // Google Form URL
    projectDescription: { type: String, required: true }, // Google Drive PDF link
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const Project = mongoose.model('Project', projectSchema);

export default Project;