import { useCreateMutation } from '../api/Question.api'

type TReturn = [() => any, boolean]

interface IParams {
    question: string,
    isAnonymous: boolean,
    name: string,
    mail: string,
}

function useSendQuestionForm(params: IParams): TReturn {
    const { question, isAnonymous, name, mail } = params

    const [fetch, { isLoading }] = useCreateMutation()

    const requestBody = {
        message: question, 
        isAnonymous, 
        ...(!isAnonymous ? { name, mail: mail !== '' ? mail : undefined } : {})
    }

    const send = async () => {
       const result = await fetch(requestBody)
       alert('error' in result ? 'Не вдалось відправити питання' : 'Питання успішно відправлено')
    }

    return [send, isLoading]
}

export default useSendQuestionForm