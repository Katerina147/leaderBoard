import { FC } from 'react';
import { ThemeProvider } from '@mui/material';
import { theme } from './utils/theme/leader-board-theme';

const App: FC = () => <ThemeProvider theme={theme} />;

export default App;
