import { SVGAttributes } from 'react';

type DefaultIconProps = SVGAttributes<SVGSVGElement>;

export function ArrowLeftIcon(props: DefaultIconProps) {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path d='M11 5L5 12M5 12L11 19M5 12H19' stroke='#0C0C0E' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    </svg>
  );
}
