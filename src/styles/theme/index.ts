import { createTheme } from '@mui/material';

import palette from './palette';
import typography from './typography';
import overrides from './overrides';

const components: any = overrides;
const theme = createTheme({
  palette,
  typography,
  components: components,
  zIndex: {
    appBar: 1200,
    drawer: 1100,
  },
});

export default theme;
