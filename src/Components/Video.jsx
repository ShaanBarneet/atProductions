import React from "react";
import styled from "styled-components";

const Container = styled.div`
  min-height: 70vh;
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
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

const VideoFrame = styled.iframe`
  width: 80%;
  height: 40vh;
`;

const VideoWrapper = styled.div`
  min-width:48%;
  height: 70vh;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 800px) {
    width: 100%;
  }
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

function Video() {
  return (
    <Container>
      <Heading>VIDEO</Heading>
      <Wrapper>
        <VideoWrapper>
          <VideoFrame
            src="https://www.youtube.com/embed/pbIA5ncUIgM"
            title="BIJAYA PRADHAN // NAYAGARH"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></VideoFrame>
          <Title>Supported by government schemes</Title>
          <Desc>A wide range of schemes and supplies</Desc>
        </VideoWrapper>
        <VideoWrapper>
          <VideoFrame
            src="https://www.youtube.com/embed/oHkpQ4EgOWY"
            title="BIJAYA PRADHAN // NAYAGARH"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></VideoFrame>
          <Title>Supported by farmers</Title>
          <Desc>Being the voice and understanding the farmers</Desc>
        </VideoWrapper>
        <VideoWrapper>
          <VideoFrame
            src="https://www.youtube.com/embed/czjoHqNG7_s"
            title="BIJAYA PRADHAN // NAYAGARH"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></VideoFrame>
          <Title>Empowering women</Title>
          <Desc>We encourage women who shine in the field of agriculture</Desc>
        </VideoWrapper>
        <VideoWrapper>
          <VideoFrame
            src="https://www.youtube.com/embed/ji4Btk3AbP4"
            title="BIJAYA PRADHAN // NAYAGARH"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></VideoFrame>
          <Title>Your dreams our lens</Title>
          <Desc>Capturing the dreams of the farmers</Desc>
        </VideoWrapper>
      </Wrapper>
    </Container>
  );
}

export default Video;
