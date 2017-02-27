export class Greeter {
    private greeting: string;

    constructor(greeting?: string) {
        if (greeting) {
            this.greeting = greeting;
        } else {
            this.greeting = 'Hello';
        }
    }

    public greet(addressee: string) {
        console.log(`${this.greeting}, ${addressee}`);
    }
}

