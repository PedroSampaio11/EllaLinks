import styled from "styled-components";

export const Container = styled.section`
  height: auto;
  width: 100%;
  margin-top: 7rem;
  padding: 3rem 0;
  @media screen and (max-width: 1024px) {
    margin-top: 1rem;
    padding: 2rem 0;
  }
`;
export const ProdContainer = styled.div`
  border-radius: 14px;
  box-shadow: 0 0 22px 2px rgba(220, 4, 105, 0.555);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 277px;
  width: 333px;
  @media screen and (max-width: 500px) {
    height: 220px;
    width: 322px;
  }
`;
export const Prod = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  transition: 0.3s ease;
  &:hover {
    filter: brightness(1.05);
    transform: scale(1.02);
  }

`;
