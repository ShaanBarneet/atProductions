import React from "react";
import styled from "styled-components";
import Journey from '../Images/Journey.png'
import VCam from '../Images/VCam.png'
import Mission from '../Images/Mission.png'
import Vision from '../Images/lens.jpeg'

const Container = styled.div`
  min-height: 80vh;
  padding-top: 20px;
`;
const Heading = styled.h1`
  font-weight: 200;
  font-size: 33px;
  font-family: "Righteous", cursive;
  color: #96948d;
  @media (max-width: 768px) {
    font-size: 28px;
  }
`;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  @media (max-width: 700px) {
    flex-direction: column;
    padding: 20px;
  }
`;
const ImgContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;
const Image = styled.img`
  width: 80%;
  object-fit: cover;
`;
const ImageJourney = styled.img`
  width: 25vw;
  height:45vh;
  object-fit: cover;
`;
const ImageMission = styled.img`
  width: 35vw;
  height:30vh;
  object-fit: cover;
`;
const InfoContainer = styled.div`
  flex: 1;

`;
const Title = styled.div`
  font-weight: 200;
  font-size: 22px;
  font-family: "Josefin Sans", sans-serif;
  color: #1b1b1b;
  margin-top: 20px;
`;
const Desc = styled.p`
  margin: 20px 0px;
  font-size: 16px;
  font-family: "Josefin Sans", sans-serif;
  color: #5e5e5e;
`;

function Aboutus() {
  return (
    <Container>
      <Heading>ABOUT US</Heading>
      <Wrapper>
        <ImgContainer>
          <Image
            src={VCam}
            alt="Video Camera"
          />
        </ImgContainer>
        <InfoContainer>
          <Title>WHO WE ARE</Title>
          <Desc>
            AT Production proprietor Mr Abinash Dash, located at Koradakanta, Laxmisagar, 
            Bhubaneswar. The company was established on 15th October 2015. 
            This firm is an agricultural-based production unit. Our firm has been working under various schemes of the 
            Department of Agriculture and Food Production Odisha since 2015 & to date with great enthusiasm and satisfaction. 
            Our mission is to become one of the main leading agencies and contribute towards improving the state's agriculture sector.
          </Desc>
        </InfoContainer>
      </Wrapper>

      <Heading>The Start</Heading>
      <Wrapper>
      <InfoContainer>
          <Title>Reason behind the birth of AT Production </Title>
          <Desc>
          Mr Dash's journey began during his college days when he was involved in political campaigns. 
          It is here that he realized the power of art and visual media in reaching the masses and conveying a message. 
          This experience sparked the idea of starting a company that would use art, design, photography, and videography to 
          connect with people and tell powerful stories. With this concept in mind, Mr Dash gathered a team of talented filmmakers, 
          graphic designers, photographers, and videographers who shared his passion. Together, they started a film production organization 
          that quickly grew into something much bigger than they had ever imagined.
          </Desc>
        </InfoContainer>
        <ImgContainer>
          <ImageJourney
            src={Journey}
            alt="Journey Image"
          />
        </ImgContainer>
      </Wrapper>

      <Heading>Mission</Heading>
      <Wrapper>
        <ImgContainer>
          <ImageMission
            src={Mission}
            alt="Mission"
          />
        </ImgContainer>
        <InfoContainer>
          <Title>What we stand for</Title>
          <Desc>
 
            To sensitize the community through extension and outreach programmes in collaboration with the Government Schemes.
            To  organize the  core  information and  make  it  accessible and  useful  for all  the farming community through creative documentaries.


          </Desc>
        </InfoContainer>
      </Wrapper>

      <Heading>Vision</Heading>
      <Wrapper>
      <InfoContainer>
          <Title>What Defines Us </Title>
          <Desc>
          To be a contemporary organization in designing and documentary production.
          We believe that every story is worth telling, and we are committed to helping our clients tell their stories in a way 
          that is visually stunning, emotionally engaging, and socially impactful.
          </Desc>
        </InfoContainer>
        <ImgContainer>
          <ImageJourney
            src={Vision}
            alt="Vision Image"
          />
        </ImgContainer>
      </Wrapper>
    </Container>
  );
}

export default Aboutus;
