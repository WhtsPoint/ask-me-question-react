interface IChildren<T> {
    children: T
}

interface IComponentChildren extends IChildren<JSX.Element> {}

export default IChildren

export type { IComponentChildren }