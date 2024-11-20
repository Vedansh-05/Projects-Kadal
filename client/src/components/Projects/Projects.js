import React from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";
import Project from "./Project/Project";
import useStyles from "./styles";

const Projects = () => {
  const projects = useSelector((state) => state.projects);
  const classes = useStyles();

  // Sort projects by start date in chronological order (oldest to newest)
  const sortedProjects = projects.slice().sort((a, b) => new Date(a.startDate) - new Date(b.startDate));

  return (
    !sortedProjects.length ? <CircularProgress /> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {sortedProjects.map((project) => (
          <Grid key={project._id} item xs={12} sm={6}>
            <Project project={project} />
          </Grid>
        ))}
      </Grid>
    )
  );
};

export default Projects;