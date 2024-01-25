import { GitHub, Launch } from "@mui/icons-material";
import { Box, Card, CardMedia, Chip, Grid, Link, Stack, Typography } from "@mui/material";
import IconButtonSocialMedia from "components/ui/IconButtonSocialMedia/IconButtonSocialMedia";
import Iconify from "components/ui/Iconify";
import { useTranslation } from "react-i18next";
import PortafolioImage from "assets/images/portafolio.png";
import { motion } from "framer-motion";

const projects = [{
  "title": "Kanban dashboard (Work in Progress)",
  "description": "Amet sint esse ad cupidatat eu. Quis adipisicing labore duis amet cillum irure. Elit deserunt labore nisi ut. Et consectetur exercitation quis nisi id culpa laboris fugiat do minim esse elit cupidatat sint.",
  "tags": ["ReactJs", "Docker", "NextJS", "MUI", "Redux", "Typescript", "NodeJS", "ExpressJs", "Mysql", "Sequelize", "Api", "Fullstack", "Sendgrid"],
  "github": "https://github.com/nico0689crc/kanban",
  "website": "https://kanban.nicolasarielfernandez.tech",
  "image": null
},{
  "title": "Portfolio",
  "description": "Est ad duis incididunt incididunt eu nostrud irure sit. Non nostrud id est cillum adipisicing quis ut minim duis sunt sit pariatur. Aute dolor Lorem culpa Lorem mollit dolore ex deserunt dolor do enim. Qui et veniam dolore do aliqua cillum ullamco adipisicing veniam.",
  "tags": ["ReactJs", "MUI"],
  "github": "https://github.com/nico0689crc/portafolio-v2",
  "website": "https://nicolasarielfernandez.tech",
  "image": PortafolioImage
},{
  "title": "Shop Challenge",
  "description": "Laboris adipisicing sit aliquip aliquip veniam ad ipsum sint. Eu commodo enim officia nulla consequat sunt elit. Tempor nisi id ullamco ea dolor ipsum cupidatat aliquip reprehenderit. Ad proident enim deserunt qui ipsum ea duis non non est do ullamco exercitation. Tempor laboris dolor incididunt fugiat dolor. Ipsum voluptate anim irure Lorem elit occaecat exercitation occaecat elit id sunt anim sunt. Ullamco aute reprehenderit culpa excepteur aliqua eu ullamco commodo fugiat ipsum non nostrud ad aute.",
  "tags": ["ReactJs", "Redux", "NodeJS", "Mysql", "Api", "Fullstack"],
  "github": [
    { title: "GitHub - Frontend", url: "https://github.com/nico0689crc/itcrowd-challenge-frontend"},
    { title: "GitHub - Backend", url: "https://github.com/nico0689crc/itcrowd-challenge"}
  ],
  "website": "#",
  "image": null
},{
  "title": "Advance Redux Tutorial",
  "description": "Elit fugiat nulla dolore quis dolor velit et exercitation dolore commodo. Adipisicing pariatur aliqua laboris pariatur aliquip. Aute ex ullamco id tempor nulla cupidatat excepteur. Ex enim cillum ad nisi officia ad adipisicing excepteur et ea voluptate ex.",
  "tags": ["ReactJs", "Redux"],
  "github": "https://github.com/nico0689crc/redux-advanced-tutorial",
  "website": "#",
  "image": null
}];

const ProjectCard = ({project}) => {
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
              <Stack p={3} spacing={1}>
                <Link href={!Array.isArray(project.website) ? project.website : "#" } target="_blank">
                  <Typography variant="subtitle1" 
                  sx={{ 
                      display: "flex", 
                      alignItems: "center", 
                      gap: "0.5rem", 
                      color: (theme) => theme.palette.mode === "dark" ? theme.palette.primary.main : theme.palette.text.primary 
                    }}>
                      {project.title}
                    <Iconify icon="fa:external-link" sx={{ width: 15 }}/>
                  </Typography>
                  
                </Link>
                <Typography variant="caption">{project.description}</Typography>
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
        {projects.map((project,index) => <ProjectCard key={index} project={project}/>)}
      </Grid>
    </Stack>
  );
}

export default Portfolio;