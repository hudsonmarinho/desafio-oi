import styled from "styled-components";

export const Container = styled.div`
  padding: 0 16px;

  @media (min-width: 768px) {
    padding: 0 32px;
  }

  @media (min-width: 992px) {
    max-width: 1200px;
    margin: 0 auto;
  }
`;
