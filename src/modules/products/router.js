import express from "express";
import { createData, deleteData, getProductByBrand, getProductByCategory, getProductById, getProducts, ProductController } from "./controller";

const router = express.Router();

// router.get('/', getProducts);
// router.get('/brand', getProductByBrand);
// router.get('/category', getProductByCategory);
// router.get('/:id', getProductById);

// router.post('/create', createData);
// router.delete('/delete/:id', deleteData);

router.get('/', ProductController.getData)
router.get('/brand', ProductController.getDataByBrand)
router.post('/create', ProductController.createData)
router.delete('/delete/:id', ProductController.deleteData)
router.put('/update/:id', ProductController.updateData)

export default router;
