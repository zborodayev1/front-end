/* eslint-disable react/prop-types */
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

export const SideBlock = ({ title, children }) => {
  return (
    <Paper>
      <Typography variant="h6">{title}</Typography>
      {children}
    </Paper>
  );
};
