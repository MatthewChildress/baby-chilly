import { IDefaultTheme } from 'styled-components';

export const myTheme: IDefaultTheme = {
    colors: {
        light: '#ffffff',
        dark: '#000000',
    },
};

type ThemeType = typeof myTheme;

export type { ThemeType };
