import CollectionList from "@/components/CollectionList";
import styled from "styled-components";
import Navbar from "@/components/Navbar";

const Container = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Homepage({
  flashcards,
  collections,
  handleCreateFlashcard,
}) {
  return (
    <>
      <Container>
        <h1>Flipwise App</h1>
        <h2>List of collections</h2>
      </Container>
      <CollectionList flashcards={flashcards} collections={collections} />
      <Navbar handleCreateFlashcard={handleCreateFlashcard} />
    </>
  );
}
