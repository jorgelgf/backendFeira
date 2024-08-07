import { Request, Response } from "express";
import { CreateProductService } from "../../services/register/CreateProductService";

export class CreateProductController {
  async handle(req: Request, res: Response) {
    console.log("POST : CREATE PRODUCT");
    const { product, price } = req.body;
    const createProductService = new CreateProductService();
    const material = await createProductService.execute({
      product,
      price,
    });
    return res.json(material);
  }
}
