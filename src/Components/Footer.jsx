import React from "react";
import styled from "styled-components";

const Container = styled.div`
  min-height: 10vh;
  padding-top: 20px;
  background-color: black;
`;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 800px) {
    flex-direction: column;
    padding: 20px;
  }
`;
const Desc = styled.p`
  margin: 20px 0px;
  font-size: 16px;
  font-weight: 500;
  font-family: "Josefin Sans", sans-serif;
  color: #A4A4A4;
`;

function Footer(){
    return(
        <Container>
            <Wrapper>
                <Desc>Copyright © 2023 AT Productions - All Rights Reserved.</Desc>
                <Desc>Created by Shaan</Desc>
            </Wrapper>
        </Container>
    )
}

export default Footer;