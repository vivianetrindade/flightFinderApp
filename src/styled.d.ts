import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      body: string;
      header: string;
      footer: string;
      form: string;
      inputBorder: string;
      inputBorderFocus: string;
    };
    mobile: string;
  }
}
