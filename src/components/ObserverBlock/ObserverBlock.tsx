import { useEffect } from 'react'
import useObserver from '../../hooks/useObserver'
import './observerBlock.css'

interface IParams {
    onTriggered: () => any
}

function ObserverBlock({ onTriggered }: IParams) {
    const [setRef, entry] = useObserver({})

    useEffect(() => {
        entry?.isIntersecting && onTriggered()
    }, [entry, onTriggered])

    return (<div className={'observer-block'} ref={setRef} />)
}

export default ObserverBlock