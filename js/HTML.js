function loadJS(url) {
    return new Promise(resolve => {
        var script = document.createElement('script');
        script.src = url;
        script.onload = resolve;
        document.getElementsByTagName("body")[0].appendChild(script);
    });
}

function loadCSS(url) {
    return new Promise(resolve => {
        var link = document.createElement('link');
        link.rel = "stylesheet";
        link.href = url;
        link.onload = resolve;
        document.getElementsByTagName("head")[0].appendChild(link);
    });
}

function title(title) {
    if (title)
        document.getElementsByTagName("title")[0].innerHTML = title;
    return document.getElementsByTagName("title")[0].innerHTML;
}