import express from "express";
import { shouldBeAdmin, shouldBeLoggedIn } from "../controllers/test.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";
import { shouldBeAdminToken } from "../middleware/shouldBeAdminToken.js"

const router = express.Router()

router.get("/should-be-logged-in", verifyToken, shouldBeLoggedIn);

router.get("/should-be-admin", shouldBeAdminToken, shouldBeAdmin);

export default router;






