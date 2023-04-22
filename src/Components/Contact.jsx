import React from "react";
import styled from "styled-components";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Container = styled.div`
  min-height: 60vh;
  padding-top: 20px;
  background-color: #f6f6f6;
  @media (max-width: 700px) {
    height: auto;
  }
`;
const Heading = styled.h1`
  font-weight: 200;
  font-size: 33px;
  font-family: "Righteous", cursive;
  color: #96948d;
  @media (max-width: 700px) {
    font-size: 28px;
  }
`;
const Wrapper = styled.div`
  padding: 50px;
  @media (max-width: 700px) {
    padding: 20px;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  font-weight: 200;
  font-size: 22px;
  font-family: "Josefin Sans", sans-serif;
  color: #1b1b1b;
  margin-top: 20px;
  width: fit-content;
`;
const Desc = styled.p`
  margin: 20px 0px;
  font-size: 16px;
  font-family: "Josefin Sans", sans-serif;
  width: 50%;
  color: #5e5e5e;
  @media (max-width: 700px) {
    width: 100%;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  background-color: #455a64;
  &:hover {
    background-color: #546d78;
  }
  @media (max-width: 768px) {
    padding: 7px;
  }
  padding: 15px;
  cursor: pointer;
  font-family: "Josefin Sans", sans-serif;
  font-weight: 500;
`;

const Button = styled.button`
  border: none;
  background-color: transparent;
  color: white;
`;

const Link = styled.a`
  text-decoration: none;
`;

function Contact() {
  return (
    <Container>
      <Wrapper>
        <Heading>CONTACT US</Heading>
        <Title>Let's Get Started!</Title>
        <Desc>
          Tell us a little bit about your project. We will get back to you as
          soon as you can with some ideas of how we can make your story shine.
        </Desc>
        <Link href="https://wa.me/919658065899">
          <ButtonGroup>
            <WhatsAppIcon sx={{ color: "white" }} />
            <Button>Message Us on Whatsapp</Button>
          </ButtonGroup>
        </Link>
        <Title>AT Productions</Title>
        <Desc>Bhubaneswar, Odisha, India</Desc>
      </Wrapper>
    </Container>
  );
}

export default Contact;
