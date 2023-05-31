import IFieldParams from '../../interfaces/IFieldParams'
import ErrorInput from '../ErrorInput/ErrorInput'
import { TField } from '../../types/TField'
import { useState } from 'react'
import { clsx } from 'clsx'
import './limitedField.css'

interface IParams extends IFieldParams {
    value: string,
    max: number,
    isError: boolean,
    blockClassName?: string,
    component: TField,
    onChange?: (value: string) => any
}

function LimitedField(params: IParams) {
    const { max, value, isError, onChange, className, blockClassName, ...fieldParams } = params
    
    const [isFirstInput, setIsFirstInput] = useState<boolean>(true)

    const onInput = (value: string) => {
        setIsFirstInput(false)
        onChange?.(value)
    }

    const style = clsx('limitedField', (!isFirstInput && isError) && 'limitedField_error', blockClassName)

    return (<div className={style}>
        <ErrorInput 
            className={clsx('limitedField__field', className)} 
            value={value}
            onChange={onInput}
            isError={isError}  
            maxLength={max + 1}
            {...fieldParams} 
        />
        <small className={'limitedField__counter'}>Макс. кл. символів: {value.length}/{max}</small>
    </div>)
}

export default LimitedField