function launchCode() {
    vm.launch_color = "primary";
    primaryConsole = "";
    $("#output").html(primaryConsole + commandLineIns);

    $("#frame").remove();
    $(".right").prepend("<iframe id=\"frame\" name=\"codeFrame\" frameborder=\"0\"></iframe>");

    doc = document ? frame.contentWindow.document : frame.contentDocument;
    doc.open();
    doc.write(insertion + editor.getValue());
    doc.close();
    title(doc.title + " | TIY");
    editor.focus();
}

function openSelf() {
    window.open(window.location.href, "_blank");
}

function formatCode() {
    editor.setValue(html_beautify(editor.getValue()));
    editor.clearSelection();
    editor.focus();
}

function loadPageVar(sVar) {
    return decodeURI(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURI(sVar).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
}

function handleConsole(type, msg) {
    primaryConsole += `<div class="item ${type}"><span class="icon"></span><span class="text">${msg}</span></div>`;
    $("#output").html(primaryConsole + commandLineIns);
    scrollOutput();
}

function ctrlKey() {
    return window.event.ctrlKey || window.event.metaKey;
}

function scrollOutput() {
    $('#output').scrollTop($('#output').prop("scrollHeight"));
}

function getSelectedText() {
    if (document.selection)
        return document.selection.createRange().text;
    return document.getSelection();
}

function countText(skipSpace = false) {
    var str = editor.getValue();
    if (!str) return 0;
    if (skipSpace && str.match(/[^\s]/g)) return str.match(/[^\s]/g).length;
    return str.length;
}

function countSelect(skipSpace = false) {
    var str = editor.getSelectedText();
    if (!str) return 0;
    if (skipSpace && str.match(/[^\s]/g)) return str.match(/[^\s]/g).length;
    return str.length;
}