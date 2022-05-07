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
  padding: 6rem 14rem;
  flex-wrap: wrap;
  @media (max-width: 1200px) {
    padding: 5rem 14rem;
    justify-content: center;
  }
  @media (max-width: 768px) {
    padding: 6rem 7rem;
  }
`;

export const WrapSecond = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const BoxStyle = styled.div`
  width: 30rem;
  height: 15rem;
  align-items: center;
  display: flex
  flex-direction: column;
  justify-content: center;
  @media (max-width: 768px) {
    width: 8rem;
    height: 1rem;
    text-align: center;
  }
`;

export const Title = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  line-height: 120%;
  font-size: 60px;
  @media (max-width: 768px) {
    font-size: 1rem;
    font-weight: 300;
  }
  @media (max-width: 320px) {
    font-size: 0.4rem;
    font-weight: 300;
  }
`;

export const Subtitle = styled.h5`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 16px;
  margin-bottom: 1rem;
  @media (max-width: 768px) {
    font-size: 0.5rem;
  }
`;
export const ImageMain = styled.img`
  width: 30rem;
  height: 30rem;
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
export const CircleBox = styled.div`
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

export const TextInfo = styled.p`
  text-align: center;
  font-size: 2rem;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
