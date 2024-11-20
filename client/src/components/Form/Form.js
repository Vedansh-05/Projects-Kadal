import React, { useState } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";

import useStyles from "./styles";
import { createProject } from "../../actions/projects";

const Form = () => {
  const [projectData, setProjectData] = useState({
    organisationName: "",
    projectName: "",
    startDate: "",
    endDate: "",
    enrollmentDeadline: "",
    stipend: "",
    logo: "",
    registrationLink: "",
    projectDescription: "",
  });
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createProject(projectData));
  };

  const clear = () => {
    setProjectData({
      organisationName: "",
      projectName: "",
      startDate: "",
      endDate: "",
      enrollmentDeadline: "",
      stipend: "",
      logo: "",
      registrationLink: "",
      projectDescription: "",
    });
  };

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">Create a Project</Typography>
        <TextField
          name="organisationName"
          variant="outlined"
          label="Organisation Name*"
          fullWidth
          value={projectData.organisationName}
          onChange={(e) =>
            setProjectData({ ...projectData, organisationName: e.target.value })
          }
        />
        <TextField
          name="projectName"
          variant="outlined"
          label="Project Name*"
          fullWidth
          value={projectData.projectName}
          onChange={(e) =>
            setProjectData({ ...projectData, projectName: e.target.value })
          }
        />
        <TextField
          name="startDate"
          variant="outlined"
          label="Start Date*"
          type="date"
          fullWidth
          InputLabelProps={{ shrink: true }}
          value={projectData.startDate}
          onChange={(e) =>
            setProjectData({ ...projectData, startDate: e.target.value })
          }
        />
        <TextField
          name="endDate"
          variant="outlined"
          label="End Date*"
          type="date"
          fullWidth
          InputLabelProps={{ shrink: true }}
          value={projectData.endDate}
          onChange={(e) =>
            setProjectData({ ...projectData, endDate: e.target.value })
          }
        />
        <TextField
          name="enrollmentDeadline"
          variant="outlined"
          label="Enrollment Deadline*"
          type="date"
          fullWidth
          InputLabelProps={{ shrink: true }}
          value={projectData.enrollmentDeadline}
          onChange={(e) =>
            setProjectData({
              ...projectData,
              enrollmentDeadline: e.target.value,
            })
          }
        />
        <TextField
          name="stipend"
          variant="outlined"
          label="Stipend*"
          type="number"
          fullWidth
          value={projectData.stipend}
          onChange={(e) =>
            setProjectData({ ...projectData, stipend: e.target.value })
          }
        />
        <Typography variant="body1" gutterBottom>
          Upload Logo
        </Typography>
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) => {
              setProjectData({ ...projectData, logo: base64 });
            }}
          />
        </div>
        <TextField
          name="registrationLink"
          variant="outlined"
          label="Registration Link*"
          fullWidth
          value={projectData.registrationLink}
          onChange={(e) =>
            setProjectData({ ...projectData, registrationLink: e.target.value })
          }
        />
        <TextField
          name="projectDescription"
          variant="outlined"
          label="Project Description"
          fullWidth
          value={projectData.projectDescription}
          onChange={(e) =>
            setProjectData({
              ...projectData,
              projectDescription: e.target.value,
            })
          }
        />
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
