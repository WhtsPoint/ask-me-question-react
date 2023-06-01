import QuestionTextArea from './items/QuestionTextarea/QuestionTextarea'
import NameInput from './items/NameInput/NameInput'
import MailInput from './items/MailInput/MileInput'
import AnonymousSwitch from './items/AnonymousSwitch/AnonymousSwitch'
import useQuestionFormValidation from '../../hooks/useQuestionFormValidation'
import EnableContainer from '../EnableContainer/EnableContainer'
import { useState } from 'react'
import './questionForm.css'
import useSendQuestionForm from '../../hooks/useSendQuestionForm'

function QuestionForm() {
    const [question, setQuestion] = useState<string>('')
    const [name, setName] = useState<string>('')
    const [mail, setMail] = useState<string>('')
    const [isAnonymous, setIsAnonymous] = useState<boolean>(false)

    const formData = { question, isAnonymous, name, mail }
    const [isQuestionValid, isNameValid, isMailValid, isAllValid] = useQuestionFormValidation(formData)
    const [send, isLoading] = useSendQuestionForm(formData)

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
                <button className={'customButton questionForm__send'} onClick={send}>Відправити</button>
            </EnableContainer>
        </div>
    </EnableContainer>)
}

export default QuestionForm