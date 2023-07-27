import React from 'react';
import { Grid, TextField } from '@mui/material';

const BillingDetails = ({handleInputChange, inputValue}) => {
return (<div>
    <Grid container spacing={4}  sx={{ padding: '16px' }}>
        <Grid item xs={4}>
        <TextField
          required
          id="gstIn"
          value={inputValue.gstIn}
          label="GSTIN Number of the consumer"
          onChange={handleInputChange}
        />
        </Grid>
        <Grid item xs={4}>
        <TextField
          id="billingAddress"
          label="Billing Address"
          value={inputValue.billingAddress}
          onChange={handleInputChange}
        />
        </Grid>
        <Grid item xs={4}>
        <TextField
          id="tradeName"
          label="TradeName"
          value={inputValue.tradeName}
          onChange={handleInputChange}
        />
        </Grid>
        </Grid>
        <Grid container spacing={4}  sx={{ padding: '16px' }}>
            <Grid item xs={4}>
        <TextField
          id="legalName"
          label="Legal Name"
          value={inputValue.legalName}
          onChange={handleInputChange}
        />
        </Grid>
        <Grid item xs={4}>
        <TextField
          id="mobileNumber"
          label="Mobile Number"
          value={inputValue.mobileNumber}
          onChange={handleInputChange}
        />
        </Grid>
        <Grid item xs={4}>
        <TextField
          id="shippingName"
          label="Shipping To Legal Name"
          value={inputValue.shippingName}
          onChange={handleInputChange}
        />
      </Grid>
      </Grid>
      <Grid container spacing={4}  sx={{ padding: '16px' }}>

      <Grid item xs={4}>
        <TextField
          required
          id="shippingPhoneNumber"
          label="Shipping To Phone Number"
          value={inputValue.shippingPhoneNumber}
          onChange={handleInputChange}
        />
        </Grid>
      <Grid item xs={4}>
        <TextField
          id="shippingAddress"
          label="Shipping Address"
          value={inputValue.shippingAddress}
          onChange={handleInputChange}
        />
        </Grid>
        <Grid item xs={4}>
        <TextField
          id="location"
          label="Location"
          value={inputValue.location}
          onChange={handleInputChange}
        />
        </Grid>
        <Grid item xs={4}>
        <TextField
          id="pinCode"
          label="Pin Code"
          value={inputValue.pinCode}
          onChange={handleInputChange}
        />
      </Grid>
      </Grid>
      </div>)}

export default BillingDetails;