import { Grid, Stack, Typography, useTheme } from "@mui/material";
import { Trans, useTranslation } from "react-i18next";

const KnowloedgeContainer = ({source, knowledgeName}) => {
  const theme = useTheme();

  return (
    <Grid item sx={{ padding: '0 !important', paddingRight: '2rem !important', paddingBottom: '2rem !important' }}>
      <Stack direction="row" alignItems="center" spacing={1}>
        <Stack sx={{
          height: '25px', 
          width: '25px',
          [theme.breakpoints.up('lg')] : {
            height: '75px', 
            width: '75px',
          }, 
          "img": { 
            width: "100%" 
          }
        }}>
          <img src={source} alt={knowledgeName}/>
        </Stack>
        <Typography variant="body1">{knowledgeName}</Typography>
      </Stack>
    </Grid>
  );
}

const About = () => {
  const { t } = useTranslation();
  
  return (
    <Stack gap={8} sx={{ pt: 5 }}>
      <Stack spacing={5}>
        <Typography variant="h4" alignSelf="center">{t('about.title')}</Typography>
        <Stack spacing={5}>
          <Trans i18nKey="about.description">
            <Typography fontWeight="300" variant="body1">As a Full-Stack Web Developer with over 2 years of experience in developing Web Applications, I have acquired a strong foundation in Javascript (React, NodeJs, Express, MongoDB), CSS, HTML, GIT, AWS, Docker, and Ruby on Rails.</Typography>
            <Typography fontWeight="300" variant="body1">I have extensive experience in developing complex web applications from the ground up. I have worked on various projects where I have designed and implemented RESTful APIs, integrated third-party services, and created responsive front-end interfaces using React and Ruby on Rails with Bootstrap, Jquery, Postgress.</Typography>
            <Typography fontWeight="300" variant="body1">In addition to my technical skills, I am also well-versed in the Agile development methodology and have experience working in fast-paced environments where I had to prioritize and deliver features within tight deadlines.</Typography>
            <Typography fontWeight="300" variant="body1">My proficiency in Ruby on Rails has also enabled me to build efficient web applications with clean code and well-defined architecture. I have a deep understanding of MVC architecture and have implemented it in my projects to ensure the separation of concerns and maintainability of code.</Typography>
            <Typography fontWeight="300" variant="body1">I believe that my excellent communication skills and team-oriented mindset will make me an asset to your team. I am passionate about learning new technologies and working with a diverse group of people to deliver high-quality products.</Typography>
          </Trans>
        </Stack>
      </Stack>
      <Stack spacing={5}>
        <Typography variant="h4" alignSelf="center">{t('about.title_2')}</Typography>
        <Grid container gap={8}>
          <KnowloedgeContainer source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" knowledgeName="Javascript" />
          <KnowloedgeContainer source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" knowledgeName="ReactJs" />
          <KnowloedgeContainer source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" knowledgeName="NodeJs" />
          <KnowloedgeContainer source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" knowledgeName="Express" />
          <KnowloedgeContainer source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" knowledgeName="Mongo DB" />
          <KnowloedgeContainer source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" knowledgeName="Redux" />
          <KnowloedgeContainer source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" knowledgeName="Html" />
          <KnowloedgeContainer source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg" knowledgeName="Git" />
          <KnowloedgeContainer source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" knowledgeName="GitHub" />
          <KnowloedgeContainer source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" knowledgeName="Css" />
          <KnowloedgeContainer source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original-wordmark.svg" knowledgeName="Ruby On Rails" />
          <KnowloedgeContainer source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" knowledgeName="Docker" />
          <KnowloedgeContainer source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" knowledgeName="Postgress" />
        </Grid>
      </Stack>
    </Stack>
  );
}

export default About;