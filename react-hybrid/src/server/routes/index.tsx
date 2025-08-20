import { Router, Request, Response } from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

import { renderToString } from "react-dom/server";
import App from "../../client/App";
import React from "react";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = Router();

router.get("/", (_: Request, res: Response) => {
  const templatePath = path.join(__dirname, "../../../public", "index.html");
  const template = fs.readFileSync(templatePath, "utf-8");

  const renderedApp = renderToString(<App />);

  const renderedHTMLWithInitialData = template.replace(
    "<!--${INIT_DATA_AREA}-->",
    /*html*/ `
    <script>
      window.__INITIAL_DATA__ = {
        movies: JSON.stringify([])
      }
    </script>
  `
  );
  const renderedHTML = renderedHTMLWithInitialData.replace(
    "<!--${MOVIE_ITEMS_PLACEHOLDER}-->",
    renderedApp
  );

  res.send(renderedHTML);
});

export default router;
