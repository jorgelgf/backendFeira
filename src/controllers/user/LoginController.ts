import { Request, Response } from "express";
import { LoginService } from "../../services/user/LoginService";

export class LoginController {
  async handle(req: Request, res: Response) {
    console.log("POST : LOGIN");
    const { email, password } = req.body;
    const createUserService = new LoginService();
    const login = await createUserService.execute({
      email,
      password,
    });
    return res.json(login);
  }
}
