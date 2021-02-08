async function loader() {
    await loadCSS("css/style.css");
    await loadCSS("css/common.css");
    await loadCSS("https://cdn.bootcdn.net/ajax/libs/element-ui/2.15.0/theme-chalk/index.min.css");

    await loadJS("https://cdn.bootcss.com/ace/1.4.9/ace.min.js");
    await loadJS("https://cdn.bootcss.com/ace/1.4.9/ext-beautify.min.js");
    await loadJS("https://cdn.bootcss.com/ace/1.4.9/ext-language_tools.min.js");
    await loadJS("https://cdn.bootcss.com/ace/1.4.9/mode-html.min.js");
    await loadJS("https://cdn.bootcss.com/ace/1.4.9/theme-clouds.min.js");

    await loadJS("https://cdnjs.cloudflare.com/ajax/libs/js-beautify/1.13.0/beautify.min.js");
    await loadJS("https://cdnjs.cloudflare.com/ajax/libs/js-beautify/1.13.0/beautify-css.min.js");
    await loadJS("https://cdnjs.cloudflare.com/ajax/libs/js-beautify/1.13.0/beautify-html.min.js");

    await loadJS("https://cdn.bootcdn.net/ajax/libs/vue/2.6.12/vue.min.js");
    await loadJS("https://cdn.bootcdn.net/ajax/libs/element-ui/2.15.0/index.min.js");
    await loadJS("https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.min.js");
    await loadJS("js/variable.js");
    await loadJS("js/component.js");
    await loadJS("js/editor.js");
    await loadJS("js/script.js");
}

loader();