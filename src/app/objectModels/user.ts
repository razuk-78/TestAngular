import { Person } from './person';
import { ILogIn } from './ilog-in';
import { IRegister } from './iregister';

export class User extends Person implements ILogIn, IRegister {
    emailAddress: string;
    userName: string;
    password: string;
    register(): void {
        throw new Error("Method not implemented.");
    }
}
