import express from "express";
import { createData, deleteData, getData } from "./controller";

const router = express.Router();

router.get('/', getData);
router.post('/create', createData);
router.delete('/delete/:id', deleteData);

export default router;
