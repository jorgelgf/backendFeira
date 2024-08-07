import { prismaClient } from "../../prisma";

interface ProductProps {
  price: string;
  product: string;
}

export class CreateProductService {
  async execute({ product, price }: ProductProps) {
    if (!product) {
      throw new Error("Está faltando informações");
    }
    const productExists = await prismaClient.product.findFirst({
      where: {
        product: product,
      },
    });

    if (productExists) {
      throw new Error("Produto já existe");
    }

    const register = await prismaClient.product.create({
      data: {
        product: product,
        price: price,
      },
      select: {
        id: true,
        product: true,
        price: true,
      },
    });
    return register;
  }
}
