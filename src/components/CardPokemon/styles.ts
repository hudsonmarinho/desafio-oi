import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  transition: all ease-in-out 0.2s;
`;

export const Image = styled.figure`
  display: flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 1 / 1;
  padding: 60px 20px 20px;
  margin-bottom: 16px;
  border-radius: 10px;
  overflow: hidden;

  img {
    width: 100%;
  }

  &.skeleton-loading {
    border-radius: 10px;
    margin-bottom: 16px;
  }
`;

export const Description = styled.div`
  min-height: 46px;
  display: flex;
`;

export const Info = styled.div`
  width: 65%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  small {
    border-radius: 4px;
    display: flex;
    margin-bottom: 0px;
    font-family: "Istok Web";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    color: rgba(58, 47, 102, 0.65);
  }

  h3 {
    border-radius: 4px;
    text-transform: capitalize;
    font-family: "Istok Web", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    color: #3a2f66;
  }
`;

export const Tags = styled.div`
  width: 35%;

  span {
    &:not(:last-child) {
      margin-bottom: 6px;
    }
  }
`;

export const Tag = styled.span`
  height: 20px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  font-family: "Istok Web", sans-serif;
  font-weight: 600;
  font-size: 11px;
  color: #fff;
`;

export const Stats = styled.div`
  display: flex;
  justify-content: space-between;
  top: 10px;
  left: 10px;
  right: 10px;
  position: absolute;
`;

export const Stat = styled.div`
  border-radius: 4px;
  padding: 7px;
  text-align: center;

  &.skeleton-loading {
    width: 32px;
    height: 45px;
    padding: 0;
    transform: rotate(180deg);
  }
`;

export const Label = styled.div`
  margin-bottom: 6px;
  text-transform: uppercase;
  font-family: "Istok Web", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  color: #fff;
`;

export const Value = styled.div`
  font-family: "Istok Web";
  font-style: normal;
  font-weight: 700;
  font-size: 10px;
  color: #fff;
`;
