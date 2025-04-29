import styled from "styled-components";

export const Container = styled.section`
  height: auto;
  width: 100%;
  margin-top: 7rem;
  padding: 3rem 0;
  @media screen and (max-width: 1024px) {
  margin-top: 6rem;
}
`;
export const ProdContainer = styled.div`
  border-radius: 8px;
  box-shadow: 0 0 22px 2px rgba(220, 4, 105, 0.555);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 277px;
  width: 333px;
`;
export const Prod = styled.img`
height: 100%;
width: 100%;
object-fit: cover;
`;

