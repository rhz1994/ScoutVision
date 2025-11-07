import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";

function DeleteDialog({ open, onCancel, onDelete }) {
  return (
    <Dialog open={open} onClose={onCancel}>
      <DialogTitle>Bekräfta borttagning</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Är du säker på att du vill ta bort din profil?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onCancel}>Avbryt</Button>
        <Button onClick={onDelete} color="error" variant="contained">
          Ta bort
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default DeleteDialog;
