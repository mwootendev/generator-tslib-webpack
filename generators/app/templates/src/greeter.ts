export class Greeter {
  private greeting: string;

  constructor(greeting?: string) {
      if (greeting) {
        this.greeting = greeting;
      } else {
        this.greeting = 'Hello';
      }
  }

  public greet(addressee: string): string {
      return `${this.greeting}, ${addressee}`;
  }
}
