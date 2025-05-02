import styled from "styled-components";

export const Container = styled.section`
  height: auto;
  width: 100%;
  margin-top: 4rem;
  padding: 3rem 0.4rem;
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
    height: 250px;
    width: 333px;
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

