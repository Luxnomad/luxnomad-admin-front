import { HTMLAttributes, ReactNode } from 'react';

import { Settings } from 'react-slick';

export interface SliderProps extends HTMLAttributes<HTMLDivElement> {
  sliderProps?: Settings;
  items: ReactNode[];
  gap?: number;
  itemSize?: number;
}
