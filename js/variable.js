var doc, vm, editor, primaryConsole = "", lastCommand = "", qwq = false;
const insertion = `<script>
// Code injected by tiy.xecades.xyz
console.output = (type, msg) => {
    parent.window.handleConsole(type, msg);
}

console.log = msg => console.output("default", msg);
console.warn = msg => console.output("warn", msg);
console.error = msg => console.output("error", msg);
console.debug = msg => console.output("default", msg);
console.info = msg => console.output("info", msg);

window.onerror = (msg, url, row, col) => {
    if (url == "")
        console.error(\`\${msg}  in line \${row}:\${col}\`);
    else
        console.error(\`in \${url}<br>\${msg}  in line \${row}:\${col}\`);
    return true;
}

function __handleCommand(cmd) {
    cmd = \`try{console.output("return",\${cmd})}catch(e){console.error(e)}\`;
    eval(cmd);
}
</script>`;

const commandLineIns = `<div class="item command"><span class="icon"></span><textarea id="commandLine" class="text" onkeydown="commandLineKeydown(this)"></textarea></div>`;
const frameIns = `<iframe id="frame" name="codeFrame" frameborder="0"></iframe>`;

const pre = `<!DOCTYPE html>
<html lang="zh-cn">

<head>
    <meta charset="utf-8">
    <title>Document</title>
</head>

<body>
    
</body>

</html>`;