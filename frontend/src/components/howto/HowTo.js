import React, { Fragment, useEffect, useState } from 'react';

import Alert from '../layout/Alert';
import SponsorsLogos from '../logos/SponsorsLogos';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TypoLink from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';

import ReactPlayer from 'react-player';

const useStyles = makeStyles((theme) => ({
  container: {
    margin: theme.spacing(5, 0, 10, 0),
  },
  title: {
    fontSize: 20,
    margin: theme.spacing(0, 5, 5, 5),
  },
  paragraph: {
    fontWeight: 300,
    margin: theme.spacing(2, 5, 0, 5),
  },
  videoContainer: {
    margin: theme.spacing(3, 0, 0, 0),
    width: '100%',
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  videoWrapper: {
    position: 'relative',
    paddingTop: '56.25%',
  },
  logos: {
    margin: theme.spacing(5, 2, 5, 2),
  },
  divider: {
    height: 3,
    backgroundColor: '#263B8C',
    margin: theme.spacing(5, 0, 3, 0),
    borderRadius: 3,
  },
}));

const HowTo = () => {
  const classes = useStyles();

  return (
    <Fragment>

    </Fragment>
  );
};

export default HowTo;

/*<Grid className={classes.container} container justify='center'>

<Typography justify='center' align='center' className={classes.title}>
تدريب المراقبين والمراقبات الإلكتروني
  </Typography>

  <Typography className={classes.paragraph}>
  شكراً لمشاركتكم مع منظمة تموز للتنمية الاجتماعية، نرجو منكم حضور الفيديوهات التالية وعددها 4، والتي تتضمن معلومات مهمة عن العملية الانتخابية وكيفية مراقباتها، حيث ستساعدكم هذه الفيديوهات في التعرف بشكل أكبر عما تقوم به المنظمة وكيفية مراقبتها للانتخابات مجلس النواب 2021.
  </Typography>

  <Typography className={classes.paragraph}>
  فيديو رقم 1: الانتخابات وتعريف المراقبة المحلية
  </Typography>


  <Grid container justify='center' className={classes.videoContainer}>
    <Grid item xs={12} sm={8} md={6}>
      <div className={classes.videoWrapper}>
        <ReactPlayer
          controls={true}
          className={classes.video}
          url="https://youtu.be/kNAsP0JkOjY"
          width='100%'
          height='100%'
        />
      </div>
    </Grid>
  </Grid>

<Typography className={classes.paragraph}>
فيديو رقم 2: قانون الانتخابات مجلس النواب العراقي
  </Typography>

  <Grid container justify='center' className={classes.videoContainer}>
    <Grid item xs={12} sm={8} md={6}>
      <div className={classes.videoWrapper}>
        <ReactPlayer
          controls={true}
          className={classes.video}
          url="https://youtu.be/kNAsP0JkOjY"
          width='100%'
          height='100%'
        />
      </div>
    </Grid>
  </Grid>

  <Typography className={classes.paragraph}>
  فيديو رقم 3: نماذج مراقبة يوم الاقتراع
  </Typography>

  <Grid container justify='center' className={classes.videoContainer}>
    <Grid item xs={12} sm={8} md={6}>
      <div className={classes.videoWrapper}>
        <ReactPlayer
          controls={true}
          className={classes.video}
          url="https://youtu.be/kNAsP0JkOjY"
          width='100%'
          height='100%'
        />
      </div>
    </Grid>
  </Grid>

  <Typography className={classes.paragraph}>
  فيديو رقم 4: كيفية استخدام منصة جمع البيانات
  </Typography>

  <Grid container justify='center' className={classes.videoContainer}>
    <Grid item xs={12} sm={8} md={6}>
      <div className={classes.videoWrapper}>
        <ReactPlayer
          controls={true}
          className={classes.video}
          url="https://youtu.be/kNAsP0JkOjY"
          width='100%'
          height='100%'
        />
      </div>
    </Grid>
  </Grid>


<Grid item xs={12}>
  <Grid container justify='center'>
    <Grid item xs={6}>
      <Box className={classes.divider} />
    </Grid>
  </Grid>
</Grid>


<Grid item xs={12} sm={8} md={6} className={classes.logos}>
  <SponsorsLogos />
</Grid>

</Grid>*/