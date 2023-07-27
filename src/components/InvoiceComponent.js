import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import GatikAILogo from '../images/GatikAILogo.png';

const BillRepresentation = (props) => {
    debugger;
    const [tableData, setTableData] = React.useState([]);
    React.useEffect(() => {
        // Load data from local storage on component mount
        const data = JSON.parse(localStorage.getItem('tableData') || '[]');
        debugger
        console.log(data)
        setTableData(data);
      }, []);
  // Sample data for the bill
  const billItems = tableData
  // Calculate the total
  const total = tableData.reduce((acc, item) => acc +item.taxAmt+ (item.qty * item.rate), 0);
 
  const currentDate = new Date();
  const futureDate = new Date();
  futureDate.setDate(currentDate.getDate() + 10);

  function formattedDate(date){
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(
    date.getDate()
  ).padStart(2, '0')}`;
  }
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Paper elevation={3} style={{ padding: '16px' }}>
          <Typography variant="h5">Bill Details</Typography>
          <Grid container spacing={1}>
            <Grid item xs={6} >
              <Typography variant="subtitle1"> <img src={GatikAILogo} alt="Logo" style={{ height: 40, marginRight: 10 }} /></Typography>
            <Typography>
                GatikAI Technologies Pvt. Ltd
                </Typography>
                <Typography>
                    +91-8888888888
                </Typography>
            <Typography>
                    304, ARG Shoppers, Opp. Indian Oil Petrol Pump, Road No.9, VKIA, Jaipur, Rajasthan - 302039
                </Typography>
                <Typography>
                    GSTIN: 08ABCDE1234A1ZZ
                </Typography>
            </Grid>
            <Grid item xs={6}>
            <Grid container spacing={1}>
            <Grid item xs={6}>
              <Typography variant="subtitle2">Invoice No</Typography>
              <Typography variant="subtitle1" fontWeight='bold'>1</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="subtitle2">Issue Date</Typography>
              <Typography variant="subtitle1" fontWeight='bold'>{formattedDate(currentDate)}</Typography>
            </Grid>
            </Grid>
            <Grid container spacing={1}>
            
            <Grid item xs={6}>
              <Typography variant="subtitle2">Total Amount</Typography>
              <Typography variant="subtitle1" fontWeight='bold'>2</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="subtitle2">Due Date</Typography>
              <Typography variant="subtitle1" fontWeight='bold'>{formattedDate(futureDate)}</Typography>
            </Grid>
            </Grid>
            <Grid container spacing={1}>
            
            <Grid item xs={6}>
              <Typography variant="subtitle2">Buyer Order No</Typography>
              <Typography variant="subtitle1" fontWeight='bold'>2</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="subtitle2">Buyer Order Date</Typography>
              <Typography variant="subtitle1" fontWeight='bold'>{formattedDate(futureDate)}</Typography>
            </Grid>
            </Grid>
            <Grid container spacing={1}>
            
            <Grid item xs={6}>
              <Typography variant="subtitle2">Dispatch No</Typography>
              <Typography variant="subtitle1" fontWeight='bold'>2</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="subtitle2">Dispatch Date</Typography>
              <Typography variant="subtitle1" fontWeight='bold'>{formattedDate(futureDate)}</Typography>
            </Grid>
            </Grid>
            <Grid container spacing={1}>
            
            <Grid item xs={6}>
              <Typography variant="subtitle2">Dispatch through</Typography>
              <Typography variant="subtitle1" fontWeight='bold'>2</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="subtitle2">E-way Bill Ref:</Typography>
              <Typography variant="subtitle1"> </Typography>
            </Grid>
            </Grid>
            </Grid>
            </Grid>
            <Grid container spacing={1}>
            <Grid item xs={6}>
            <Typography variant="subtitle2"> Billing Address</Typography>
            <Typography variant="subtitle1" fontWeight='bold'>{props.inputValue.legalName}</Typography>
            <Typography variant="subtitle1" fontWeight='bold'>{props.inputValue.tradeName}</Typography>
            <Typography variant="subtitle2">{props.inputValue.mobileNumber}</Typography>
            <Typography variant="subtitle2">{props.inputValue.billingAddress}</Typography>
            <Typography variant="subtitle2">GSTIN: {props.inputValue.gstIn}</Typography>
            </Grid>
            <Grid item xs={6}>
            <Typography variant="subtitle2"> Shipping Address</Typography>
            <Typography variant="subtitle1" fontWeight='bold'>{props.inputValue.shippingName}</Typography>
            <Typography variant="subtitle2">{props.inputValue.shippingPhoneNumber}</Typography>
            <Typography variant="subtitle2">{props.inputValue.shippingAddress}</Typography>
            </Grid>
            </Grid>
            <Grid container spacing={1}>
              <Grid item xs={2}>
                <Typography variant="body1">Product</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant="body1">Quantity</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant="body1">Rate</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant="body1">Amount</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant="body1">HSN/SAC</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant="body1">Taxable Amount</Typography>
              </Grid>
            </Grid>
          {billItems.map((item, index) => (
            <Grid key={index} container spacing={1}>
              <Grid item xs={2}>
                <Typography variant="body1">{item.name}</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant="body1">{item.qty}</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant="body1">{item.rate}</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant="body1">{item.amt}</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant="body1">{item.hsnsac}</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant="body1">{item.taxAmt}</Typography>
              </Grid>
            </Grid>
          ))}
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <Typography variant="h6">Total</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6">{total}</Typography>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default BillRepresentation;
