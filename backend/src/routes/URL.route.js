import { Router } from "express";
import {
  shortURL,
  redirectURL,
  totalClicks,
  clickHistory,
} from "../controllers/URL.controller.js";
import { saveClick } from "../middleware/saveClick.middleware.js";

const URLRouter = Router();

URLRouter.get("/", (req, res) => res.send("Welcome to URL Shortener!"));
URLRouter.get("/:shortURL/", saveClick, redirectURL);
URLRouter.post("/shortURL", shortURL);
URLRouter.get("/:shortURL/totalClicks", totalClicks);
URLRouter.get("/:shortURL/clickHistory", clickHistory);

export { URLRouter };
