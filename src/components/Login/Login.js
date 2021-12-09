import React from "react";
import styled from "styled-components";

function Login() {
  return (
    <Container>
      <CTA>
        <CTALogoOne src="/images/cta-logo-one.svg" />
        <SignUp>Get All There</SignUp>
        <Description>
          Sup yall, signup up for the internets and have some fun, yuh hear nuh!
        </Description>
        <BottomIcons>
          <Wrap>
            <img src="/images/viewers-disney.png" />
          </Wrap>
          <span>+</span>
          <Wrap>
            <img src="/images/viewers-pixar.png" />
          </Wrap>
          <span>+</span>
          <Wrap>
            <img src="/images/viewers-marvel.png" />
          </Wrap>
          <span>+</span>
          <Wrap>
            <img src="/images/viewers-starwars.png" />
          </Wrap>
          <span>+</span>
          <Wrap>
            <img src="/images/viewers-national.png" />
          </Wrap>
        </BottomIcons>
      </CTA>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  position: relative;
  height: calc(100vh - 70px);
  display: flex;
  align-items: top;
  justify-content: center;

  &:before {
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("/images/login-background.jpg");
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`;

const CTA = styled.div`
  max-width: 650px;
  padeing: 80px 40px;
  width: 80%;
  display: flex;
  flex-direction: column;
`;
const CTALogoOne = styled.img``;

const SignUp = styled.a`
  width: 100%;
  background-color: #0063e5;
  font-weight: bold;
  padding: 17px 0;
  color: #f9f9f9;
  border-radius: 4px;
  text-align: center;
  cursor: pointer;
  transition: all 250ms;
  letter-spacing: 1.5px;
  margin-top: 8px;
  margin-bottom: 10px;

  &:hover {
    background: #0483ee;
  }
`;

const Description = styled.div`
  color: #f9f9f9;
  display: flex;
  justify-content: center;
  font-size: 12px;
`;

const BottomIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    color: white;
    font-size: 40px;
  }
`;

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    &:hover {
      cursor: pointer;
    }
  }
`;
