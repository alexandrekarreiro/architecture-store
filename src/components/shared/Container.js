import styled from "styled-components";

const Container = styled.div`
  align-items: ${(props) => props.alignItems};
  display: flex;
  flex-direction: ${(props) => props.flexDirection || "column"};
  justify-content: ${(props) => props.justifyContent};
  overflow: hidden;
  width: 100%;

  @media (min-width: 576px) {
    width: 540px;
  }

  @media (min-width: 768px) {
    width: 720px;
  }

  @media (min-width: 992px) {
    width: 960px;
    flex-direction: ${(props) => props.flexDirection || "row"};
  }

  @media (min-width: 1200px) {
    width: 1140px;
  }

  @media (min-width: 1400px) {
    width: 1320px;
  }
`;

Container.defaultProps = {
  alignItems: "flex-start",
  justifyContent: "flex-start",
};

export default Container;
