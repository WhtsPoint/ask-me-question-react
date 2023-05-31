import QuestionTextArea from './items/QuestionTextarea/QuestionTextarea'
import NameInput from './items/NameInput/NameInput'
import MailInput from './items/MailInput/MileInput'
import AnonymousSwitch from './items/AnonymousSwitch/AnonymousSwitch'
import useQuestionFormValidation from '../../hooks/useQuestionFormValidation'
import EnableContainer from '../EnableContainer/EnableContainer'
import { useCreateMutation } from '../../api/Question.api'
import { useState } from 'react'
import './questionForm.css'

function QuestionForm() {
    const [question, setQuestion] = useState<string>('')
    const [name, setName] = useState<string>('')
    const [mail, setMail] = useState<string>('')
    const [isAnonymous, setIsAnonymous] = useState<boolean>(false)

    const [isQuestionValid, isNameValid, isMailValid, isAllValid] = useQuestionFormValidation({ question, isAnonymous, name, mail })
    const [send, { isLoading }] = useCreateMutation()

    const onButtonClicked = () => send({
        message: question, 
        isAnonymous, 
        ...(!isAnonymous ? { name, mail } : {})
    }).then(() => alert('Ваше питання успішно відправлено'))

    return (<EnableContainer isEnable={!isLoading}>
        <div className={'questionForm'}>
            <QuestionTextArea value={question} isError={!isQuestionValid} onChange={setQuestion} />
            <EnableContainer isEnable={!isAnonymous}>
                <div className={'questionForm__personal'}>
                    <NameInput value={name} isError={!isNameValid} onChange={setName} />
                    <MailInput value={mail} isError={!isMailValid} onChange={setMail} />
                </div>
            </EnableContainer>
            <AnonymousSwitch initValue={isAnonymous} onToggle={setIsAnonymous} />
            <EnableContainer isEnable={isAllValid}>
                <button className={'customButton questionForm__send'} onClick={onButtonClicked}>Відправити</button>
            </EnableContainer>
        </div>
    </EnableContainer>)
}

export default QuestionForm