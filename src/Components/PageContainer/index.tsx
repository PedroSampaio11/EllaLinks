import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 4rem;
  letter-spacing: -1px;
  font-family: 'Onest';
  height: 100%;
  color: ${(props) => props.theme.colors.pink};
  @media screen and (max-width: 420px){
    padding: 0 1rem;
  }
`;
