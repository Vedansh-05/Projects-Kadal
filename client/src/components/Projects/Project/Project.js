import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import moment from "moment";

import useStyles from "./styles";

const Project = ({ project }) => {
  const classes = useStyles();
  const isEnrollmentClosed = moment().isAfter(project.enrollmentDeadline);

  return (
    <Card className={`${classes.card} ${isEnrollmentClosed ? classes.disabledCard : ''}`}>
      <CardMedia
        className={classes.media}
        image={project.logo}
        title={project.projectName}
      />
      <div className={classes.overlay}>
        <Typography variant="h6">{project.organisationName}</Typography>
        <Typography variant="body2">
          {moment(project.createdAt).fromNow()}
        </Typography>
      </div>
      <div className={classes.overlay2}>
        <Button style={{ color: "white" }} size="small" onClick={() => {}}>
          <MoreHorizIcon fontSize="default" />
        </Button>
      </div>
      <CardContent>
        <Typography className={classes.title} variant="h5" gutterBottom>
          {project.projectName}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Start Date: {moment(project.startDate).format("MMMM Do YYYY")}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          End Date: {moment(project.endDate).format("MMMM Do YYYY")}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Enrollment Deadline: {moment(project.enrollmentDeadline).format("MMMM Do YYYY")}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Stipend: ${project.stipend}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button
          size="small"
          color="primary"
          onClick={() => window.open(project.registrationLink, "_blank")}
          disabled={isEnrollmentClosed}
        >
          Register
        </Button>
        <Button
          size="small"
          color="primary"
          onClick={() => window.open(project.projectDescription, "_blank")}
          disabled={isEnrollmentClosed}
        >
          Project Description
        </Button>
      </CardActions>
    </Card>
  );
};

export default Project;