interface User {
    id: number;
    name: string;
    email: string;
}

const db: User[] = [
    {
        id: 1,
        name: 'John Doe',
        email: 'emaildealgume@gmail.com',
    }
];

export class UsersServices {
    private db: User[] = db;

    getUsers() {
        return this.db;
    }

    createUser(name: string, email: string) {
        const id = this.db.length + 1;
        const user: User = {
            id,
            name,
            email,
        };
        this.db.push(user);
        return user;
    }

    updateUser(id: number, name: string, email: string) {
        const user = this.db.find((u) => u.id === id);
        if (user) {
            user.name = name;
            user.email = email;
        }
        return this.db;
    }

    deleteUser(id: number) {
        const index = this.db.findIndex((user) => user.id === id);
        if (index !== -1) {
            this.db.splice(index, 1);
        }
        return this.db;
    }
}
