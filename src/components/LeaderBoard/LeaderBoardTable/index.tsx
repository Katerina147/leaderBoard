import { FC } from 'react';
import { makeStyles } from '@mui/styles';
import { Container, Box, Grid, Table, TableBody } from '@mui/material';
import { CustomButton, CustomButtonIcon } from 'shared';
import { ReactComponent as LeftArrowIcon } from 'assets/icons/LeftArrowIcon.svg';
import { ReactComponent as RightArrowIcon } from 'assets/icons/RightArrowIcon.svg';
import { MUI_TABLE_STYLES } from './styles';

const useStyles = makeStyles(MUI_TABLE_STYLES);

export const LeaderBoardTable: FC = () => {
    const classes = useStyles();

    return (
        <Container>
            <Box className={classes.boxWrapper}>
                <Grid container>
                    <Grid item xs={7}>
                        <h2>Leaders table for this period</h2>
                    </Grid>
                    <Grid item xs={5} className={classes.tableHeaderButtons}>
                        <CustomButtonIcon icon={<LeftArrowIcon />} />
                        <CustomButtonIcon icon={<RightArrowIcon />} />
                        <CustomButton
                            className={classes.newDayButton}
                            label="New day"
                        />
                        <CustomButton
                            className={classes.addUsersButton}
                            label="Add new user"
                        />
                    </Grid>
                </Grid>
                <Table className={classes.customTable}>
                    <TableBody />
                </Table>
            </Box>
        </Container>
    );
};
