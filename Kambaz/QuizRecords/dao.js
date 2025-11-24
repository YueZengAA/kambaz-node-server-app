import model from "./model.js";
import { v4 as uuidv4 } from "uuid";

export const createRecord = async (record) => {
    const newRecord = { ...record, _id: uuidv4() };
    return await model.create(newRecord);
};

export const findLatestRecordByUserAndQuiz = async (userId, quizId) => {
  return await model.findOne({ userId, quizId })
    .sort({ attemptNumber: -1 }) 
    .exec();
};