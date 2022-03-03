import express from "express";
import { createData, deleteData, getProductByBrand, getProductByCategory, getProductById, getProducts } from "./controller";

const router = express.Router();

router.get('/', getProducts);
router.get('/brand', getProductByBrand);
router.get('/category', getProductByCategory);
router.get('/:id', getProductById);

router.post('/create', createData);
router.delete('/delete/:id', deleteData);

export default router;
