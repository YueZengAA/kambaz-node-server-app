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
   answer: String, 
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
   description: String,
   type: {
      type: String,
      enum: ["Graded Quiz", "Practice Quiz", "Graded Survey", "Ungraded Survey"],
      default: "Graded Quiz",
   },
   points: Number,
   group: {
      type: String,
      enum: ["Quizzes", "Exams", "Assignments", "Project"],
      default: "Quizzes",
   },
   shuffleAnswers: {
      type: String,
      enum: ["YES", "NO"],
      default: "YES",
   },
   timeLimit: {
      type: Number,
      default: 20,
   },
   multipleAttempts: {
      type: String,
      enum: ["YES", "NO"],
      default: "NO",
   },
   howManyAttempts: {
      type: Number,
      default: 1,
   },
   showCorrectAnswers: {
      type: String,
      enum: ["YES", "NO"],
      default: "YES",
   },
   showCorrectAnswersAfter: Date,
   accessCode: {
      type: String,
      default: "",
   },
   oneQuestionAtATime: {
      type: String,
      enum: ["YES", "NO"],
      default: "YES",
   },
   webcamRequired: {
      type: String,
      enum: ["YES", "NO"],
      default: "NO",
   },
   lockQuestions: {
      type: String,
      enum: ["YES", "NO"],
      default: "NO",
   },
   start: Date,
   until: Date,
   due: Date,

   questions: [QuestionSchema]
 },

 { collection: "quizzes" }
);

export default quizSchema;