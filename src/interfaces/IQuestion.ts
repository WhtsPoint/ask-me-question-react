interface IQuestion {
    message: string,
    isAnonymous: boolean,
    name?: string,
    mail?: string,
    creationTime: number,
    id: string
}

export default IQuestion