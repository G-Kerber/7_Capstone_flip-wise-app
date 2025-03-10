import styled from "styled-components";
import Link from "next/link";
//import ImageUpload from "@/components/ImageUpload";
import Image from "next/image";

const ModeList = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 48px;
  width: 100%;
  max-width: 550px;
  margin-left: auto;
  margin-right: auto;
  padding: 0;
`;

const ModeItem = styled.li`
  width: 100%;
  height: 300px;
  max-width: 550px;
  cursor: pointer;
  border-radius: 12px;
  overflow: hidden;
  border: none;
  list-style: none;
  box-shadow: ${({ theme }) => theme.boxShadowCollectionCard};
  transition: transform 0.2s;
  margin-bottom: 40px;

  &:hover {
    transform: scale(1.02);
    box-shadow: ${({ theme }) => theme.boxShadowCollectionCardHover};
  }

  @media (max-width: 768px) {
    width: 90%;
    margin-left: 5%;
    margin-right: 5%;
  }
`;

const BaseLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.collectionCardText};
`;

const StyledCardLink = styled(BaseLink)`
  height: 100%;
  position: relative;
`;

const ModeArticle = styled.article`
  height: 100%;
  background: ${({ theme }) => theme.collectionCard};
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const StyledTitle = styled.h3`
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 16px;
  margin-top: 16px;

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

const StyledStatsItem = styled.p`
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 1.3rem;
  margin-top: 4px;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 54px;
  }
`;
const StyledStatsItemSpan = styled.span`
  font-weight: 700;
  background: ${({ theme }) => theme.collectionCardText};
  color: ${({ theme }) => theme.collectionCard};
  padding: 4px 8px;
  border-radius: 8px;
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export default function Homepage({}) {
  return (
    <>
      {/* <ImageUpload></ImageUpload>
            <StyledImage
        alt={`image of ${image.title}`}
        src={image.url}
        fill
        style={{ objectFit: "contain" }}
      ></StyledImage> */}

      <ModeList>
        <ModeItem>
          <StyledCardLink href="/collections">
            <ModeArticle>
              <StyledTitle>Learning Mode</StyledTitle>
              <StyledStatsItem>
                Description:
                <StyledStatsItemSpan>
                  This is the Learning Mode. Here you can find a list of
                  collections. In each collection you can find a list of
                  flashcards with questions and answers to the topic of the
                  collection. Also you can create new cards and collections,
                  edit and delete existing ones.
                </StyledStatsItemSpan>
              </StyledStatsItem>
            </ModeArticle>
          </StyledCardLink>
        </ModeItem>
        <ModeItem>
          <StyledCardLink href="/quiz">
            <ModeArticle>
              <StyledTitle>Quiz Mode</StyledTitle>
              <StyledStatsItem>
                Description:
                <StyledStatsItemSpan>
                  Test your knowledge in Quiz Mode! Select a collection and
                  difficulty level to start. Challenge yourself with different
                  time limits and card quantities. If needed, AI will generate
                  additional cards to ensure a complete quiz experience.
                </StyledStatsItemSpan>
              </StyledStatsItem>
            </ModeArticle>
          </StyledCardLink>
        </ModeItem>
      </ModeList>
    </>
  );
}
