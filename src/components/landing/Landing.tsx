import React from 'react';
import { Box, Button } from '@mui/material';
import MainImg from '../../assets/img/main.svg';
import {
  Main,
  Wrap,
  Title,
  Subtitle,
  ImageMain,
  WrapSecond,
  CircleBox,
  TextInfo,
  BoxStyle,
  ButtonTry
} from './Landing.styled';

function Landing() {
  return (
    <Main>
      <Wrap>
        <BoxStyle>
          <Title>Tracker Rss</Title>
          <Subtitle>
            Сервис для совместной работы и организации процессов. Контролируйте задачи с помощью
            одного инструмента.
          </Subtitle>
          <ButtonTry>Попробовать</ButtonTry>
        </BoxStyle>
        <Box>
          <ImageMain src={MainImg}></ImageMain>
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
