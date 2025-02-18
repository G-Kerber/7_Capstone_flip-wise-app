import dbConnect from "@/db/connect";
import Flashcard from "@/db/models/Flashcard";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const flashcards = await Flashcard.find();

    response.status(200).json(flashcards);
    return;
  }

  if (request.method === "POST") {
    try {
      const flashcardData = request.body;
      await Flashcard.create(flashcardData);

      response.status(201).json({ status: "Flashcard created." });
    } catch (error) {
      console.log(error);
      response.status(400).json({ error: error.message });
    }
  }

  response.status(405).json({ status: "Method not allowed." });
}
