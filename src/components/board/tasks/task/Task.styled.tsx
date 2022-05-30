import { styled } from '@mui/material/styles';
import { Card, CardProps } from '@mui/material';

interface StyledTaskCardProps extends CardProps {
  isDragging?: boolean;
}

export const TaskCard = styled(Card, {
  shouldForwardProp: (prop) => prop !== 'isDragging',
})<StyledTaskCardProps>(({ isDragging, theme }) => ({
  padding: theme.spacing(2),
  cursor: 'pointer',

  ...(isDragging && {
    opacity: '0.5',
  }),
}));
