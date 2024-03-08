import { GitHub, Launch } from "@mui/icons-material";
import { Box, Card, CardMedia, Chip, Grid, Link, Stack, Typography } from "@mui/material";
import IconButtonSocialMedia from "components/ui/IconButtonSocialMedia/IconButtonSocialMedia";
import Iconify from "components/ui/Iconify";
import { useTranslation } from "react-i18next";
import PortafolioImage from "assets/images/portafolio.png";
import KanbanImage from "assets/images/kanban.png";
import QuizGradImage from "assets/images/quizgrad.png";
import { motion } from "framer-motion";

const projects = [{
  "title": "portfolio.projects.quizgrad.title",
  "description": "portfolio.projects.quizgrad.description",
  "tags": ["NextJS", "MUI", "Responsive", "Fullstack", "Mysql", "TypeOrm", "API", "Typescript", "NestJs", "SocketIo", "Sendgrid"],
  "github": [
    {
      "title": "Frontend",
      "url": "https://github.com/nico0689crc/quiz-grad-frontend"
    },
    {
      "title": "Backend",
      "url": "https://github.com/nico0689crc/quiz-grad-backend"
    },
  ],
  "website": "https://quizgrad.nicolasarielfernandez.tech",
  "image": QuizGradImage
}, {
  "title": "portfolio.projects.kanban.title",
  "description": "portfolio.projects.kanban.description",
  "tags": ["ReactJs", "Docker", "NextJS", "MUI", "Redux", "Typescript", "NodeJS", "ExpressJs", "Mysql", "Sequelize", "Api", "Fullstack", "Sendgrid"],
  "github": "https://github.com/nico0689crc/kanban",
  "website": "https://kanban.nicolasarielfernandez.tech",
  "image": KanbanImage
}, {
  "title": "portfolio.projects.portfolio.title",
  "description": "portfolio.projects.portfolio.description",
  "tags": ["ReactJs", "MUI"],
  "github": "https://github.com/nico0689crc/portafolio-v2",
  "website": "https://nicolasarielfernandez.tech",
  "image": PortafolioImage
}];

const ProjectCard = ({ project }) => {
  const { t } = useTranslation();

  return (
    <Grid item xs={12} sm={6} md={6} xl={4}>
      <Box
        component={motion.div}
        key={project.title}
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 30, opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card sx={{ borderRadius: 4, border: theme => `2px solid ${theme.palette.primary.main}`, backgroundColor: theme => theme.palette.mode === "dark" ? "#2a2e3c" : "#f5f8fc" }}>
          <Grid container>
            <Grid item xs={12}>
              <CardMedia
                component="img"
                sx={{ height: "100%" }}
                image={project.image ?? "https://mui.com/static/images/cards/paella.jpg"}
                alt={project.title}
              />
            </Grid>
            <Grid item xs={12} sx={{ borderBottom: theme => `1px dashed ${theme.palette.primary.main}` }}>
              <Stack p={3} spacing={2}>
                <Link href={!Array.isArray(project.website) ? project.website : "#"} target="_blank">
                  <Typography variant="subtitle1"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      color: (theme) => theme.palette.mode === "dark" ? theme.palette.primary.main : theme.palette.text.primary
                    }}>
                    {t(project.title)}
                    <Iconify icon="fa:external-link" sx={{ width: 15 }} />
                  </Typography>

                </Link>
                <Typography variant="body2">{t(project.description)}</Typography>
                <Grid container gap={1.5}>
                  {project.tags.map((tag, index) => (
                    <Grid key={index} item>
                      <Chip sx={{ borderRadius: 1 }} label={tag} color="primary" style={{ fontWeight: "bolder" }} />
                    </Grid>
                  ))}
                </Grid>
              </Stack>
            </Grid>

            <Stack spacing={5} direction="row" justifyContent="center" p={1} width="100%">
              {!Array.isArray(project.github) && (
                <IconButtonSocialMedia title="GitHub" href={project.github}>
                  <GitHub />
                </IconButtonSocialMedia>
              )}

              {Array.isArray(project.github) && project.github.map(link => (
                <IconButtonSocialMedia title={link.title} href={link.url}>
                  <GitHub />
                </IconButtonSocialMedia>
              )
              )}

              {!Array.isArray(project.website) && (
                <IconButtonSocialMedia title="Website" href={project.website}>
                  <Launch />
                </IconButtonSocialMedia>
              )}

              {Array.isArray(project.website) && project.website.map(link => (
                <IconButtonSocialMedia title={link.title} href={link.url}>
                  <Launch />
                </IconButtonSocialMedia>
              ))}
            </Stack>
          </Grid>
        </Card>
      </Box>
    </Grid>
  );
}

const Portfolio = () => {
  const { t } = useTranslation();

  return (
    <Stack rowGap={8} py={6}>
      <Typography variant="h4" alignSelf="center">{t('portfolio.title')}</Typography>
      <Grid alignItems="center" container spacing={5}>
        {projects.map((project, index) => <ProjectCard key={index} project={project} />)}
      </Grid>
    </Stack>
  );
}

export default Portfolio;