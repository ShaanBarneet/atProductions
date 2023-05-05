import React, { useEffect } from "react";
import styled from "styled-components";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import EmailIcon from "@mui/icons-material/Email";
import MessageIcon from "@mui/icons-material/Message";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import "./styles.css";
import { useState } from "react";
import classNames from "classnames";
import { send } from "emailjs-com";

const Container = styled.div`
  box-sizing: border-box;
`;
const FormContainer = styled.div`
  position: fixed;
  bottom: 120px;
  right: 50px;
  padding: 24px 36px;
  width: 480px;
  box-shadow: 0 10px 50px rgba(0, 0, 0, 0.1);
  border-radius: 24px;
  transform: rotateZ(-6deg);
  transform-origin: bottom right;
  opacity: 0;
  pointer-events: none;
  transition: all 500ms ease;
`;
const ContactIcon = styled.div`
  position: fixed;
  bottom: 40px;
  right: 50px;
  cursor: pointer;
  /* padding: 0px 15px 15px 15px; */
  background-color: #dfdfdc;
  /* border: 2px solid red; */
  border-radius: 50%;
  height: 60px;
  width: 60px;
`;
const I = styled.i`
  font-size: 35px;
  color: #003049;
  transition: all 300ms ease;
  padding: 0%;
  &:hover {
    transform: scale(1.1);
  }
  /* border: 2px solid red;
  height: 100%;
  width: 100px; */
`;

const Heading = styled.h3`
  font-size: 30px;
  color: white;
  margin-top: 10px;
  position: relative;
  &::after {
    content: "";
    height: 3px;
    width: 36px;
    background: #ef233c;
    position: absolute;
    left: 0px;
    bottom: -4px;
  }
`;
const Form = styled.form``;
const FieldContainer = styled.div`
  position: relative;
`;

const Label = styled.label`
  position: absolute;
  top: 16px;
  left: 36px;
  color: #003049;
  border-left: 8px solid white;
  border-right: 8px solid white;
  transition: all 300ms ease;
`;

const Icon = styled.i`
  position: absolute;
  top: 16px;
  left: 12px;
  color: rgba(0, 55, 85, 0.8);
`;

const Input = styled.input`
  width: 100%;
  padding: 14px 32px;
  padding-left: 40px;
  font-size: 16px;
  border: 1px solid rgba(0, 47, 73, 0.3);
  border-radius: 8px;
  color: #003049;
  margin-bottom: 20px;
  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #003049;
  }
`;
const TextArea = styled.textarea`
  width: 100%;
  padding: 14px 32px;
  padding-left: 40px;
  font-size: 16px;
  border: 1px solid rgba(0, 47, 73, 0.3);
  border-radius: 8px;
  color: #003049;
  margin-bottom: 20px;
  height: 150px;
  resize: none;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #003049;
  }
`;

const Button = styled.button`
  border: none;
  background: #003049;
  color: #fff;
  padding: 16px 32px;
  width: 100%;
  border-radius: 24px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: all 500ms ease;
  &:hover {
    background-color: #00459b;
  }
`;

function Feedback() {
  const [isOpened, setIsOpened] = useState(false);
  var formContainerClasses = classNames({
    formactive: isOpened,
  });

  const [toSend, setToSend] = useState({
    name: '',
    message: '',
    email: '',
  });

  useEffect(() => {
    console.log(formContainerClasses);
  }, [isOpened]);

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      'service_wadrmkq',
      'template_sqyycjm',
      toSend,
      'DkojK9MKsuWs04K9e'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setIsOpened(!isOpened);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <Container>
      <FormContainer className={formContainerClasses}>
        <Heading>AT Productions</Heading>
        <Form onSubmit={onSubmit}>
          <FieldContainer>
            <Icon>
              <DriveFileRenameOutlineIcon></DriveFileRenameOutlineIcon>
            </Icon>
            {/* <Label for="name">Name</Label> */}
            <Input
              className="form-input"
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              value={toSend.name}
              onChange={handleChange}
            />
          </FieldContainer>
          <FieldContainer>
            <Icon>
              <EmailIcon></EmailIcon>
            </Icon>
            {/* <Label for="email">Email</Label> */}
            <Input
              className="form-input"
              type="text"
              name="email"
              id="email"
              placeholder="Email"
              value={toSend.email}
              onChange={handleChange}
            />
          </FieldContainer>
          <FieldContainer>
            <Icon>
              <MessageIcon></MessageIcon>
            </Icon>
            {/* <Label for="message">Message</Label> */}
            <TextArea
              className="form-input"
              id="message"
              name="message"
              cols="30"
              rows="10"
              placeholder="Message"
              value={toSend.message}
              onChange={handleChange}
            ></TextArea>
          </FieldContainer>
          <Button  type='submit'>Send</Button>
        </Form>
      </FormContainer>
      <ContactIcon
        className="contact-icon"
        onClick={() => {
          console.log("Hiiii", isOpened);
          setIsOpened(!isOpened);
        }}
      >
        <I>
          <ChatBubbleIcon />
        </I>
      </ContactIcon>
    </Container>
  );
}

export default Feedback;
