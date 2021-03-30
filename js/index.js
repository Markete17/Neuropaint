/*Slider Menu*/
$(function() {
    function slideMenu() {
        var activeState = $("#menu-container .menu-list").hasClass("active");
        $("#menu-container .menu-list").animate({ left: activeState ? "0%" : "-100%" }, 400);
    }
    $("#menu-wrapper").click(function(event) {
        event.stopPropagation();
        $("#hamburger-menu").toggleClass("open");
        $("#menu-container .menu-list").toggleClass("active");
        slideMenu();

        $("body").toggleClass("overflow-hidden");
    });

    $(".menu-list").find(".accordion-toggle").click(function() {
        $(this).next().toggleClass("open").slideToggle("fast");
        $(this).toggleClass("active-tab").find(".menu-link").toggleClass("active");

        $(".menu-list .accordion-content").not($(this).next()).slideUp("fast").removeClass("open");
        $(".menu-list .accordion-toggle").not(jQuery(this)).removeClass("active-tab").find(".menu-link").removeClass("active");
    });
});
var example = {
    data: [
        '<h1>Example 1</h1>',
        '<h1>Example 2</h1>',
        '<h1>Example 3</h1>',
        '<h1>Example 4</h1>'
    ],
    init: function(number) {
        cm.setValue(example.data[number]);
    }
}

function saveAsFile(filename, data) {
    var blob = new Blob([data], { type: 'text/html' });

    if (window.navigator.msSaveOrOpenBlob) {
        window.navigator.msSaveBlob(blob, filename);

        return;
    }

    var elem = window.document.createElement('a');
    elem.href = window.URL.createObjectURL(blob);
    elem.download = filename;
    document.body.appendChild(elem);

    elem.click();
    document.body.removeChild(elem);

    window.URL.revokeObjectURL(blob);
}

/**
 * Keyboard shortcut for Hide or show Editor and Preview window
 * CTRL+Shift+S = Save File
 */
document.onkeyup = function(e) {
    e.preventDefault();

    var theChar = null;
    if (e.key !== undefined) {
        theChar = e.key.toUpperCase();
    }
    if (!theChar) {
        // Fallback to old standard
        theChar = String.fromCharCode(e.key).toUpperCase();
    }
}

window.onbeforeunload = function(e) {
    if (e) {
        // Cancel the event
        e.preventDefault();
        // Chrome requires returnValue to be set
        e.returnValue = '';
    }

    return 'Are you sure want to exit?';
};
