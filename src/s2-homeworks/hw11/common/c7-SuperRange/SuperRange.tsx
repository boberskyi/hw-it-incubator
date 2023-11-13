import React from 'react'
import {Slider, SliderProps, SliderThumb} from '@mui/material'
import { styled } from '@mui/material/styles';

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <MyCustomSlider {...props} />
    )
}

const MyCustomSlider = styled(Slider)(() => ({
    width: 147,
    color: '#0C2;',
    height: 4,
    '& .MuiSlider-thumb': {
        height: 18,
        width: 18,
        backgroundColor: '#fff',
        border: '1px solid currentColor',
        '&:hover': {
            boxShadow: '0 0 0 8px rgba(58, 133, 137, 0.16)',
        },
        '&:before': {
            height: 6,
            width: 6,
            filter: 'drop-shadow(0px 0px 2px rgba(29, 33, 38, 0.10)) drop-shadow(0px 0px 40px rgba(29, 33, 38, 0.13))',
            backgroundColor: 'currentColor',
        },
    },
    '& .MuiSlider-track': {
        height: 4,
    },
    '& .MuiSlider-rail': {
        color: '#8B8B8B',
        height: 4,
    },
}));

export default SuperRange
