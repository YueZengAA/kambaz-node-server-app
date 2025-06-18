import mongoose from "mongoose";

const QuestionSchema = new mongoose.Schema({
   _id: String,
   type: {
      type: String,
      enum: ["TRUE_FALSE", "MULTIPLE_CHOICE", "FILL_BLANK"],
      default: "MULTIPLE_CHOICE",
      required: true,
   },
   question: { type: String, required: true },
   options: [String],           
   answer: mongoose.Schema.Types.Mixed, 
   points: Number
});

const quizSchema = new mongoose.Schema({
   _id: String,
   name: String,
   course: String,
   status: {
      type: String,
      enum: ["PUBLISH", "UNPUBLISH"],
      default: "UNPUBLISH",
   },
   Description: String,
   type: {
      type: String,
      enum: ["Graded Quiz", "Practice Quiz", "Graded Survey", "Ungraded Survey"],
      default: "Graded Quiz",
   },
   points: Number,
   Group: {
      type: String,
      enum: ["Quizzes", "Exams", "Assignments", "Project"],
      default: "Quizzes",
   },
   ShuffleAnswers: {
      type: String,
      enum: ["Yes", "No"],
      default: "Yes",
   },
   TimeLimit: {
      type: Number,
      default: 20,
   },
   MultipleAttempts: {
      type: String,
      enum: ["Yes", "No"],
      default: "No",
   },
   AccessCode: {
      type: String,
      default: "",
   },
   OneQuestionataTime: {
      type: String,
      enum: ["Yes", "No"],
      default: "Yes",
   },
   WebcamRequired: {
      type: String,
      enum: ["Yes", "No"],
      default: "No",
   },
   LockQuestions: {
      type: String,
      enum: ["Yes", "No"],
      default: "No",
   },
   start: Date,
   until: Date,
   due: Date,

   Questions: [QuestionSchema]
 },
 { collection: "quizzes" }
);

export default quizSchema;