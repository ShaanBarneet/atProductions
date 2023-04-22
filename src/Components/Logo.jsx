import React from "react";
import styled from "styled-components";
import LogoImg from '../Images/logo.png'

const Container = styled.div`
  height: 20vh;
`;
const Wrapper = styled.div`
  padding: 0px;
  display: flex;
  height: 100%;
  justify-content: center;
`;

const Image = styled.img``;

function Logo() {
  return (
    <Container>
      <Wrapper>
        <Image
          className="Logo-Image-class"
          src={LogoImg}
        />
      </Wrapper>
    </Container>
  );
}

export default Logo;
