import mongoose from "mongoose";
import "./Collection";
const { Schema } = mongoose;

const flashcardSchema = new Schema({
  id: { type: String, required: true },
  collectionId: { type: Number, required: true }, //{ type: [Schema.Types.ObjectId], ref: "Collection" },
  question: { type: String, required: true },
  answer: { type: String, required: true },
  isCorrect: { type: Boolean, required: true },
});

const Flashcard =
  mongoose.models.Flashcard || mongoose.model("Flashcard", flashcardSchema);

export default Flashcard;
