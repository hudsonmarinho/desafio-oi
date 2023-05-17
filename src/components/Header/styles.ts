import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  margin-bottom: 40px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 16px;
  background: #726b8f;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const Logo = styled.img`
  width: 50px;
  height: auto;
`;

export const Button = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
`;
