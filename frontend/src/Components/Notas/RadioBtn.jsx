import Radio from '@mui/material/Radio';
import { styled } from '@mui/material/styles';
import React from 'react';
import "./styles.css"

const CustomRadio = styled(Radio)(({theme})=> ({
    color: '#ff856d',
    '&.Mui-checked' : {
        color : '#ff856d'
    },
}));

export const RadioBtn = () => {
    const [selectedValue, setSelectedValue] = React.useState('a');

    const CustomRadio = styled(Radio)(({theme})=> ({
        color: '#ff856d',
        '&.Mui-checked' : {
            color : '#ff856d'
        },
    }));

  return (
    <div className='radio-group'>
        <div>
            <CustomRadio />
            <span>Todos</span>
        </div>
        <div>
            <CustomRadio />
            <span>Prioridade</span>
        </div>
        <div>
            <CustomRadio />
            <span>Normal</span>
        </div>
    </div>
    
  )
}
