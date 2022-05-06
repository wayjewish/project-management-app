import React from 'react';
import Typography from '@mui/material/Typography';
import styled from '@emotion/styled';
import GitHubIcon from '@mui/icons-material/GitHub';
import Rss from '../../assets/icon/logo.svg';
import { Box, Divider, Link } from '@mui/material';

const Footer = styled.footer`
  width: 100%;
  background: #4169e1;
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px;
`;

const LogoRss = styled.img`
  width: 5rem;
  height: 2rem;
`;

function HeaderComponent() {
  return (
    <Footer>
      <Wrap>
        <Box sx={{ m: 2 }}>
          <Link href="https://github.com/wayjewish/project-management-app/" color="inherit">
            <GitHubIcon />
          </Link>
          <Link href="https://rs.school/" color="inherit">
            <LogoRss src={Rss}></LogoRss>
          </Link>
        </Box>
        <Divider variant="middle" style={{ width: 500, borderColor: '#FFFFFF' }} />
        <Box sx={{ m: 2 }}>
          <Typography style={{ color: '#FFFFFF' }}>TrackerRss, 2022 - made in Minsk, BY</Typography>
        </Box>
      </Wrap>
    </Footer>
  );
}

export default HeaderComponent;
