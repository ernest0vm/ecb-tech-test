import { makeStyles } from "@material-ui/core";

const CarCardStyle = makeStyles({
    root: {
      minWidth: 300,
      minHeight: 300,
      maxWidth: 345,
      margin: 20
    },
    title: {
      fontSize: 22,
      fontWeight: "bold"
    },
    subtitle: {
      fontSize: 16,
      fontWeight: "lighter"
    },
    body: {
      fontSize: 14,
      color: "#808080"
    },
  });

export default CarCardStyle;