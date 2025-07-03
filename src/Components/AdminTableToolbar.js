import {
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
  TextField,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const AdminTableToolbar = ({ numSelected, onDelete, onSearch, onEdit }) => {
  let toolbarContent;
  if (numSelected > 0) {
    toolbarContent = (
      <Typography sx={{ flex: '1 1 100%' }} color="inherit" variant="subtitle1" component="div">
        {numSelected} selected
      </Typography>
    );
  } else {
    toolbarContent = (
      <Typography sx={{ flex: '1 1 100%' }} variant="h6" id="tableTitle" component="div">
        Admin UI
      </Typography>
    );
  }

  let editButton;
  if (numSelected === 1) {
    editButton = (
      <Tooltip title="Edit">
        <IconButton onClick={onEdit}>
          <EditIcon />
        </IconButton>
      </Tooltip>
    );
  }

  let deleteButton;
  if (numSelected > 0) {
    deleteButton = (
      <Tooltip title="Delete">
        <IconButton onClick={onDelete}>
          <DeleteIcon />
        </IconButton>
      </Tooltip>
    );
  }

  return (
    <Toolbar>
      {toolbarContent}
      {editButton}
      {deleteButton}
      <TextField
        sx={{ marginLeft: 'auto', width: '100%' }}
        label="Search"
        variant="outlined"
        size="small"
        onChange={onSearch}
      />
    </Toolbar>
  );
};

export default AdminTableToolbar 