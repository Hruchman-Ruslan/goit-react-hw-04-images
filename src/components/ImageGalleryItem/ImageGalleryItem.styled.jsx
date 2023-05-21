import styled from '@emotion/styled';

export const Item = styled.li``;

export const Img = styled.img`
  width: 370px;
  height: 280px;

  border-radius: 15px;

  filter: drop-shadow(0 0 10px #00ffff);
  transition: filter 0.5s ease-out;

  :hover {
    filter: drop-shadow(0px 0px 30px #00ffff);
  }
`;
