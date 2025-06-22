import * as recordsDao from "./dao.js";

export default function RecordsRoutes(app) {
    app.get("/api/quizzes/:quizId/latestRecord", async (req, res) => {
        const user = req.session["currentUser"];
        if (!user) return res.status(401).send("Not logged in");

        const quizId = req.params.quizId;
        const record = await recordsDao.findLatestRecordByUserAndQuiz(user._id, quizId);

        if (!record) return res.send(null);
        res.send(record);
    });

    const createRecord = async (req, res) => {
        const user = req.session["currentUser"];
        if (!user) {
            return res.status(401).send("Not logged in");
        }

        const quizId = req.params.quizId;
        const { answers, score } = req.body;
        const previousRecord = await recordsDao.findLatestRecordByUserAndQuiz(user._id, quizId);
        const attemptNumber = previousRecord ? previousRecord.attemptNumber + 1 : 1;  

        const recordData = {
            userId: user._id,
            quizId,
            answers,
            score,
            attemptNumber,
            timestamp: new Date(),
        };

        const newRecord = await recordsDao.createRecord(recordData);
        res.json(newRecord);
    };
    app.post("/api/quizzes/:quizId/createRecord", createRecord);

}