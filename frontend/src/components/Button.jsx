import MuiButton from "@mui/material/Button";

function Button({ children }) {
  return (
    <MuiButton variant="contained" size="large" color="primary">
      {children}
    </MuiButton>
  );
}
export default Button;
