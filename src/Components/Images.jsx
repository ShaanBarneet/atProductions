import React from "react";
import styled from "styled-components";
import Img1 from '../Images/img1.jpg';
import Img2 from '../Images/img2.jpg';
import Img3 from '../Images/img3.jpg';
import Img4 from '../Images/img4.jpg';
import Img5 from '../Images/img5.jpg';
import Img6 from '../Images/img6.jpg';

const Container = styled.div`
  min-height: 70vh;
  padding-top: 20px;
  background-color: #fff;
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
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  align-content: space-around;
  column-gap: 0px;
  padding: 10px 0px;
`;

const Image = styled.img`
  width: 100%;
  height: 30vh;
`;

const ImageWrapper = styled.div`
  width:30%;
  margin: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 800px) {
    width: 45%;
  }
  @media (max-width: 500px) {
    width: 100%;
  }
`;





function Images() {
  return (
    <Container>
      <Heading>Images</Heading>
      <Wrapper>
        <ImageWrapper>
          <Image
            src={Img1}
            title="Image"
            alt="img"
          ></Image>
        </ImageWrapper>
        <ImageWrapper>
          <Image
            src={Img2}
            title="Image"
            alt="img"
          ></Image>
        </ImageWrapper>
        <ImageWrapper>
          <Image
            src={Img3}
            title="Image"
            alt="img"
          ></Image>
        </ImageWrapper>
        <ImageWrapper>
          <Image
            src={Img4}
            title="Image"
            alt="img"
          ></Image>
        </ImageWrapper>
        <ImageWrapper>
          <Image
            src={Img5}
            title="Image"
            alt="img"
          ></Image>
        </ImageWrapper>
        <ImageWrapper>
          <Image
            src={Img6}
            title="Image"
            alt="img"
          ></Image>
        </ImageWrapper>
      </Wrapper>
    </Container>
  );
}

export default Images;
