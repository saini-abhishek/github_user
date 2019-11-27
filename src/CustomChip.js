import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';

export default function CustomChip({value, label, ...params}) {
    return (
        <Chip avatar={<Avatar>{value}</Avatar>} label={label} variant="outlined"/>
    )
}