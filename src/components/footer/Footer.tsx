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
  width: 10rem;
  height: 4rem;
`;

function HeaderComponent() {
  return (
    <Footer>
      <Wrap>
        <Box sx={{ m: 2 }}>
          <Typography style={{ color: '#FFFFFF' }}>Project management app | REACT2022Q1</Typography>
        </Box>
        <Divider variant="middle" style={{ width: 500, borderColor: '#FFFFFF' }} />
        <Box sx={{ m: 2, display: 'flex', alignContent:'center'}}>
          <Box>
          <Link href="https://github.com/wayjewish" style={{ textDecoration: 'none',color: '#FFFFFF' }}><Typography>Dmitry Uvarov | @wayjewish</Typography></Link>
          <Link href="https://github.com/gomunkool" style={{ textDecoration: 'none',color: '#FFFFFF' }}><Typography>Vadzim Maroz | @gomunkool</Typography></Link>
          <Link href="https://github.com/KaterinaKachann" style={{ textDecoration: 'none',color: '#FFFFFF' }}><Typography>Ekaterina Kachan | @KaterinaKachann</Typography></Link>
          </Box>
          <Box>
            <Link href="https://rs.school/" color="inherit">
              <LogoRss src={Rss}></LogoRss>
            </Link>
          </Box>
        </Box>
      </Wrap>
    </Footer>
  );
}

export default HeaderComponent;
