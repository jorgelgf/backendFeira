import { Request, Response } from "express";
import { UpdateProductService } from "../../services/register/UpdateProductService";

export class UpdateProductController {
  async handle(req: Request, res: Response) {
    console.log("PATCH : UPDATE PRODUCT");
    const { product, price, id } = req.query as any;
    const createProductService = new UpdateProductService();
    const material = await createProductService.execute({
      product,
      price,
      id,
    });
    return res.json(material);
  }
}
