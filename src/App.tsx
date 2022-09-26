import { FC } from 'react';
import { ThemeProvider } from '@mui/material';
import { LeaderBoardTable, Header } from 'components';
import { theme } from './utils/theme/leader-board-theme';

const App: FC = () => (
    <ThemeProvider theme={theme}>
        <Header />
        <LeaderBoardTable />
    </ThemeProvider>
);

export default App;
