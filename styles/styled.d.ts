import 'styled-components';

declare module 'styled-components' {
  export interface IDefaultTheme {
    colors: {
      light: string;
      dark: string;
    };
  }
}
