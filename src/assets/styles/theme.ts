import { DefaultTheme } from 'styled-components';

import { BUTTON_SIZE, BUTTON_THEME } from '@@components/Button/constants';
import { FLEX_DIRECTION } from '@@components/Flex/constants';
import { TYPOGRAPHY_THEME } from '@@components/Typography/constants';
import { COLORS } from '@@constants/colors';

export const theme: DefaultTheme = {
  flex: {
    direction: {
      [FLEX_DIRECTION.HORIZONTAL]: 'row',
      [FLEX_DIRECTION.VERTICAL]: 'column',
    },
  },
  button: {
    size: {
      [BUTTON_SIZE.LARGE]: 'padding: 8px 16px; min-height: 40px;',
      [BUTTON_SIZE.MEDIUM]: 'padding: 8px 12px; min-height: 36px;',
      [BUTTON_SIZE.SMALL]: 'padding: 6px 12px; min-height: 32px;',
      [BUTTON_SIZE.TINY]: `padding: 4px 10px; min-height: 28px;`,
    },
    theme: {
      [BUTTON_THEME.PRIMARY]: `background: ${COLORS.MAIN_BLUE_50}; border: none; color: ${COLORS.GRAY_SCALE_00};`,
      [BUTTON_THEME.OUTLINE]: `background: ${COLORS.GRAY_SCALE_00}; border: 1px solid ${COLORS.GRAY_SCALE_10}; color: ${COLORS.GRAY_SCALE_90};`,
      [BUTTON_THEME.ERROR]: `background: ${COLORS.RED_50}; border: none; color: #fff;`,
    },
    text: {
      [BUTTON_SIZE.LARGE]: `font-size: 16px; font-weight: 600;`,
      [BUTTON_SIZE.MEDIUM]: `font-size: 14px; font-weight: 600;`,
      [BUTTON_SIZE.SMALL]: `font-size: 14px; font-weight: 600;`,
      [BUTTON_SIZE.TINY]: `font-size: 12px; font-weight: 400; letter-spacing: -2%;`,
    },
  },
  typography: {
    [TYPOGRAPHY_THEME.HEADLINE_1]: 'font-size: 48px; font-weight: 800; line-height: 1.4;',
    [TYPOGRAPHY_THEME.HEADLINE_2]: 'font-size: 24px; font-weight: 800; line-height: 1.4;',
    [TYPOGRAPHY_THEME.HEADLINE_3_24_EB]: 'font-size: 24px; font-weight: 800; line-height: 1.4;',
    [TYPOGRAPHY_THEME.HEADLINE_3_20_EB]: 'font-size: 20px; font-weight: 800; line-height: 1.4;',
    [TYPOGRAPHY_THEME.SUBTITLE_1]: 'font-size: 18px; font-weight: 600; line-height: 1.4;',
    [TYPOGRAPHY_THEME.BODY_1]: 'font-size: 20px; font-weight: 400; line-height: 1.6;',
    [TYPOGRAPHY_THEME.BODY_2]: 'font-size: 16px; font-weight: 400; line-height: 1.6;',
    [TYPOGRAPHY_THEME.BODY_3]: 'font-size: 14px; font-weight: 400; line-height: 1.6;',
    [TYPOGRAPHY_THEME.CAPTION_1]: 'font-size: 12px; font-weight: 400; line-height: 1.6;',
  },
  color: {
    defualtFontColor: COLORS.GRAY_SCALE_90,
    main_05: COLORS.MAIN_BLUE_05,
    main_40: COLORS.MAIN_BLUE_40,
    main_70: COLORS.MAIN_BLUE_70,
  },
};
