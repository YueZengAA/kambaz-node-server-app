import * as enrollmentsDao from "./dao.js";

export default function EnrollmentRoutes(app) {
    app.post("/api/enrollments", (req, res) => {
        const { user, course } = req.body;
        const result = enrollmentsDao.enrollUserInCourse(user, course);
        res.send(result);
    });

    app.delete("/api/enrollments/:eid", (req, res) => {
        const { eid } = req.params;
        const result = enrollmentsDao.unenroll(eid);
        res.send(result);
    });

    app.get("/api/enrollments", (req, res) => {
        const enrollments = enrollmentsDao.findAllEnrollments();
        res.send(enrollments);
    });
}