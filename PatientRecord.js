import mongoose from "mongoose";

const { Schema } = mongoose;

const diseases = ["Diabetes", "Hypertension", "Kidney Disease", "No significant risk"];

const PatientRecordSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    BMI: {
      type: Number,
      required: true,
    },
    smokingStatus: {
      type: String,
      enum: ["Never Smoked", "Former Smoker", "Current Smoker"],
      required: true,
    },
    physicalActivity: {
      type: String,
      enum: ["Sedentary", "Moderate", "Active"],
      required: true,
    },
    serumCreatinine: {
      type: Number,
      required: true,
    },
    HbA1c: {
      type: Number,
      required: true,
    },
    urineProtein: {
      type: Number,
      required: true,
    },
    patientId: {
      type: String,
      required: true,
      trim: true,
    },
    patientPhone: {
      type: String,
      required: true,
      trim: true,
    },
    disease: {
      type: String,
      enum: diseases,
      required: true,
    },
    riskType: {
      type: String,
      required: true,
      trim: true,
    },
    riskDetails: {
      type: String,
      required: true,
      trim: true,
    },
    confidence: {
      type: Number, // Define it as a number
      required: true, // Mark it as required
      min: 0, // Minimum value is 0
      max: 100, // Maximum value is 100
    },
    dateInput: {
      type: Date,
      default: Date.now,
    },
    lastUpdated: {
      type: Date,
      default: Date.now,
    },
    userId: {
      type: String,  // Changed from ObjectId to String
      required: true,
    },
  },
  {
    timestamps: true, // Automatically manages createdAt and updatedAt
  }
);

const PatientRecord = mongoose.models.PatientRecord || mongoose.model("PatientRecord", PatientRecordSchema);

export default PatientRecord;
