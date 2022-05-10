import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import styled from '@emotion/styled';

const Header = styled.header`
  width: 100%;
  height: 80px;
  border-bottom: 1px solid var(--color-black);
  background: #cccccc;
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
`;

function HeaderComponent() {
  return (
    <Header>
      <Wrap>
        <Typography variant="h3">Header</Typography>
        <Button>Login</Button>
      </Wrap>
    </Header>
  );
}

export default HeaderComponent;
