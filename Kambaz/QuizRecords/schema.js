import mongoose from "mongoose";

const recordsSchema = new mongoose.Schema({
    _id: String,                 
    userId: String,               
    quizId: String,               
    attemptNumber: Number,       
    timestamp: Date,             
    score: Number,               

    answers: [                   
        {
        questionId: String,      
        userAnswer: any,         
        isCorrect: Boolean       
        },
    ]

})