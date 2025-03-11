import mongoose from "mongoose";



const currentUserSessionSchema = new mongoose.Schema({
  uuidKey: {
    type: String,
    required: true,
    unique: true,
  },
  sessionKey: {
    type: String,
    required: true,
  },
  sessionTime: {
    type: Date,
    default: Date.now,
    required: true,
  },
  userId: {
    type: String,  // Changed from ObjectId to String
    required: true,
  },
});

const CurrentUserSession = mongoose.models.CurrentUserSession || mongoose.model("CurrentUserSession", currentUserSessionSchema);

export default CurrentUserSession;