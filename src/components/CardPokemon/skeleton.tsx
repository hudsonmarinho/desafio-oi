import React from "react";
import {
  Container,
  Description,
  Image,
  Info,
  Stat,
  Stats,
  Tag,
  Tags
} from "./styles";

import ImageBlank from "../../assets/images/blank.png";

const Skeleton: React.FC = () => {
  return (
    <Container>
      <Image className="skeleton-loading">
        <img src={ImageBlank} alt="cover" />
      </Image>

      <Description>
        <Info>
          <small className="skeleton-loading">
            <span>...</span>
          </small>
          <h3 className="skeleton-loading">
            <span>...</span>
          </h3>
        </Info>

        <Tags style={{ marginLeft: 10 }}>
          <Tag className="skeleton-loading">
            <span>...</span>
          </Tag>
          <Tag className="skeleton-loading">
            <span>...</span>
          </Tag>
        </Tags>
      </Description>

      <Stats>
        <Stat className="skeleton-loading">
          <span>...</span>
        </Stat>
        <Stat className="skeleton-loading">
          <span>...</span>
        </Stat>
        <Stat className="skeleton-loading">
          <span>...</span>
        </Stat>
      </Stats>
    </Container>
  );
};

export default Skeleton;
