(async () => {
    await
    loadCSS("assets/css/loading.css");
    loadCSS("assets/css/style.css");
    loadCSS("assets/css/reset.css");
    loadCSS("https://cdn.jsdelivr.net/npm/font-awesome@4.7.0/css/font-awesome.min.css");

    await
    loadJS("https://cdn.jsdelivr.net/npm/ace-builds@1.4.12/src-min-noconflict/ace.min.js");
    loadJS("https://cdn.jsdelivr.net/npm/ace-builds@1.4.12/src-min-noconflict/ext-language_tools.js");
    loadJS("https://cdn.jsdelivr.net/npm/ace-builds@1.4.12/src-min-noconflict/ext-themelist.js");

    await
    loadJS("https://cdnjs.cloudflare.com/ajax/libs/js-beautify/1.13.0/beautify.min.js");
    loadJS("https://cdnjs.cloudflare.com/ajax/libs/js-beautify/1.13.0/beautify-css.min.js");
    loadJS("https://cdnjs.cloudflare.com/ajax/libs/js-beautify/1.13.0/beautify-html.min.js");

    await loadJS("assets/js/content.js");
    await loadJS("assets/js/script.js");
})();