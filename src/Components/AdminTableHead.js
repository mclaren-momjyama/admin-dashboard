import {
  Checkbox,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';

const AdminTableHead = ({ onSelectAllClick, numSelected, rowCount }) => {
  if (numSelected > 0 && numSelected < rowCount) {
    return (
      <TableHead>
        <TableRow>
          <TableCell padding="checkbox">
            <Checkbox
              indeterminate
              checked={false}
              onChange={onSelectAllClick}
              inputProps={{ 'aria-label': 'select all desserts' }}
            />
          </TableCell>
          <TableCell>
            <strong style={{ fontSize: '18px' }}>Name</strong>
          </TableCell>
          <TableCell align="right">
            <strong style={{ fontSize: '18px' }}>Email</strong>
          </TableCell>
          <TableCell align="right">
            <strong style={{ fontSize: '18px' }}>Role</strong>
          </TableCell>
        </TableRow>
      </TableHead>
    );
  } else if (numSelected === rowCount) {
    return (
      <TableHead>
        <TableRow>
          <TableCell padding="checkbox">
            <Checkbox
              indeterminate={false}
              checked
              onChange={onSelectAllClick}
              inputProps={{ 'aria-label': 'select all desserts' }}
            />
          </TableCell>
          <TableCell>
            <strong style={{ fontSize: '18px' }}>Name</strong>
          </TableCell>
          <TableCell align="right">
            <strong style={{ fontSize: '18px' }}>Email</strong>
          </TableCell>
          <TableCell align="right">
            <strong style={{ fontSize: '18px' }}>Role</strong>
          </TableCell>
        </TableRow>
      </TableHead>
    );
  } else {
    return (
      <TableHead>
        <TableRow>
          <TableCell padding="checkbox">
            <Checkbox
              indeterminate={false}
              checked={false}
              onChange={onSelectAllClick}
              inputProps={{ 'aria-label': 'select all desserts' }}
            />
          </TableCell>
          <TableCell>
            <strong style={{ fontSize: '18px' }}>Name</strong>
          </TableCell>
          <TableCell align="right">
            <strong style={{ fontSize: '18px' }}>Email</strong>
          </TableCell>
          <TableCell align="right">
            <strong style={{ fontSize: '18px' }}>Role</strong>
          </TableCell>
        </TableRow>
      </TableHead>
    );
  }
};

export default AdminTableHead