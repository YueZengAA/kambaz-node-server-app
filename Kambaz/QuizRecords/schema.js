import mongoose from "mongoose";

const recordSchema = new mongoose.Schema({
    _id: String,                 
    userId: String,               
    quizId: String,               
    attemptNumber: Number,       
    timestamp: Date,             
    score: Number,               

    answers: [                   
        {
        questionId: String,      
        userAnswer: mongoose.Schema.Types.Mixed,         
        isCorrect: Boolean       
        },
    ]
},
{ collection: "quizRecords" }
);

export default recordSchema;