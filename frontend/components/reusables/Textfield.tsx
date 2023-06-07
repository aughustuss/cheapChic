import { TextFieldProps } from '@/typings'
import { TextField } from '@mui/material'
import React from 'react'

const ReusableTextfield = ({ classes, label, helper, type, ...rest}:TextFieldProps) => {
  return <TextField {...rest} className={classes} label={label} type={type} helperText={helper}  />
}

export default ReusableTextfield