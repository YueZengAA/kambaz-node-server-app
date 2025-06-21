import mongoose from "mongoose";
import schema from "./schema.js";

const model = mongoose.model("recordModel", schema);
export default model;