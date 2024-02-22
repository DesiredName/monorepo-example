export interface User {
    ID: string;
    Name: string;
}

export class UserEntry implements User {
    private readonly id: string;
    private readonly name: string;

    constructor({ id, name }: { id: string; name: string }) {
        this.id = id;
        this.name = name;
    }

    get ID(): string {
        return this.id;
    }

    get Name(): string {
        return this.name;
    }
}
