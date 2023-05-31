import IQuestion from '../../../../interfaces/IQuestion'
import { getFullDate } from '../../../../utils/date'
import './question.css'

interface IParams {
    question: Omit<IQuestion, 'id'>
}

function Question({ question }: IParams) {
    const {name, message, mail, isAnonymous, creationTime} = question

    return (<div className={'question'}>
         <span className='question__author'>   
            <b className={'question__name'}>{!isAnonymous ? name : 'Анонім'}</b>&nbsp;
            {!isAnonymous && <i className={'question__mail'}>({mail})</i>}
        </span>
        <span className={'question__message'}>{message}</span>
        <small className={'question__creationTime'}>{getFullDate(creationTime)}</small>
    </div>)
}

export default Question