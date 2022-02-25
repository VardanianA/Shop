import express from "express";
import { getData, createData } from "./controller";

const router = express.Router();

router.get('/', getData);
router.post('/create', createData);

export default router;