import React, { useState, useEffect } from 'react';
import {
  Select,
  MenuItem,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';

const DynamicTable = () => {
  const [tableData, setTableData] = useState([]);
  const [editId, setEditId] = useState(null);
  const taxAmtData={'0':0,'123':18, '124':6, '125':9}
  useEffect(() => {
    // Load data from local storage on component mount
    const data = JSON.parse(localStorage.getItem('tableData') || '[]');
    setTableData(data);
  }, []);

  useEffect(() => {
    // Save data to local storage whenever tableData changes
    localStorage.setItem('tableData', JSON.stringify(tableData));
  }, [tableData]);

  const handleAddRow = () => {
    // Add a new row to the tableData state
    const id =Date.now()
    setTableData((prevData) => [...prevData, { id: id, name: '', qty: 0, rate:0, amt:0, hsnsac:0,taxAmt:0  }]);
    handleEditRow(id)
  };

  const calculateAmt=(field, value, row)=>{
    if(field!=='rate'&& field!=='qty'){
    return row.rate*row.qty
    }else if(field==='rate') return row.qty*value
    else return row.rate*value
  }
  const calculateTaxAmt=(field, value, row)=>{
    if(field==='hsnsac'){
    return (taxAmtData[value]* row.rate*row.qty)/100
    }else return  (taxAmtData[row.hsnsac]* row.rate*row.qty)/100
  }

  const handleInputChange = (event, id, field) => {
    const { value } = event.target;
    setTableData((prevData) =>
      prevData.map((row) => (row.id === id ? { ...row, [field]: value, amt:calculateAmt(field,value,row), taxAmt:calculateTaxAmt(field,value, row)} : row))
    );
    debugger;
  };

  const handleDeleteRow = (id) => {
    // Remove a row from the tableData state
    setTableData((prevData) => prevData.filter((row) => row.id !== id));
    // Exit edit mode if the deleted row was being edited
    if (editId === id) {
      setEditId(null);
    }
  };

  const handleEditRow = (id) => {
    // Enable edit mode for the specified row
    setEditId(id);
  };

  const handleSaveRow = (id) => {
    // Disable edit mode and save changes for the specified row
    setEditId(null);
  };

  return (
    <div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Product</TableCell>
              <TableCell>Qty</TableCell>
              <TableCell>Rate</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>HSN/SAC</TableCell>
              <TableCell>Tax Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((row) => (
              <TableRow key={row.id}>
                <TableCell>
                  {editId === row.id ? (
                    <TextField
                      value={row.name}
                      onChange={(e) => handleInputChange(e, row.id, 'name')}
                      variant="outlined"
                    />
                  ) : (
                    row.name
                  )}
                </TableCell>
                <TableCell>
                  {editId === row.id ? (
                    <TextField
                      value={row.qty}
                      onChange={(e) => handleInputChange(e, row.id, 'qty')}
                      variant="outlined"
                    />
                  ) : (
                    row.qty
                  )}
                </TableCell>
                <TableCell>
                  {editId === row.id ? (
                    <TextField
                      value={row.rate}
                      onChange={(e) => handleInputChange(e, row.id, 'rate')}
                      variant="outlined"
                    />
                  ) : (
                    row.rate
                  )}
                </TableCell>
                <TableCell>
                  {editId === row.id ? (
                    <TextField
                    disabled
                      value={row.amt}
                      onChange={(e) => handleInputChange(e, row.id, 'amt')}
                      variant="outlined"
                    />
                  ) : (
                    row.amt
                  )}
                </TableCell>
                <TableCell>
                  {editId === row.id ? (
                    <Select
                    id="hsnsac"
                    value={row.hsnsac}
                    onChange={(e) => handleInputChange(e, row.id, 'hsnsac')}
                    label="Select an option"
                  >
                    <MenuItem value="0">None</MenuItem>
                    <MenuItem value="123">123</MenuItem>
                    <MenuItem value="124">124</MenuItem>
                    <MenuItem value="125">125</MenuItem>
                  </Select>
                   ) : (
                    row.hsnsac
                  )}
                </TableCell>
                <TableCell>
                  {editId === row.id ? (
                    <TextField
                    disabled
                      value={row.taxAmt}
                      onChange={(e) => handleInputChange(e, row.id, 'taxAmt')}
                      variant="outlined"
                    />
                  ) : (
                    row.taxAmt
                  )}
                </TableCell>
                <TableCell>
                  {editId === row.id ? (
                    <>
                      <IconButton aria-label="save" onClick={() => handleSaveRow(row.id)}>
                        <SaveIcon />
                      </IconButton>
                      <IconButton aria-label="cancel" onClick={() => setEditId(null)}>
                        <DeleteIcon />
                      </IconButton>
                    </>
                  ) : (
                    <>
                    <IconButton aria-label="edit" onClick={() => handleEditRow(row.id)}>
                      <EditIcon />
                    </IconButton>
                     <IconButton aria-label="delete" onClick={() => handleDeleteRow(row.id)}>
                     <DeleteIcon />
                   </IconButton>
                   </>
                  )}
                 
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <IconButton aria-label="add" onClick={handleAddRow}>
        <AddIcon />
      </IconButton>
    </div>
  );
};

export default DynamicTable;
