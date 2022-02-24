import express from "express";
import { createData, deleteData, getData, updateData } from "./controller.js";

const router = express.Router();

router.get('/', getData);
router.post('/create', createData);
router.delete('/delete/:id', deleteData);
router.put('/update/:id', updateData);

export default router;