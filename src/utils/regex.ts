import TValidator from '../types/TValidator'

function regex(pattern: RegExp): TValidator {
    return (value: string) => pattern.test(value)
}

const regexEmail = regex(/^[^@\s]+@[^\.@\s]+\.[^\.@\s]+$/)

export default regex

export {regexEmail}