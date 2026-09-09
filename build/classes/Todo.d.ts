import TODO from "../interfaces/Todo";
declare class Todo implements TODO {
    id: number;
    description: string;
    status: string;
    createdAt: string;
    updatedAt: string;
    constructor(id: number, description: string, status: string, createdAt: string, updateAt: string);
    getDescripton(desc: string): string;
    setDescripton(desc: string): void;
    getTaskId(): number;
    getDateCreated(): string;
    getDateLastUpdated(): string;
}
export default Todo;
//# sourceMappingURL=Todo.d.ts.map