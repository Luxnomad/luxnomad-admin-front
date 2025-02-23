import { FlexDirection } from '@@components/Flex/types';
import { TypographyTheme } from '@@components/Typography/types';
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    flex: {
      direction: Record<FlexDirection, string>;
    };
    typography: Record<TypographyTheme, string>;
    color: {
      defualtFontColor: string;
      main_05: string;
      main_40: string;
      main_70: string;
    };
  }
}
