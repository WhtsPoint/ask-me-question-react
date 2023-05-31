import questionFormConfig from '../../../../configs/questionFormConfig'
import LimitedField from '../../../LimitedField/LimitedField'
import './questionTextarea.css'
import '../../../../styles/customInput.css'

interface IParams {
    value: string,
    isError: boolean,
    onChange: (value: string) => any
}

function QuestionTextArea(params: IParams) {
    return (<LimitedField
        component={'textarea'}
        max={questionFormConfig.question.maxLength} 
        className={'questionTextarea__field customInput'} 
        blockClassName={'questionTextarea'}
        placeholder={'Введіть ваше питання'}
        {...params}
    />)    
}

export default QuestionTextArea