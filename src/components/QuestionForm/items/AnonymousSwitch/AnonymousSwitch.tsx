import Switch from '../../../Switch/Switch'
import './anonymousSwitch.css'

interface IParams {
    initValue: boolean,
    onToggle: (state: boolean) => any
}

function AnonymousSwitch(params: IParams) {
    return (<div className={'anonymousSwitch'}>
        <span>Анонімно</span>
        <Switch {...params} />
    </div>)
}

export default AnonymousSwitch