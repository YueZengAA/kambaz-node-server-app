import model from "./model.js";
import { v4 as uuidv4 } from "uuid";

export function findQuizzes(courseId) {
  return model.find({ course: courseId });
}

export function deleteQuiz(quizId) {
  return model.deleteOne({_id: quizId});
}

export function updateQuiz(quizId, quizUpdates) {
  return model.updateOne({ _id: quizId }, { $set: quizUpdates })
}

export const findQuizById = (quizId) => model.findById(quizId);