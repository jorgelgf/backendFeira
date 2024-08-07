import { prismaClient } from "../../prisma";

interface UpdateProductProps {
  price: string;
  product: string;
  id: string;
}
export class UpdateProductService {
  async execute({ product, price, id }: UpdateProductProps) {
    if (!product) {
      throw new Error("Está faltando informações");
    }
    try {
      const productExist = await prismaClient.product.findFirst({
        where: {
          product: product,
        },
      });
      if (!productExist) console.warn("Não encontrado");

      const updateProduct = await prismaClient.product.update({
        where: {
          id: id,
        },
        data: {
          product: product,
          price: price,
        },
      });
      return updateProduct;
    } catch (error) {
      console.warn("Está faltando informações");
    }
  }
}

/*

  let updateProduct;
    try {
      updateProduct = prismaClient.product.update({
        where: {
          product: product,
        },
        data: {
          price: price,
          product: product,
        },
      });
    } catch (error) {
      console.warn("Ocorreu um erro interno! ", error);
    }

*/
