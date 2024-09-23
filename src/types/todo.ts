

export interface ITodo {
    mno? : string,
    title : string,
    writer : string,
    dueDate : string
}

export interface IPageResponse { // 재사용성을 높이기 위해 제네릭을 사용할수도 있다.
    content : ITodo[],
    totalElements : number,
    number : number,
    first : boolean,
    last : boolean,
    size : number,

}