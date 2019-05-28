import React from "react";
import styled from "styled-components";

const Main = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const About = () => {
  return (
    <Main>
      <h1>About</h1>
      <p>This project is for laboratory Frontend development.</p>
    </Main>
  );
};

export default About;
