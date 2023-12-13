import React from 'react';
import styled from '@emotion/styled';
import AuthNav from '../../../layout/LandingPage/nav/AuthNav';
import logoimg from '../../../assets/CaBooky-logo-1-preview.png';

const Home = () => (
  <>
    <img src={logoimg} alt="cabooky-logo" id="splash-logo" />
    <Container>
      <Content>
        <Paragraph>
          CaBooky
          <br />
          Book A car today!
        </Paragraph>
        <Auth>
          <AuthNav />
        </Auth>
      </Content>
    </Container>
  </>
);

export default Home;

const Container = styled.div`
  border: 15rem solid #ffd700;
  margin-bottom: 8rem;
  margin-top: 6rem;
  @media (max-width: 768px) {
    margin-left: 2rem;
  }
`;

const Content = styled.div`
  margin-top: 20rem;
  position: relative;
  max-width: 1200px;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const Paragraph = styled.p`
  font-size: 3rem;
  margin-top: -40rem;
  margin-left: -4rem;
  background color: blue;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-top: -20rem;
    margin-left: 10rem;
  }
`;

const Auth = styled.div`
  margin-left: -10rem;

  @media (max-width: 768px) {
    margin-left: 0;
    text-align: center;
  }
`;
