import { IdType } from './shared-types';
export enum UserStatus {
    Active = 1, Completed, Canceled
}

export class User {
    constructor(
        public username: string,
        public date = new Date().toDateString(),
        public status = UserStatus.Active,
        public id: IdType = undefined
        
    ) {}
}