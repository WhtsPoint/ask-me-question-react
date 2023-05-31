import questionFormConfig from "../../../../configs/questionFormConfig";
import LimitedField from "../../../LimitedField/LimitedField";
import '../styles/questionFormInput.css'
import '../../../../styles/customInput.css'

interface IParams {
    value: string,
    isError: boolean,
    onChange: (value: string) => any
}

function NameInput(params: IParams) {
    return (<LimitedField
        component={'input'}
        max={questionFormConfig.name.maxLength} 
        className={'questionFormInput customInput'} 
        placeholder={'Введіть ваше ім\'я'}
        {...params}
    />)    
}

export default NameInput