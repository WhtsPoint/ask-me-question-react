import ObserverBlock from '../ObserverBlock/ObserverBlock'
import QuestionList from './QuestionList/QuestionList'
import LoadingCircle from '../LoadingCircle/LoadingCircle'
import useQuestionHistory from '../../hooks/useQuestionHistory'
import questionHistoryConfig from '../../configs/questionHistoryConfig'
import './questionHistory.css'

function QuestionHistory() {
    const [questions, next, isLoading] = useQuestionHistory({ initPage: 1, count: questionHistoryConfig.pageLength })

    return (<div className='questionHistory'>
        {!isLoading ? <QuestionList questions={questions} /> : <LoadingCircle />}
        <ObserverBlock onTriggered={next} />
    </div>)
}

export default QuestionHistory