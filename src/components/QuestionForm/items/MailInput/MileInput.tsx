import ErrorInput from "../../../ErrorInput/ErrorInput";
import '../styles/questionFormInput.css'
import '../../../../styles/customInput.css'

interface IParams {
    value: string,
    isError: boolean,
    onChange: (value: string) => any
}

function MailInput(params: IParams) {
    return (<ErrorInput
        component={'input'}
        className={'questionFormInput customInput'} 
        placeholder={'Введіть вашу пошту'}
        {...params}
    />)    
}

export default MailInput