vm = new Vue({
    el: "#app",
    data: {
        launch_color: "primary",
        console_output: [],
        setting_visible: false,
        auto_warp: false,
        font_size: 17,
        selectCount: 0,
        selectCountSpc: 0,
        textCount: 0,
        textCountSpc: 0
    },
    watch: {
        font_size: () => {
            localStorage.setItem("FontSize", vm.font_size);
            editor.setFontSize(vm.font_size);
        },
        auto_warp: () => {
            localStorage.setItem("AutoWarp", vm.auto_warp);
            editor.setOption("wrap", vm.auto_warp ? "free" : "none");
        }
    }
});

$(() => {
    $(".right").prepend(frameIns);

    var FontSizeStorage = localStorage.getItem("FontSize");
    var AutoWarpStorage = localStorage.getItem("AutoWarp");

    setEditor();
    setContent();
    launchCode();

    if (FontSizeStorage != null) vm.font_size = FontSizeStorage;
    if (AutoWarpStorage != null) vm.auto_warp = AutoWarpStorage;

    vm.textCount = countText();
    vm.textCountSpc = countText(true);

    vm.selectCount = countSelect();
    vm.selectCountSpc = countSelect(true);
});

$(document).keydown(e => {
    if (e.which == 120 && !ctrlKey())
        launchCode();
    if (e.which == 115 && !ctrlKey())
        formatCode();
    if (e.which == 83 && ctrlKey())
        window.event.preventDefault();
});

$("#console").mouseup(() => {
    if (getSelectedText() == "") {
        commandLine.focus();
        setTimeout(function () {
            document.getElementById("console").scrollIntoView(true);
        }, 300);
    }
});

function commandLineKeydown(o) {
    var keyCode = window.event.keyCode || window.event.which || window.event.charCode;

    if (keyCode == 13 && commandLine.value && !ctrlKey()) {
        window.event.preventDefault();
        lastCommand = commandLine.value;
        handleConsole("commanded", lastCommand);
        codeFrame.window.__handleCommand(lastCommand);
        commandLine.value = "";
        commandLine.focus();
    }
    if (keyCode == 13 && ctrlKey())
        commandLine.value += "\n";
    if (keyCode == 38 && !ctrlKey())
        commandLine.value = lastCommand;

    scrollOutput();
    o.style.height = o.scrollTop + o.scrollHeight + "px";
}