import React, { ReactNode } from "react";
import { Container } from "./styles";

const Wrapper = ({ children }: { children: ReactNode }) => (
  <Container>{children}</Container>
);

export default Wrapper;
