import React from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";
import Project from "./Project/Project";
import useStyles from "./styles";

const Projects = ({ isLoggedIn }) => {
  const projects = useSelector((state) => state.projects);
  const classes = useStyles();

  // Sort projects by start date in chronological order (oldest to newest)
  const sortedProjects = projects.slice().sort((a, b) => new Date(a.startDate) - new Date(b.startDate));

  // Define a default project
  const defaultProject = {
    _id: "default",
    organisationName: "Default Organisation",
    projectName: "Default Project",
    startDate: new Date().toISOString(),
    endDate: new Date().toISOString(),
    enrollmentDeadline: new Date().toISOString(),
    stipend: 0,
    logo: "https://via.placeholder.com/150",
    registrationLink: "#",
    projectDescription: "#",
    createdAt: new Date().toISOString(),
  };

  return (
    !sortedProjects.length ? (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        <Grid item xs={12} sm={6}>
          <Project project={defaultProject} isLoggedIn={isLoggedIn} />
        </Grid>
      </Grid>
    ) : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {sortedProjects.map((project) => (
          <Grid key={project._id} item xs={12} sm={6}>
            <Project project={project} isLoggedIn={isLoggedIn} />
          </Grid>
        ))}
      </Grid>
    )
  );
};

export default Projects;