import Styles from './LabelledInput.module.css'
import InputLabel from '@mui/material/InputLabel';

function LabelledInput({
    className,
    type = 'text',
    id,
    label,
    value,
    placeholder,
    onChange
    }) {
    return (
        <div className={`${className} ${Styles.container}`}>
            <InputLabel htmlFor={id} sx={{ paddingLeft: '3px' }}>
                {label}
            </InputLabel>
            <input
                type={type}
                id={id}
                name={label}
                className={Styles.labelled_input}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>
        )
}

export default LabelledInput;
