import { MutatingDots } from 'react-loader-spinner';
import { WrapperStyle } from './Loader.styled';

export const Loader = () => {
  return (
    <WrapperStyle>
      <MutatingDots
        height="100"
        width="100"
        color="aqua"
        secondaryColor="purple"
        radius="12.5"
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </WrapperStyle>
  );
};
