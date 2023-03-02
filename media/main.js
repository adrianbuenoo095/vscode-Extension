// This script will be run within the webview itself
// It cannot access the main VS Code APIs directly.
(function () {
    debugger;
    const vscode = acquireVsCodeApi();

    const button = document.getElementById('greeting');
    button.innerHTML = "Hello From JavaScript";
}());