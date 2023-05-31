import { motion } from 'framer-motion'
import { useState } from 'react'
import './switch.css'

interface IParams {
    initValue: boolean,
    onToggle?: (isToggle: boolean) => any
}

function Switch({ initValue, onToggle } : IParams) {
    const [isToggle, setIsToggle] = useState<boolean>(initValue)

    const getLeftByToggle = (value: boolean) => value ? '100%' : '0%'
    const inlist = { marginLeft : getLeftByToggle(initValue) }
    const animate = { marginLeft : getLeftByToggle(isToggle) }

    const onClick = () => {
        onToggle?.(!isToggle)
        setIsToggle(!isToggle)
    }

    return (<button onClick={onClick} className={'switch'}>
        <motion.div className={'switch__indicator'} inlist={inlist} animate={animate} />
    </button>)
}

export default Switch