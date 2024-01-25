import { Grid, List, ListItem, ListItemIcon, ListItemText, Stack, Typography, useTheme } from "@mui/material";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { useTranslation } from "react-i18next";

const KnowloedgeContainer = ({source, knowledgeName}) => {
  const theme = useTheme();

  return (
    <Grid item xs={6} sm={4} lg={3} xl={2}>
      <Stack direction="row" alignItems="center" spacing={1}>
        <Stack sx={{
          height: '60px', 
          width: '60px',
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

const aboutMe = [
  {type: 'text', i18nTag: 'about.description.p1'},
  {type: 'text', i18nTag: 'about.description.p2'},
  {type: 'list', i18nTag: 'about.description.list_1.title', content: [
    {type: 'text', i18nTag: 'about.description.list_1.p1'},
    {type: 'text', i18nTag: 'about.description.list_1.p2'},
    {type: 'text', i18nTag: 'about.description.list_1.p3'},
    {type: 'text', i18nTag: 'about.description.list_1.p4'},
    {type: 'text', i18nTag: 'about.description.list_1.p5'},
    {type: 'text', i18nTag: 'about.description.list_1.p6'},
    {type: 'text', i18nTag: 'about.description.list_1.p7'},
  ]},
  {type: 'list', i18nTag: 'about.description.list_2.title', content: [
    {type: 'text', i18nTag: 'about.description.list_2.p1'},
    {type: 'text', i18nTag: 'about.description.list_2.p2'},
    {type: 'text', i18nTag: 'about.description.list_2.p3'},
    {type: 'text', i18nTag: 'about.description.list_2.p4'},
  ]},
  {type: 'list', i18nTag: 'about.description.list_3.title', content: [
    {type: 'text', i18nTag: 'about.description.list_3.p1'},
    {type: 'text', i18nTag: 'about.description.list_3.p2'},
    {type: 'text', i18nTag: 'about.description.list_3.p3'},
  ]},
  {type: 'list', i18nTag: 'about.description.list_4.title', icon: '', content: [
    {type: 'text', i18nTag: 'about.description.list_4.p1'},
    {type: 'text', i18nTag: 'about.description.list_4.p2'},
    {type: 'text', i18nTag: 'about.description.list_4.p3'},
  ]},
  {type: 'list', i18nTag: 'about.description.list_5.title', content: [
    {type: 'text', i18nTag: 'about.description.list_5.p1'},
    {type: 'text', i18nTag: 'about.description.list_5.p2'},
  ]},
  {type: 'text', i18nTag: 'about.description.p3'},
]

const About = () => {
  const { t } = useTranslation();
  
  return (
    <Stack rowGap={8} py={6}>
      <Stack rowGap={4}>
        <Typography variant="h4" alignSelf="center">{t('about.title')}</Typography>
        <Stack rowGap={2}>
          {aboutMe.map(element => {
            let renderContent;
            
            if(element.type === "text"){
              renderContent =  <Typography key={element.i18nTag} variant="body1">{t(element.i18nTag)}</Typography>
            }

            if(element.type === "list") {
              renderContent = (
                <Stack key={element.i18nTag}>
                  <Typography sx={{ fontWeight: 'bold', textDecoration: 'underline' }} variant="subtitle1">{t(element.i18nTag)}</Typography>
                  <List>
                    {element.content?.map(element => (
                      <ListItem sx={{ pl: 0 }} key={element.i18nTag}>
                        <ListItemIcon>
                          <ArrowRightIcon fontSize="small"/>
                        </ListItemIcon>
                        <ListItemText primary={t(element.i18nTag)}/>
                      </ListItem>
                    ))}
                  </List>
                </Stack>
              );
            }

            return renderContent;
          })}
        </Stack>
      </Stack>
      <Stack rowGap={8}>
        <Typography variant="h4" alignSelf="center">{t('about.title_2')}</Typography>
        <Grid container rowSpacing={5}>
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