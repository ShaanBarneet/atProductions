import React from "react";
import styled from "styled-components";
import Videourl from '../Images/video.mp4'


const Container = styled.div`
  background-color: #25222a;
  height: 80vh;
  @media (max-width: 768px) {
    height: auto;
  }
`;
const Wrapper = styled.div`
  padding: 25px;
  display: flex;
  height: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const VideoContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  margin: 5px;
`;
const Video = styled.video`
  width: 100%;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px;
  height: 100%;
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
`;
const InfoWrapper = styled.div`
  width: 80%;
`;
const Title = styled.div`
  font-family: "Righteous", cursive;
  font-weight: 200;
  color: white;
  font-size: 4vw;
  text-align: center;
`;
const Desc = styled.p`
  margin: 15px 0px;
  color: #dfdfdc;
  font-size: 2vw;
  font-family: "Josefin Sans", sans-serif;
  @media (max-width: 768px) {
    font-size: 3vw;
  }
`;
const Button = styled.button`
  padding: 15px;
  background-color: #dfdfdc;
  cursor: pointer;
  font-family: "Josefin Sans", sans-serif;
  font-weight: 500;
  &:hover {
    background-color: aliceblue;
  }
  @media (max-width: 768px) {
    padding: 7px;
  }
`;

const Introduction = () => {
  return (
    <Container>
      <Wrapper>
        <VideoContainer>
          <Video autoPlay loop muted>
            <source
              src={Videourl}
              type="video/mp4"
            />
          </Video>
        </VideoContainer>
        <InfoContainer>
          <InfoWrapper>
            <Title>BEING THE VOICE OF THE FARMERS</Title>
            <Desc>Bring your story to life!</Desc>
            <a href="mailto:sales.atproductions@gmail.com">
              <Button>Contact Us</Button>
            </a>
          </InfoWrapper>
        </InfoContainer>
      </Wrapper>
    </Container>
  );
};

export default Introduction;
