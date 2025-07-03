import React, { useState, useEffect } from 'react';
import {
  Box,
  Checkbox,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination,
  TableRow,
  TextField,
} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import CancelIcon from '@mui/icons-material/Cancel';
import AdminTableToolbar from './AdminTableToolbar.js';
import AdminTableHead from './AdminTableHead';
import data from '../data.js';

const AdminTable = () => {
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [rows, setRows] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [editedRow, setEditedRow] = useState({});

  const fetchData = () => {
    setRows(data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((row) => row.id);
      setSelected(newSelected);
    } else {
      setSelected([]);
    }
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = [...selected, id];
    } else if (selectedIndex === 0) {
      newSelected = selected.slice(1);
    } else if (selectedIndex === selected.length - 1) {
      newSelected = selected.slice(0, -1);
    } else if (selectedIndex > 0) {
      newSelected = [...selected.slice(0, selectedIndex), ...selected.slice(selectedIndex + 1)];
    }

    setSelected(newSelected);
  };

  const handleDelete = () => {
    const updatedRows = rows.filter((row) => !selected.includes(row.id));
    setRows(updatedRows);
    setSelected([]);

    const filteredRows = updatedRows.filter((row) =>
      Object.values(row).some(
        (rowValue) =>
          typeof rowValue === 'string' &&
          rowValue.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
    setRows(filteredRows);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchQuery(value);

    const filteredRows = rows.filter((row) =>
      Object.values(row).some(
        (rowValue) =>
          typeof rowValue === 'string' && rowValue.toLowerCase().includes(value.toLowerCase())
      )
    );
    setRows(filteredRows);
  };

  const handleEdit = () => {
    if (selected.length === 1) {
      const selectedRow = rows.find((row) => row.id === selected[0]);
      setEditedRow(selectedRow);
      setEditMode(true);
    } else {
      setEditedRow({});
      setEditMode(false);
    }
  };

  const handleSave = (updatedRow) => {
    const updatedRows = rows.map((row) => {
      if (row.id === updatedRow.id) {
        return {
          ...row,
          ...updatedRow,
        };
      } else {
        return row;
      }
    });

    setRows(updatedRows);
    setEditMode(false);
    setEditedRow({});
  };

  return (
    <Box sx={{ width: '99%', paddingLeft: '8px', paddingRight: '4px' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <AdminTableToolbar
          numSelected={selected.length}
          onDelete={handleDelete}
          onSearch={handleSearch}
          onEdit={handleEdit}
        />
        <TableContainer>
          <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle">
            <AdminTableHead
              numSelected={selected.length}
              onSelectAllClick={handleSelectAllClick}
              rowCount={rows.length}
            />
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.id);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  if (editMode && editedRow.id === row.id) {
                    return (
                      <TableRow
                        hover
                        onClick={(event) => handleClick(event, row.id)}
                        role="checkbox"
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        key={row.id}
                        selected={isItemSelected}
                      >
                        <TableCell padding="checkbox">
                          <Checkbox
                            color="primary"
                            checked={isItemSelected}
                            inputProps={{
                              'aria-labelledby': labelId,
                            }}
                          />
                        </TableCell>
                        <TableCell component="th" id={labelId} scope="row" padding="none">
                          <TextField
                            value={editedRow.name}
                            onChange={(event) => setEditedRow({ ...editedRow, name: event.target.value })}
                          />
                        </TableCell>
                        <TableCell align="right">
                          <TextField
                            value={editedRow.email}
                            onChange={(event) => setEditedRow({ ...editedRow, email: event.target.value })}
                          />
                        </TableCell>
                        <TableCell align="right">
                          <TextField
                            value={editedRow.role}
                            onChange={(event) => setEditedRow({ ...editedRow, role: event.target.value })}
                          />
                        </TableCell>
                        <TableCell align="right">
                          <Box>
                            <IconButton
                              size="small"
                              onClick={() => handleSave(editedRow)}
                              style={{ marginRight: 5 }}
                            >
                              <CheckIcon />
                            </IconButton>
                            <IconButton
                              size="small"
                              onClick={() => {
                                setEditMode(false);
                                setEditedRow({});
                              }}
                            >
                              <CancelIcon />
                            </IconButton>
                          </Box>
                        </TableCell>
                      </TableRow>
                    );
                  } else {
                    return (
                      <TableRow
                        hover
                        onClick={(event) => handleClick(event, row.id)}
                        role="checkbox"
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        key={row.id}
                        selected={isItemSelected}
                      >
                        <TableCell padding="checkbox">
                          <Checkbox
                            color="primary"
                            checked={isItemSelected}
                            inputProps={{
                              'aria-labelledby': labelId,
                            }}
                          />
                        </TableCell>
                        <TableCell component="th" id={labelId} scope="row" padding="none">
                          {row.name}
                        </TableCell>
                        <TableCell align="right">{row.email}</TableCell>
                        <TableCell align="right">{row.role}</TableCell>
                      </TableRow>
                    );
                  }
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 50]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
};

export default AdminTable;
