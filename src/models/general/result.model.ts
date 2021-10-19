import ErrorClass from './error.model';

export default class ResultClass<T> {
    public Error: ErrorClass
    public content: T
    public result?: boolean
}