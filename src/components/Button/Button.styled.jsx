import styled from '@emotion/styled';

export const ButtonLoadrMore = styled.button`
  font-family: 'Open Sans';
  font-size: 18px;

  margin-top: 40px;

  width: 120px;
  height: 90px;
  border-radius: 20%;
  border: none;
  color: aqua;
  cursor: pointer;

  background: radial-gradient(
    circle,
    rgba(196, 20, 195, 1) 12%,
    rgba(0, 255, 255, 1) 33%,
    rgba(29, 11, 28, 1) 61%
  );

  background-size: 400%;
  animation: gradient 10s infinite reverse;

  @keyframes gradient {
    0% {
      background-position: 80% 0%;
    }
    50% {
      background-position: 20% 100%;
    }
    100% {
      background-position: 80% 0%;
    }
  }

  filter: drop-shadow(0 0 10px #00ffff);
  transition: filter 0.5s ease-out;

  :hover {
    filter: drop-shadow(0px 0px 30px #00ffff);
  }
`;
