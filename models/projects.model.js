import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    projectTitle: {
      type: String,
      required: true,
      trim: true,
    },

    projectDescription: {
      type: String,
      required: true,
      trim: true,
    },

    projectLink: {
      type: String,
      required: true,
      trim: true,
    },

    learnings: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

const Project = mongoose.model("Project", projectSchema);
export default Project;
