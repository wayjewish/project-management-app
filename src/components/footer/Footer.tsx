import React from 'react';
import Typography from '@mui/material/Typography';
import styled from '@emotion/styled'

const Footer = styled.footer`
  width: 100%;

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
    <Footer>
      <Wrap>
        <Typography variant="h3">
          Footer
        </Typography>
        <Typography variant="h3">
          Rsschool
        </Typography>
      </Wrap>
    </Footer>
  );
}

export default HeaderComponent;
