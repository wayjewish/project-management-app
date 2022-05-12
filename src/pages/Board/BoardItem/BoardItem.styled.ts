import { styled } from '@mui/material/styles';
import { Card,CardContent,Typography,Button } from '@mui/material';

export const CardItem = styled(Card)(() => ({
  height: 200,
}));

export const CardContentItem = styled(CardContent)(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
}));

export const TypographyCardItem = styled(Typography)(() => ({
  height:100,
  overflow: 'hidden' 
}));

export const ButtonCardRemove = styled(Button)(() => ({
  alignSelf: 'flex-end' 
}));