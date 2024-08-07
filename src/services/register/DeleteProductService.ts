import { prismaClient } from "../../prisma";

export class DeleteProductService {
  async execute(id: string) {
    let deleteProduct;
    try {
      deleteProduct = await prismaClient.product.delete({
        where: { id: id },
      });
    } catch (error) {
      console.warn("Não encontrado produto");
      return { error: "Não encontrado produto" };
    }

    return { deleteProduct };
  }
}
