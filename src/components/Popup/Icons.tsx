import { DefaultIconProps } from '@@types/common';

export function ConfirmatioIcon(props: DefaultIconProps) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='56' height='56' viewBox='0 0 56 56' fill='none' {...props}>
      <rect width='56' height='56' rx='28' fill='#E7F0FE' />
      <path d='M22 28L26 32.5L34 23.5' stroke='#0849AB' strokeWidth='3' strokeLinecap='round' strokeLinejoin='round' />
      <circle cx='28' cy='28' r='13.5' stroke='#0849AB' strokeWidth='3' />
    </svg>
  );
}

export function QuestionIcon(props: DefaultIconProps) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='56' height='56' viewBox='0 0 56 56' fill='none' {...props}>
      <rect width='56' height='56' rx='28' fill='#FEF7E6' />
      <path
        d='M28 41.5C35.4558 41.5 41.5 35.4558 41.5 28C41.5 20.5442 35.4558 14.5 28 14.5C20.5442 14.5 14.5 20.5442 14.5 28C14.5 35.4558 20.5442 41.5 28 41.5Z'
        stroke='#F0AB0D'
        strokeWidth='3'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M25 24.003C25.242 23.3351 25.7195 22.772 26.3482 22.4133C26.9768 22.0546 27.7158 21.9235 28.4345 22.0432C29.1531 22.1628 29.805 22.5256 30.2745 23.0672C30.7441 23.6088 31.0011 24.2943 31 25.0022C31 27.0007 28 28 28 28V29.5'
        stroke='#F0AB0D'
        strokeWidth='3'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path d='M28 34H28.015' stroke='#F0AB0D' strokeWidth='3' strokeLinecap='round' strokeLinejoin='round' />
    </svg>
  );
}

export function ErrorIcon(props: DefaultIconProps) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='56' height='56' viewBox='0 0 56 56' fill='none' {...props}>
      <rect width='56' height='56' rx='28' fill='#FCEDEF' />
      <path
        d='M28 41.5C35.4558 41.5 41.5 35.4558 41.5 28C41.5 20.5442 35.4558 14.5 28 14.5C20.5442 14.5 14.5 20.5442 14.5 28C14.5 35.4558 20.5442 41.5 28 41.5Z'
        stroke='#C5172B'
        strokeWidth='3'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path d='M28 22V29.5' stroke='#C5172B' strokeWidth='3' strokeLinecap='round' strokeLinejoin='round' />
      <path d='M28 34H28.015' stroke='#C5172B' strokeWidth='3' strokeLinecap='round' strokeLinejoin='round' />
    </svg>
  );
}
