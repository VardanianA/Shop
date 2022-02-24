import express from "express";
import { createData, deleteData, getData, updateData } from "./controller.js";

const router = express.Router();

router.get('/', getData);
// Get category by id (id param) return category + product
router.post('/create', createData);
router.delete('/delete/:id', deleteData);
router.put('/update/:id', updateData);

export default router;