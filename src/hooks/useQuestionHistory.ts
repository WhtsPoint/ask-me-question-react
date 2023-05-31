import { useState } from 'react'
import { useLazyGetListQuery } from '../api/Question.api'
import IQuestion from '../interfaces/IQuestion'
 
interface IParams {
    initPage: number,
    count: number 
}

//TODO: Fix bug with +1 request after permission to fetch is locked 
//TODO: Refactor and make scroll pagination data query more abstract

function useQuestionHistory({ initPage, count }: IParams): [IQuestion[], () => any, boolean] {
    const [page, setPage] = useState<number>(initPage)
    const [questions, setQuestions] = useState<IQuestion[]>([])
    const [loadNext, { isLoading, isFetching }] = useLazyGetListQuery()
    const [isLocked, setIsLocked] = useState<boolean>(false)

    const fetchNext = () => {
        if (isLoading || isFetching || isLocked) return 
       
        const nextPage = page + 1
        setPage(nextPage)
       
        loadNext({ page, count }).then(({ data }) => {
            if (data) {
                if (data.length === 0) return setIsLocked(true)
               setQuestions(prevQuestions => {
                    const prevQuestionsId = prevQuestions.map(({ id }) => id)
                    return [...prevQuestions, ...data.filter(({ id }) => !prevQuestionsId.includes(id))]
                })
            }
        })
    }

    return [questions, fetchNext, isLoading]
}

export default useQuestionHistory