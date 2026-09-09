import TODO from "../interfaces/Todo";
declare class TodoList {
    todos: TODO[];
    constructor(todos?: TODO[]);
    add(description: string): void;
    help(): void;
    list(): void;
}
export default TodoList;
//# sourceMappingURL=TodoList.d.ts.map