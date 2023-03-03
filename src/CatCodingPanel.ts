import * as vscode from "vscode";

const cats = {
  codingCat: "https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif",
  compilingCat: "https://media.giphy.com/media/mlvseq9yvZhba/giphy.gif",
};

export function getWebviewContent(cat: keyof typeof cats) {
  return `<!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Cat Coding</title>
      </head>
      <body>
        <img src ="${cats[cat]}">
      </body>‰
      </html>`;
}