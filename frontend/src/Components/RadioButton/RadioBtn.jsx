import Radio from '@mui/material/Radio';
import { styled } from '@mui/material/styles';
import {useState} from 'react';
import "./styles.css"



export const RadioBtn = ({handleChange, selectedValue}) => {
    // const [selectedValue, setSelectedValue] = useState('all');

    // const handleChange = (e) => {
    //     setSelectedValue(e.target.value)
    // }

    const controlProps = (item) => ({
        checked : selectedValue === item,
        onChange: handleChange,
        value : item,
        name : 'color-radio-button-demo',
        inputProps: {'aria-label': item}
    })

   return (
    <div className='radio-group'>
        <div>
            <Radio {...controlProps('all')} sx={{
                color: "#ff856d",
                "&.Mui-checked" : {
                    color : "#ff856d"
                }
                
            }} />
            <span>Todos</span>
        </div>
        <div>
            <Radio {...controlProps('true')} sx={{
                color: "#ff856d",
                "&.Mui-checked" : {
                    color : "#ff856d"
                }
                
            }} />
            <span>Prioridade</span>
        </div>
        <div>
            <Radio {...controlProps('false')} sx={{
                color: "#ff856d",
                "&.Mui-checked" : {
                    color : "#ff856d"
                }
                
            }} />
            <span>Normal</span>
        </div>
        
    </div>
    
  )
}
