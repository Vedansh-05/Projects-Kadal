import { makeStyles } from "@material-ui/core";

export default makeStyles(() => ({
  appBar: {
    borderRadius: 15,
    margin: "30px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
  },
  logo: {
    marginRight: "auto",
  },
  heading: {
    color: "rgba(0,183,255, 1)",
    flexGrow: 1,
    textAlign: "center",
  },
  image: {
    marginLeft: "15px",
  },
}));