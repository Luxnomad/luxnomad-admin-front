import { PropsWithChildren } from 'react';

import Flex from '@@components/Flex';
import { FlexProps } from '@@components/Flex/types';

function ButtonContainer({ children, ...props }: PropsWithChildren<FlexProps>) {
  return (
    <Flex.Horizontal gap={10} {...props}>
      {children}
    </Flex.Horizontal>
  );
}

export default ButtonContainer;
