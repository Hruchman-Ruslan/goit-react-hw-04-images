import styled from '@emotion/styled';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-height: 300px;
  max-width: 600px;
  width: 100%;
  padding: 18px;
  border-radius: 3px;

  filter: drop-shadow(0px 0px 30px #00ffff);

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

  text-align: center;
`;
