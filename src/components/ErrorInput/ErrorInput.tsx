import IFieldParams from '../../interfaces/IFieldParams'
import { TField } from '../../types/TField'
import { useState } from 'react'
import clsx from 'clsx'
import './errorInput.css'

interface IParams extends IFieldParams {
    value: string,
    isError: boolean,
    component: TField,
    onChange?: (value: string) => any
}

function ErrorInput(params: IParams) {
    const { component: Component, value, isError, className, onChange, ...fieldParams } = params

    const [isFirstInput, setIsFirstInput] = useState<boolean>(true)

    const onInput = (value: string) => {
        setIsFirstInput(false)
        onChange?.(value)
    }

    const styles = clsx((!isFirstInput && isError) && 'errorInput_error', className)

    return (<Component value={value} className={styles} onChange={({ target }) => onInput(target.value)} {...fieldParams} />)
}

export default ErrorInput