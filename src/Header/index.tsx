import { FC } from 'react';
import { Container, Box, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import header from 'assets/img/header.png';
import { MUI_HEADER_STYLES } from './styles';

const useStyles = makeStyles(MUI_HEADER_STYLES);

export const Header: FC = () => {
    const classes = useStyles();

    return (
        <Container>
            <h2>
                <span className={classes.spanWrapper}>Five</span>Leaderboard
            </h2>
            <Box className={classes.boxWrapper}>
                <Grid container>
                    <Grid pl={4} xs={6}>
                        <Grid>
                            <h2>All-time highest scorers</h2>
                        </Grid>
                        <Grid>
                            <span>
                                You can be among the leaders already today
                            </span>
                        </Grid>
                    </Grid>
                    <Grid xs={6}>
                        <Grid>
                            <img
                                className={classes.headerImage}
                                src={header}
                                alt="headerImage"
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};
