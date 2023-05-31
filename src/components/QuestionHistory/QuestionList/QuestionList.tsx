import IQuestion from "../../../interfaces/IQuestion";
import Question from "./Question/Question";
import './questionList.css'

interface IParams {
    questions: IQuestion[]
}

function QuestionList({ questions }: IParams) {
    return (<div className={'questionList'}>
        {questions.map(({id, ...question}) => <Question key={id} question={question} />)}
    </div>)
}

export default QuestionList