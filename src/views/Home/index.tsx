import React, { useContext, FC } from 'react';
import { Grid, Typography } from '@mui/material';
import { makeStyles, createStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';
import { format } from 'date-fns';
import zhHansLocale from 'date-fns/locale/zh-CN';
import { AuthGuard, Page, SessionContext } from 'components';
import { ReactComponent as NewYearSvg } from './assets/undraw_new_year_2022_bxec.svg';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    padding: theme.spacing(8, 3),
  },
  welcome: {
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  },
  svg: {
    width: 489,
    height: 343,
    maxWidth: '100%',
  },
}));

const Home: FC = function Home() {
  const classes = useStyles();

  const { session } = useContext(SessionContext);

  return (
    <AuthGuard roles={['ADMINISTRATOR']}>
      <Page title="工作台" className={classes.root}>
        <Grid container justifyContent="space-around" alignItems="center">
          <Grid item className={classes.welcome}>
            <Typography
              component="h1"
              variant="h3"
            >
              {format(new Date(), 'bbbb', { locale: zhHansLocale })}
              好，
              {' '}
              {session?.user?.username}
            </Typography>
            <Typography
              variant="h4"
            >
              欢迎登录
            </Typography>
          </Grid>
          <Grid item>
            <NewYearSvg className={classes.svg} />
          </Grid>
        </Grid>
      </Page>
    </AuthGuard>
  );
};

export default Home;
