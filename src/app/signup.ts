export class Signup {
  constructor(
    public firstName: string,
    public lastName: string,
    public userName: string,
    public password: string,
    public country?: string,
    public DOB?: Date
  ) {}
}
