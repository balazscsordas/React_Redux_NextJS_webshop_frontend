import { Collapse, TextField } from "@mui/material"
import { HTMLInputTypeAttribute, } from "react"

interface Props {
    inputRef?: React.MutableRefObject<HTMLInputElement>
    value?: string | number,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    onClick?: React.MouseEventHandler<HTMLButtonElement>,
    label?: string,
    nameVal?: string
    type?: HTMLInputTypeAttribute,
    autoComplete?: string,
    showError?: boolean,
    errorText?: string,
}


export const OneLineReqInput = ({ inputRef, value, onChange, nameVal, label, type, autoComplete, showError, errorText }: Props) => {
    return (
        <>
            <TextField
                margin="normal"
                required
                onChange={onChange}
                fullWidth
                inputRef={inputRef}
                value={value}
                label={label}
                name={nameVal}
                autoComplete={autoComplete}
                type={type}
            />
            <Collapse in={showError}>
                <p className="input-error-text">{errorText}</p>
            </Collapse>
        </>
    )
}

export const OneLineNonReqInput = ({ inputRef, value, onChange, nameVal, label, type, autoComplete, showError, errorText }: Props) => {
    return (
        <>
            <TextField
                margin="normal"
                onChange={onChange}
                fullWidth
                inputRef={inputRef}
                value={value}
                label={label}
                name={nameVal}
                autoComplete={autoComplete}
                type={type}
            />
            <Collapse in={showError}>
                <p className="input-error-text">{errorText}</p>
            </Collapse>
        </>
    )
}