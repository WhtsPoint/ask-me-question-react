import questionFormConfig from '../configs/questionFormConfig'
import {regexEmail} from '../utils/regex'
import size from '../utils/size'
import validate from '../utils/validate'

const { question: questionSettings, name: nameSettings, mail: mailSettings } = questionFormConfig

type TReturn = [boolean, boolean, boolean, boolean]

interface IPrams {
    question: string,
    isAnonymous: boolean,
    name: string,
    mail: string
}

function useQuestionFormValidation({ question, isAnonymous, name, mail }: IPrams) : TReturn {
    const isQuestionValid = validate(question, size({ min: questionSettings.minLength, max: questionSettings.maxLength }))
    const isNameValid = validate(name, size({ min: nameSettings.minLength, max: nameSettings.maxLength })) || isAnonymous
    const isMailValid = validate(mail, regexEmail, size({ max: mailSettings.maxLength })) || isAnonymous

    return [
        isQuestionValid,
        isNameValid,
        isMailValid,
        isQuestionValid && isNameValid && isMailValid  
    ];
}

export default useQuestionFormValidation