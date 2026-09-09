"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*class to create Tasks */
class Todo {
    id;
    description;
    status;
    createdAt;
    updatedAt;
    constructor(id, description, status, createdAt, updateAt) {
        this.id = id;
        this.description = description;
        this.status = status;
        this.createdAt = createdAt;
        this.updatedAt = updateAt;
    }
    getDescripton(desc) {
        return this.description;
    }
    setDescripton(desc) {
        this.description = desc;
    }
    getTaskId() {
        return this.id;
    }
    getDateCreated() {
        return this.createdAt;
    }
    getDateLastUpdated() {
        return this.updatedAt;
    }
}
exports.default = Todo;
//# sourceMappingURL=Todo.js.map