import { Grid, Stack, Typography, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";

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
          <div>
            <p>I am a dedicated Full Stack Web Developer who prioritizes collaboration within the team and is passionate about serving the needs of our clients. </p>
            <p>Currently, I am actively learning and honing my skills in high-demand languages like Javascript, and its associated stack, including MongoDB, ExpressJs, ReactJs, NodeJs, and Ruby on Rails.</p>
            <ol>
              <li>
                <p><strong>Technical Skills:</strong></p>
                <ul>
                  <li>Proficiency in JavaScript (React, NextJS, Node.js, Express).</li>
                  <li>Strong front-end development skills with HTML, CSS, and responsive designing.</li>
                  <li>Backend development expertise with Node.js, Express, MongoDB, and Ruby on Rails.</li>
                  <li>Experience in designing and implementing RESTful APIs.</li>
                  <li>Version control using Git.</li>
                  <li>Cloud computing with AWS.</li>
                  <li>Containerization with Docker.</li>
                </ul>
              </li>
              <li>
                <p><strong>Project Experience:</strong></p>
                <ul>
                  <li>Designing and implementing RESTful APIs for seamless communication between frontend and backend.</li>
                  <li>Integration of third-party services to enhance application functionality.</li>
                  <li>Creation of responsive and user-friendly front-end interfaces using React, NextJS, MUI, Bootstrap and jQuery.</li>
                  <li>Database management using PostgreSQL, MySql and MongoDB</li>
                </ul>
              </li>
              <li>
                <p><strong>Agile Development:</strong></p>
                <ul>
                  <li>Familiarity and experience with Agile development methodologies.</li>
                  <li>Thriving in fast-paced environments and meeting tight deadlines.</li>
                  <li>Effective prioritization and delivery of features within project timelines.</li>
                </ul>
              </li>
              <li>
                <p><strong>Communication and Teamwork:</strong></p>
                <ul>
                  <li>Excellent communication skills.</li>
                  <li>A team-oriented mindset, emphasizing collaboration and shared success.</li>
                  <li>Passionate about working with diverse teams to deliver high-quality products.</li>
                </ul>
              </li>
              <li>
                <p><strong>Adaptability and Continuous Learning:</strong></p>
                <ul>
                  <li>A passion for learning new technologies.</li>
                  <li>Adaptability to evolving industry trends and tools.</li>
                </ul>
              </li>
            </ol>
            <p>With such a strong background, I can bring a valuable mix of technical expertise, and a collaborative approach to work. My commitment to continuous learning and ability to thrive in fast-paced environments make to me a promising candidate for contributing to and enhancing any development team.</p>
          </div>
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