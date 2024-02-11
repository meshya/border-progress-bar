import React$1 from 'react';

interface borderProps {
    width?: number;
    height?: number;
    rounded?: number;
    border?: number;
    percent?: number;
    color?: string;
    bgColor?: string;
    noneColor?: string;
    startFrom?: 't' | 'tr' | 'r' | 'br' | 'b' | 'bl' | 'l' | 'tl';
    move?: 'clockwise' | 'counter clockwise';
}
interface elementProps extends borderProps {
    children?: React$1.ReactNode;
    hidden?: boolean;
}

declare const BorderProgressBar: React.FC<elementProps>;

export { BorderProgressBar as default };
