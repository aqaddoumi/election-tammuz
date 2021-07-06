import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import Link from '@material-ui/core/Link';
import TammuzLogo from '../logos/TammuzLogo';
import { Fragment } from 'react';
import { CircularProgress } from '@material-ui/core';
import SponsorsLogos from '../logos/SponsorsLogos';

const useStyles = makeStyles((theme) => ({
  aboutImage: {
    height: 'auto',
    borderRadius: 30,
    margin: theme.spacing(2, 0, 1, 0),
  },
  container: {
    margin: theme.spacing(5, 0, 10, 0),
  },
  title: {
    fontSize: 20,
    margin: theme.spacing(0, 5, 0, 5),
  },
  paragraph: {
    fontWeight: 300,
    margin: theme.spacing(2, 5, 0, 5),
  },
  listItem: {
    margin: theme.spacing(0, 5, 0, 5),
  },
  point: {
    fontWeight: 300,
  },
  logos: {
    margin: theme.spacing(3, 0, 0, 0),
  },
  fullWidth: {
    width: '100%',
  },
  divider: {
    height: 3,
    backgroundColor: '#263B8C',
    margin: theme.spacing(5, 5, 3, 5),
    borderRadius: 3,
  },
}));


const About = () => {
  const classes = useStyles();

  return (
    <div>
      <Grid container justify='center' className={classes.container}>
        <Grid item xs={12} sm={8} lg={6} className={classes.fullWidth}>
          <Typography justify='center' align='center' className={classes.title}>
          منظمة تموز للتنمية الاجتماعية
          </Typography>

          <TammuzLogo></TammuzLogo>

          <Typography className={classes.paragraph}>
          الهوية: منظمة تختص بالتنمية الاجتماعية والحقوق والحريات.
          </Typography>

          <Typography className={classes.paragraph}>
          الرسالة: تبني حاجات الناس والدفاع عن حقوقهم عبر نشاط منظم ومتواصل.
          </Typography>

          <Typography className={classes.paragraph}>
          الرؤية: أن يسود المجتمع العراقي العدالة الاجتماعية وتترسخ فيه قيم الديمقراطية وحقوق الإنسان.
          </Typography>

          <Typography className={classes.paragraph}>
          التأسيس: تأسست منظمة تموز في  آيار عام 1997 في مدينة أربيل. ومن ثم وسعَّت عملها في عموم العراق بعد 2003.
          </Typography>

          <Typography className={classes.paragraph}>
          المركز الرئيسي: العراق – بغداد – الكرادة، ولها مراكز في كل من أربيل والناصرية والأنبار.
          </Typography>

          <Typography className={classes.paragraph}>
          التسجيل الرسمي: المنظمة مسجلة رسمياً في دائرة المنظمات غير الحكومية التابعة للأمانة العامة لمجلس  الوزراء تحت الرقم 1Z2642.
          </Typography>

          <Typography className={classes.paragraph}>
          أبرز الأهداف:
          </Typography>

          <ul>
            <li className={classes.listItem}>
              <Typography className={classes.point}>
              التعريف بمبادئ حقوق الإنسان والديمقراطية.
              </Typography>
            </li>
            <li className={classes.listItem}>
              <Typography className={classes.point}>
              نشر الوعي الانتخابي والترويج لثقافة الانتخابات والمشاركة في مراقبتها.
              </Typography>
            </li>
            <li className={classes.listItem}>
              <Typography className={classes.point}>
              تفعيل دور المرأة في المجتمع، ومن أجل المساواة والعدالة في مختلف مجالات الحياة.
              </Typography>
            </li>
            <li className={classes.listItem}>
              <Typography className={classes.point}>
              نشر ثقافة التسامح وقبول الآخر بما يعزز التعايش المشترك في المجتمع.
              </Typography>
            </li>
            <li className={classes.listItem}>
              <Typography className={classes.point}>
              نشر ثقافة الشفافية والعلنية والنزاهة ومكافحة الفساد بكافة أشكاله.
              </Typography>
            </li>
          </ul>

          <Typography className={classes.paragraph}>
          تعتمد منظمة تموز شبكة من المراقبين والمراقبات حيث تُعد من أولى شبكات المراقبة التي تأسست في العراق بالتعاون مع مؤسسة فريدرش اإيبرت منذ عام 2004، والتي ساهمت في مراقبة جميع العمليات الانتخابية بدءاً من انتخابات الجمعية الوطنية في كانون الثاني 2005 والاستفتاء على الدستور ولغاية انتخابات مجلس النواب العراقي في آيار 2018 وانتخابات برلمان إقليم كوردستان في أيلول 2018، وبكل أنواع الانتخابات النيابية ومجالس المحافظات بحيث أصبح للمنظمة خبرات كبيرة في هذا المجال.
          </Typography>

          <Typography className={classes.paragraph}>
          كذلك أقامت المنظمة المئات من الدورات وورش العمل والمؤتمرات الخاصة برصد جميع المراحل لكل عملية انتخابية، بالإضافة إلى ذلك، توصف تقارير المنظمة بالحيادية والمهنية ولا زالت محط نظر واعتبار من قبل مفوضية الانتخابات والجهات السياسية والإعلامية المختلفة. علماً انها تؤمن بالتنسيق مع شبكات ومنظمات المراقبة المحلية لتحقيق التكامل والفاعلية لدور المنظمات في مراقبة الانتخابات.
          </Typography>

          <Typography className={classes.paragraph}>
          كما أن منظمة تموز عضو في الشبكة العربية لديمقراطية الانتخابات مما زاد من خبراتها وتنسيقها في مجال بعثات المراقبة الدولية وتقييم المسار الديمقراطي وتحقيق الإصلاح الانتخابي في بلدان المنطقة العربية.
          </Typography>

          <Typography className={classes.paragraph}>
          للتواصل:
          </Typography>

          <Typography className={classes.paragraph}>
          البريد الإلكتروني: &#160;
          <Link href="mailto:tammuzftsd@yahoo.com">
            tammuzftsd@yahoo.com
          </Link>
          </Typography>

          <Typography className={classes.paragraph}>
          الموقع الإلكتروني:&#160;
          <Link href="http://www.tammuz.org" target="_blank">
          www.tammuz.org 
          </Link>

          </Typography>

          <Typography className={classes.paragraph}>
          صفحة الفيسبوك:  &#160;
          <Link href="https://www.facebook.com/tammuz.organization.TOSD/" target="_blank">
          Organization TOSD tammuz
          </Link>
          
          </Typography>


          <Typography className={classes.paragraph}>
          هواتف الاتصال: &#160; 


          <Link href="tel:009647702524249" target="_blank">
          009647702524249 
          </Link>
          &#160;-&#160;   
          <Link href="tel:009647704619000" target="_blank">
          009647704619000
          </Link>
          </Typography>

          
        </Grid>
      </Grid>
    </div>
  );
};

export default About;
