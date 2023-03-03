import { Grid, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const KnowloedgeContainer = ({source, knowledgeName}) => {
  return (
    <Grid item sx={{ padding: '0 !important', paddingRight: '2rem !important', paddingBottom: '2rem !important' }}>
      <Stack direction="row" alignItems="center" spacing={1}>
        <Stack sx={{height: '50px', width: '50px', "img": { width: "100%" }}}>
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
    <Grid container spacing={6}>
      <Grid item>
        <Stack spacing={5}>
          <Typography variant="h3" alignSelf="center">{t('about.title')}</Typography>
          <Stack gap={2}>
            <Typography variant="body2" fontSize="1.15rem">{t('about.description_1')}</Typography>
            <Typography variant="body2" fontSize="1.15rem">{t('about.description_2')}</Typography>
            <Typography variant="body2" fontSize="1.15rem">{t('about.description_3')}</Typography>
          </Stack>
        </Stack>
      </Grid>
      <Grid item>
        <Stack spacing={5}>
          <Typography variant="h3" alignSelf="center">{t('about.title_2')}</Typography>
          <Grid container spacing={5}>
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
      </Grid>
    </Grid>
  );
}

export default About;