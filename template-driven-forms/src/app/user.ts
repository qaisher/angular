export class User {
    constructor(
        public firstName: string,
        public lastName: string,
        public email: string,
        public phone: number,
        public topic: string,
        public shiftPreference: string,
        public subscribe: boolean
    ) {}

}
