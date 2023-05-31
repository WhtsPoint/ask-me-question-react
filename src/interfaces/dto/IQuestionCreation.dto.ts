interface IQuestionCreationDto {
    message: string,
    isAnonymous: boolean,
    name?: string,
    mail?: string
}

export default IQuestionCreationDto