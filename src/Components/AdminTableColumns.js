// adminTableColumns.js
import { Box } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export const getAdminTableColumns = (isRowSelected, handleSelectRow, toggleRow, openRows) => [
  {
    field: 'checkbox',
    headerName: '',
    minWidth: 40,
    flex: 0.1,
    sortable: false,
    filterable: false,
    renderCell: (params) => (
      <Checkbox
        checked={isRowSelected(params.row.id)}
        onChange={() => handleSelectRow(params.row.id)}
      />
    ),
  },
  {
    field: 'expand',
    headerName: '',
    minWidth: 45,
    flex: 0.1,
    sortable: false,
    filterable: false,
    renderCell: (params) => (
      <IconButton size="small" onClick={() => toggleRow(params.row.id)}>
        {openRows[params.row.id] ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
      </IconButton>
    ),
  },
  {
    field: 'imgUrl',
    headerName: 'Profile',
    headerAlign: 'center',
    minWidth: 100,
    flex: 0.2,
    sortable: false,
    filterable: false,
    align: 'center',
    renderCell: (params) => (
      <Box sx={{ marginTop: 1 }}>
        <img
          src={params.value}
          alt="profile"
          style={{
            width: 32,
            height: 32,
            borderRadius: '50%',
            padding: 1,
            border: '2px solid #ccc',
            objectFit: 'cover'
          }}
        />
      </Box>
    ),
  },
  {
    field: 'id',
    headerName: 'ID',
    headerAlign: 'center',
    minWidth: 60,
    flex: 0.2,
    align: 'center',
    renderCell: (params) => <strong>{params.value}</strong>
  },
  {
    field: 'name',
    headerName: 'Name',
    headerAlign: 'center',
    minWidth: 120,
    flex: 1,
    align: 'center',
    editable: true,
    renderCell: (params) => <strong>{params.value}</strong>
  },
  {
    field: 'email',
    headerName: 'Email',
    headerAlign: 'center',
    minWidth: 160,
    flex: 1,
    align: 'center',
    editable: true,
    renderCell: (params) => <strong>{params.value}</strong>
  },
  {
    field: 'role',
    headerName: 'Role',
    headerAlign: 'center',
    minWidth: 100,
    flex: 0.6,
    align: 'center',
    editable: true,
    renderCell: (params) => <strong>{params.value}</strong>
  },
  {
    field: 'signupDate',
    headerName: 'Signup Date',
    headerAlign: 'center',
    minWidth: 120,
    align: 'center',
    flex: 0.7,
    renderCell: (params) => <strong>{params.value}</strong>
  },
  {
    field: 'lastLogin',
    headerAlign: 'center',
    headerName: 'Last Login',
    minWidth: 150,
    align: 'center',
    flex: 0.8,
    renderCell: (params) => <strong>{params.value}</strong>
  },
  {
    field: 'status',
    headerName: 'Status',
    headerAlign: 'center',
    minWidth: 80,
    align: 'center',
    flex: 0.5,
    editable: false,
    renderCell: (params) => <strong>{params.value}</strong>
  }
];
