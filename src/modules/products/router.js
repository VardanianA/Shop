import express from "express";
import { checkBrandIdQueryValidator, checkCategoryIdQueryValidator, checkIdQueryValidator } from "../../validation/validation";
import { createData, deleteData, getProducts, updateData, getProductByBrand, getProductByCategory, getProductById, getProductCount } from "./controller";

const router = express.Router();

router.get('/', getProducts);
router.get('/count', getProductCount);
router.get('/brand', checkBrandIdQueryValidator, getProductByBrand);
router.get('/category', checkCategoryIdQueryValidator, getProductByCategory);
router.get('/id', checkIdQueryValidator, getProductById);

router.post('/create', createData);
router.delete('/delete/:id', deleteData);
router.put('/update/:id', updateData);

export default router;
