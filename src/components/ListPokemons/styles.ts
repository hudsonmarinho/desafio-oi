import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  margin-bottom: 60px;
  grid-auto-columns: 1fr;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(1, 1fr);
  gap: 40px;

  @media (min-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 992px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;
