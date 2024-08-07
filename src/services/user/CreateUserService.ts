import { hash } from "bcryptjs";
import { prismaClient } from "../../prisma";

interface UserRequest {
  name: string;
  email: string;
  password: string;
}

export class CreateUserService {
  async execute({ name, email, password }: UserRequest) {
    //verify email
    if (!email || !password || !name) {
      throw new Error("Está faltando informações");
    }
    const userAlreadyExists = await prismaClient.user.findFirst({
      where: {
        email: email.toLowerCase(),
      },
    });

    if (userAlreadyExists) {
      throw new Error("Usuário já existe");
    }

    //create hash
    const passwordHash = await hash(password, 8);
    //create user
    const user = await prismaClient.user.create({
      data: {
        name: name,
        email: email.toLowerCase(),
        password: passwordHash,
      },
      select: {
        id: true,
        email: true,
        name: true,
      },
    });
    return user;
  }
}
