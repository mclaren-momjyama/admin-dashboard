import { Toolbar, Typography, IconButton, Tooltip, useTheme } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

export default function AdminTableToolbar({ numSelected, onDelete, toggleTheme, mode }) {
  const theme = useTheme();

  return (
    <Toolbar>
      <Typography
        sx={{
          flex: '1 1 100%',
          fontWeight: 'bold',
          fontSize: '1.5rem',
          color: theme.palette.mode === 'dark' ? 'red' : theme.palette.text.primary
        }}
        variant="h6"
        id="tableTitle"
        component="div"
      >
        Admin Dashboard
      </Typography>

      <Tooltip title="Toggle Theme">
        <IconButton onClick={toggleTheme}>
          {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </Tooltip>

      {numSelected > 0 && (
        <Tooltip title="Delete">
          <IconButton onClick={onDelete}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
}
