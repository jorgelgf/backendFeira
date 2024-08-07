import { Request, Response } from "express";
import { DetailProductsService } from "../../services/register/DetailProductsService";
export class DetailProductsController {
  async handle(req: Request, res: Response) {
    console.log("POST : DETAIL PRODUCT");
    const detailProductsService = new DetailProductsService();
    const detail = await detailProductsService.execute();

    return res.json(detail);
  }
}
