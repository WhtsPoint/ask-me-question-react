import { IComponentChildren } from '../../interfaces/IChildren'
import { clsx } from 'clsx'
import './enableContainer.css'

interface IParams extends IComponentChildren {
    isEnable: boolean
}

function EnableContainer({ children, isEnable }: IParams) {
    return (<div className={clsx(!isEnable && 'enableContainer_locked')}>{children}</div>)
}

export default EnableContainer