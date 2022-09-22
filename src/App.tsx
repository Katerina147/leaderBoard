import { FC } from 'react';
import { ThemeProvider } from '@mui/material';
import { theme } from './utils/theme/leader-board-theme';
import { Header } from './Header';

const App: FC = () => (
    <ThemeProvider theme={theme}>
        <Header />
    </ThemeProvider>
);

export default App;
