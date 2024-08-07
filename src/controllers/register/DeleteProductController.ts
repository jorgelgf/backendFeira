import { Request, Response } from "express";
import { DeleteProductService } from "../../services/register/DeleteProductService";

export class DeleteProductController {
  async handle(req: Request, res: Response) {
    console.log("DELETE : DELETE PRODUCT");

    const deleteProductService = new DeleteProductService();
    const { id } = req.query as any;
    if (!id) {
      return res.status(400).json({ error: "Id do produto não encontrado" });
    }
    const registerDelete = await deleteProductService.execute(id);
    return res.json(registerDelete);
  }
}
