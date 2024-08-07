import { prismaClient } from "../../prisma";

export class DetailProductsService {
  async execute() {
    const data = await prismaClient.product.findMany({
      select: {
        id: true,
        product: true,
        price: true,
      },
    });
    if (!data) {
      throw new Error("Registros não listados");
    }
    return data;
  }
}
