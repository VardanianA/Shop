import express from "express";
import { createData, getProducts } from "./controller";

const router = express.Router();

router.get('/', getProducts);
router.post('/create', createData);

export default router;
