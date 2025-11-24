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

export function createQuiz(quiz) {
  const newQuiz = { ...quiz, _id: uuidv4() };
  return model.create(newQuiz);
}

export const findQuizById = (quizId) => model.findById(quizId);

export const updateQuestion = async (quizId, questionId, questionData) => {
  const result = await model.updateOne(
    { _id: quizId, "questions._id": questionId },
    {
      $set: Object.entries(questionData).reduce((acc, [key, val]) => {
        acc[`questions.$.${key}`] = val;
        return acc;
      }, {})
    }
  );
  return result;
};