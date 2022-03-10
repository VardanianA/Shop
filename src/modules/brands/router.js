import express from "express";
import { BrandReq } from "./controller";

const router = express.Router();

router.get('/', BrandReq.getBrand);
router.post('/create', BrandReq.createBrand);
router.delete('/delete/:id', BrandReq.deleteBrand);
router.put('/update/:id', BrandReq.updateBrand);

export default router;
