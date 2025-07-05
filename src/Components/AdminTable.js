import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/material';
import data from '../data';
import AdminTableToolbar from './AdminTableToolbar';
import { useState, useRef } from 'react';
import { getAdminTableColumns } from './AdminTableColumns';
import ActivityCollapse from './ActivityCollapse';
import './AdminTable.css';

export default function AdminTable({ toggleTheme, mode }) {
  const [openRows, setOpenRows] = useState({});
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(5);
  const [selectedRows, setSelectedRows] = useState([]);
  const [rows, setRows] = useState(data);
  const rowRefs = useRef({});

  const toggleRow = (rowId) => {
    setOpenRows((previousOpenRows) => {
      const isNowOpen = !previousOpenRows[rowId];
      const newOpenRows = { ...previousOpenRows, [rowId]: isNowOpen };

      if (isNowOpen && rowRefs.current[rowId]) {
        setTimeout(() => {
          rowRefs.current[rowId].scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }, 200);
      }

      return newOpenRows;
    });
  };

  const isRowSelected = (rowId) => {
    return selectedRows.includes(rowId);
  };

  const handleSelectRow = (rowId) => {
    setSelectedRows((prevSelectedRows) => {
      if (prevSelectedRows.includes(rowId)) {
        return prevSelectedRows.filter((id) => id !== rowId);
      } else {
        return [...prevSelectedRows, rowId];
      }
    });
  };


  const handleDelete = () => {
    if (selectedRows.length > 0) {
      const remainingRows = data.filter((row) => !selectedRows.includes(row.id));
      setRows(remainingRows);
      setSelectedRows([]);
    }
  };

  const columns = getAdminTableColumns(isRowSelected, handleSelectRow, toggleRow, openRows);

  return (
    <Box className="custom-data-grid">
      <Paper className="admin-table-wrapper">
        <AdminTableToolbar
          numSelected={selectedRows.length}
          onDelete={handleDelete}
          toggleTheme={toggleTheme}
          mode={mode}
        />
        <Box className="data-grid-container">
          <DataGrid
            rows={rows}
            columns={columns}
            disableRowSelectionOnClick
            paginationModel={{ page, pageSize }}
            onPaginationModelChange={({ page, pageSize }) => {
              setPage(page);
              setPageSize(pageSize);
            }}
            pageSizeOptions={[5, 10]}
            className="custom-data-grid"
          />
        </Box>
      </Paper>

      {rows.slice(page * pageSize, page * pageSize + pageSize).map((row) => (
        <ActivityCollapse
          key={row.id}
          row={row}
          open={openRows[row.id]}
          ref={(el) => (rowRefs.current[row.id] = el)}
        />
      ))}
    </Box>
  );
}
