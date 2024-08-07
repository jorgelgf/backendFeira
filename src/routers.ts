import { Router, NextFunction, Request, Response } from "express";
import {
  CreateProductController,
  CreateUserController,
  DetailProductsController,
  LoginController,
  DeleteProductController,
  UpdateProductController,
} from "./controllers";
import { isAuthenticated } from "./middlewares/isAuth";

export const router = Router();

// Registro

//-- Rotas de Usuário
//criando usuário
router.post("/user", new CreateUserController().handle);
//login usuário
router.post("/login", new LoginController().handle);

//-- Rotas registro
//criando produto
router.post("/products", isAuthenticated, new CreateProductController().handle);
//listando produtos
router.get("/list", isAuthenticated, new DetailProductsController().handle);
//deletar produto
router.post("/delete", isAuthenticated, new DeleteProductController().handle);
//atualizar produto

router.patch("/update", isAuthenticated, new UpdateProductController().handle);

router.get("/", (req: Request, res: Response, next: NextFunction) => {
  console.log("Servidor online");

  return res.json({ ok: "Servidor online!" });
});
