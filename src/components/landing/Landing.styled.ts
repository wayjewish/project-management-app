import styled from '@emotion/styled';

export const Main = styled.main`
  width: 100%;
  background: linear-gradient(0deg, #fff, #eae6ff 100%);
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 1rem 14rem;
  flex-wrap: wrap;
  @media (max-width: 1200px) {
    padding: 5rem 14rem;
    justify-content: center;
  }
  @media (max-width: 768px) {
    padding: 6rem 7rem;
  }
`;

export const BoxStyle = styled.div`
  width: 30rem;
  height: 12rem;
  align-items: center;
  display: flex
  flex-direction: column;
  justify-content: center;
  @media (max-width: 768px) {
    width: 27rem;
    height: 10rem;
    text-align: left;
  }
`;

export const Title = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  line-height: 120%;
  font-size: 60px;
  @media (max-width: 768px) {
    font-size: 2rem;
    font-weight: 300;
    text-align: left;
  }
`;

export const Subtitle = styled.h5`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 16px;
  margin-bottom: 1rem;
  @media (max-width: 768px) {
    font-size: .8rem;
    text-align: left;
  }
`;
export const ImageMain = styled.img`
  width: 30rem;
  height: 20rem;
  objectfit: contain;
  @media (max-width: 1150px) {
    display: none;
  }
`;
export const ButtonTry = styled.button`
  background-color: #4169e1;
  width: 158px;
  height: 42px;
  cursor: pointer;
  border-radius: 3%;
  color: #ffffff;
  text-transform: uppercase;
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  transition: 0.3s;
  :hover {
    background-color: #72a0cf;
    border-color: #f2f2f2;
  }
  :active {
    background-color: #4169e1;
    border-color: #f2f2f2;
  }
  @media (max-width: 768px) {
    width: 5rem;
    height: 2rem;
    font-size: 0.5rem;
  }
  @media (mix-width: 320px) {
    width: 2.5rem;
    height: 1rem;
  }
`;
export const WrapBox = styled.div`
  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14),
    0px 3px 14px 2px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  padding: 16px;
  width: 100%;
`;
export const TitleBox = styled.h4`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  color: rgba(0, 0, 0, 0.87);
  margin-bottom: .5rem;
  text-align: left;
  @media (max-width: 768px) {
    font-size: 1.2rem;
    font-weight: 500;
  }
`;

export const SubtitleBox = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 166%;
  text-align: left;
  @media (max-width: 768px) {
    font-size: .8rem;
    font-weight: 400;
  }
`;
