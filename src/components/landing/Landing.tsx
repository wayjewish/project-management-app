import React from 'react';
import Typography from '@mui/material/Typography';
import styled from '@emotion/styled';
import { Box, Container } from '@mui/material';
import MainImg from '../../assets/img/mainImage.png';

const Main = styled.main`
  width: 100%;
  background: linear-gradient(0deg, #fff, #eae6ff 100%);
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 8rem;
  @media (max-width: 768px) {
    padding: 3rem;
  }
`;

const WrapSecond = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
  lineheight: 1.25;
  font-size: 3rem;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
  @media (mix-width: 320px) {
    font-size: 0.4rem;
    lineheight: 0.2;
  }
`;

const Subtitle = styled.h4`
  font-size: 2rem;
  font-weight: 400;
  @media (max-width: 768px) {
    font-size: 1rem;
    font-weight: 200;
  }
  @media (max-width: 1150px) {
    display: none;
  }
`;

const ImageMain = styled.img`
  width: 30rem;
  height: 30rem;
  objectfit: contain;
  @media (max-width: 768px) {
    width: 15rem;
    height: 15rem;
  }
`;
const CircleBox = styled.div`
  border: 1px solid #4169e1;
  background-color: #4169e1;
  border-radius: 50%;
  width: 10rem;
  height: 10rem;
  @media (max-width: 768px) {
    width: 5rem;
    height: 5rem;
  }
`;

const TextInfo = styled.p`
  text-align: center;
  font-size: 2rem;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
function Landing() {
  return (
    <Main>
      <Wrap>
        <Box
          style={{
            width: '40rem',
            height: '20rem',
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <Title>TrackerRss помогает командам эффективно решать рабочие задачи.</Title>
          <Subtitle>
            Работайте в команде, управляйте проектами и выводите продуктивность на новый уровень
            собственным уникальным способом вместе с TrackerRss.
          </Subtitle>
        </Box>
        <Box>
          <ImageMain src={MainImg} style={{}}></ImageMain>
        </Box>
      </Wrap>
      <WrapSecond>
        <Box sx={{ m: '2rem' }}>
          <Title>Разработчики</Title>
        </Box>
        <Box
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            width: '100%',
          }}
        >
          <Box style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <CircleBox />
            <TextInfo>Team lead</TextInfo>
          </Box>
          <Box style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <CircleBox />
            <TextInfo>Frontend</TextInfo>
          </Box>
          <Box style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <CircleBox />
            <TextInfo>Frontend</TextInfo>
          </Box>
        </Box>
      </WrapSecond>
    </Main>
  );
}

export default Landing;
