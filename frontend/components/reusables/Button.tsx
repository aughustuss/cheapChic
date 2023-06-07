import {Button} from '@mui/material'
import React from 'react'
import { ButtonProps } from '@/typings'

export const ReusableButton = ({children, variant, classes, ...props}:ButtonProps) => {
    return <Button  {...props} className={classes} variant={variant}>{children}</Button>
}