import express from "express";
const router = express.Router();
import {
  getProducts,
  createProducts,
  updateProducts,
  deleteProducts,
} from "../controllers/product.controller.js";

router.get("/", getProducts);

router.post("/", createProducts);

router.put("/:id", updateProducts);

router.delete("/:id", deleteProducts);

export default router;
