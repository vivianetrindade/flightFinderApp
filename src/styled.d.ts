import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      body: string;
      header: string;
      footer: string;
    };
    mobile: string;
  }
}
