import React from 'react';
import { Box, Grid, styled, Typography } from '@mui/material';
import MainImg from '../../assets/img/main.svg';
import Paper from '@mui/material/Paper';
import {
  Main,
  Wrap,
  Title,
  Subtitle,
  ImageMain,
  BoxStyle,
  ButtonTry,
  TitleBox,
  SubtitleBox,
  WrapBox,
} from './Landing.styled';
import { red, green, blue } from '@mui/material/colors';

const Root = styled('div')(({ theme }) => ({
  padding: theme.spacing(1),
  
}));

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  color: theme.palette.text.secondary,
}));

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

        <Grid container spacing={1} style={{ justifyContent: 'center', marginBottom: '1rem' }}>
          <Grid item xs={6}>
            <Item>
              <TitleBox>Вся рабочая информация всегда под рукой</TitleBox>
              <SubtitleBox>
                Моментально оценивайте статус работы, определяйте дальнейшие действия и делайте всё
                необходимое, чтобы работа шла по плану.
              </SubtitleBox>
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
              <TitleBox>Список</TitleBox>
              <SubtitleBox>
                В списках сотрудники сразу видят, что нужно сделать, какие задачи приоритетны и
                какой срок отведён на выполнение работы.
              </SubtitleBox>
            </Item>
          </Grid>
          <Grid item xs={3}>
            <Item>
              <TitleBox>Хронология</TitleBox>
              <SubtitleBox>
                Управляйте зависящими друг от друга, пересекающимися и непредвиденными задачами, а
                также создавайте реалистичные планы.
              </SubtitleBox>
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item>
              <TitleBox>Доски</TitleBox>
              <SubtitleBox>
                Сделайте так, чтобы ничего не отвлекало сотрудников от текущих задач. Разбивайте
                работу на этапы, которые позволяют видеть, что важно, и где случаются задержки.
              </SubtitleBox>
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item>
              <TitleBox>Всё точно в срок</TitleBox>
              <SubtitleBox>
                Создайте план, показывающий взаимосвязи между различными частями проекта, на вкладке
                «Хронология». Он поможет вам работать по графику с учётом вносимых изменений.
              </SubtitleBox>
            </Item>
          </Grid>
        </Grid>
        <TitleBox style={{ textAlign: 'left' }}>Что такое Tracker?</TitleBox>
        <TitleBox style={{ textAlign: 'left' }}>Здесь видео</TitleBox>
      </Wrap>
    </Main>
  );
}

export default Landing;
