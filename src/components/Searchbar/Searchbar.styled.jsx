import styled from '@emotion/styled';

export const Button = styled.button`
  margin-right: 40px;

  border-radius: 20%;
  border: none;
  color: aqua;
  cursor: pointer;
  font-size: 18px;

  padding: 20px;

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
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Header = styled.header`
  display: flex;
  justify-content: center;

  padding: 30px;
  margin-bottom: 50px;

  filter: drop-shadow(0px 0px 15px #00ffff);

  background: radial-gradient(
    circle,
    rgba(196, 20, 195, 1) 0%,
    rgba(27, 175, 223, 0) 29%,
    rgba(255, 0, 236, 1) 63%
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
`;

export const Span = styled.span`
  font-weight: 700;
`;

export const Input = styled.input`
  text-align: center;

  font: inherit;
  font-weight: 700;

  border: solid 2px #00ffff;
  border-radius: 5%;
  outline: none;
  color: aqua;

  padding: 8px 120px;

  background: radial-gradient(
    circle,
    rgb(99, 5, 153) 12%,
    rgb(3, 51, 83) 33%,
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
`;
