import TValidator from '../types/TValidator'

interface IPrams {
    min?: number,
    max?: number
}

function size({ min, max }: IPrams): TValidator {
    return ({ length }: string) => ((min && length < min) || (max && length > max)) === false 
}

export default size
