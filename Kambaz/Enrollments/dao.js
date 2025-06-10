import Database from "../Database/index.js";
import { v4 as uuidv4 } from "uuid";

export function enrollUserInCourse(userId, courseId) {
  const { enrollments } = Database;
  enrollments.push({ _id: uuidv4(), user: userId, course: courseId });
}

export function unenroll(enrollmentId) {
  const { enrollments } = Database;
  Database.enrollments = enrollments.filter(e => e._id !== enrollmentId);
  return { status: "ok" };
}

export function findAllEnrollments() {
  return Database.enrollments;
}