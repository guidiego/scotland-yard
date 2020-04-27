import React, { ReactChild, ReactElement } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';

import { default as lightTheme } from './light';

type Props = { children: ReactChild };
export const Theme = ({ children }: Props): ReactElement => (
  <ThemeProvider theme={lightTheme}>
    { children }
  </ThemeProvider>
);

export default Theme;