import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  margin: 0 0 40px 0;
  overflow-x: auto;
  white-space: nowrap;

  @media (min-width: 576px) {
    justify-content: center;
  }
`;

export const PaginationButton = styled.button`
  border: none;
  background-color: #eee;
  color: #333;
  font-size: 12px;
  font-weight: bold;
  padding: 10px 15px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  transition: all ease-in-out 0.2s;

  &:hover,
  &.active {
    background-color: #645a8d;
    color: white;
  }
`;
