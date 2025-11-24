import * as quizzesDao from "./dao.js";

export default function QuizzesRoutes(app) {
    app.delete("/api/quizzes/:quizId", async (req, res) => {
        const { quizId } = req.params;
        const status = await quizzesDao.deleteQuiz(quizId);
        res.send(status);
    });

    app.put("/api/quizzes/:quizId", async (req, res) => {
        const { quizId } = req.params;
        const quizUpdates = req.body;
        const status = await quizzesDao.updateQuiz(quizId, quizUpdates);
        res.send(status);
    });

    app.get("/api/quizzes/:quizId", async (req, res) => {
        const { quizId } = req.params;
        const quiz = await quizzesDao.findQuizById(quizId);
        res.json(quiz);
    });

    app.put("/api/quizzes/:quizId/questions/:questionId", async (req, res) => {
        const { quizId, questionId } = req.params;
        const updated = await quizzesDao.updateQuestion(quizId, questionId, req.body);

        // calculate and update quiz points
        const quiz = await quizzesDao.findQuizById(quizId);
        const totalPoints = quiz.questions.reduce((sum, q) => sum + (q.points || 0), 0);
        await quizzesDao.updateQuiz(quizId, { points: totalPoints });

        res.send(updated); 
    });

    app.delete("/api/quizzes/:quizId/questions/:questionId", async (req, res) => {
        const { quizId} = req.params;
        const quiz = await quizzesDao.findQuizById(quizId);
        const updatedQuestions = quiz.questions.filter(q => q._id !== req.params.questionId);
        const status = await quizzesDao.updateQuiz(quizId, { questions: updatedQuestions });
        res.send(status);
    });
}

