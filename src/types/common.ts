import { SVGAttributes } from 'react';

/*
    Object 형태의 상수를 타입으로 사용할 수 있음
    ex)
    const COLORS = {
        RED: 'red',
        BLUE: 'blue',
    } as const;
     
    export type Colors = asType<typeof COLORS>; -> 'red' | 'blue' 타입이 됨.
*/
export type asType<T> = T[keyof T];

export type DefaultIconProps = SVGAttributes<SVGSVGElement>;
