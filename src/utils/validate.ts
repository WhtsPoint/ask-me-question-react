import TValidator from '../types/TValidator'

function validate(value: string, ...validators: TValidator[]): boolean {
    return validators.map(validator => validator(value)).every(isValid => isValid)
}

export default validate