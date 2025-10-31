import MuiButton from "@mui/material/Button";

function Button({ children, size, color }) {
  return (
    <MuiButton variant="contained" size={size} color={color}>
      {children}
    </MuiButton>
  );
}
export default Button;
