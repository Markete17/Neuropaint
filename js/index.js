var zoom = 100;
var svg;
var timeout;
var speed = 100;

$(function() {
    loadInputs();
    loadMenu();
    $("html,body").animate({ scrollTop: 0 }, "slow");
});

function loadInputs() {
    let inputsColor = ['--cubeColor', '--kernelColor', '--denseColor', '--pyramidColor',
        '--arrowColor', '--strokeColor', '--fontColor', '--inputColor',
    ]
    let j = 0;
    for (let i = 1; i < 16; i += 2) {
        loadInputColor(i, inputsColor[j]);
        j++;
    }
    j = 0;
    for (let i = 2; i < 17; i += 2) {
        if (i == 14) {
            loadInput(i, 15, 0)
        } else {
            loadInput(i, 1, 0)
        }
    }

    for (let i = 17; i < 23; i++) {
        if (i < 20) {
            //Rotation Settings
            loadInput(i, 360, -360);
        } else {
            //Distance Settings
            loadInput(i, 250, 0);
        }
    }
    $('input:radio[name=test]').change(function() {
        let example = ($('input:radio[name=test]:checked').val());
        init(example);
    });
    $('input:radio[name=cubedimensions]').change(function() {
        updatePreview(cm.getValue());
    });
    $('input:radio[name=kerneldimensions]').change(function() {
        updatePreview(cm.getValue());
    });
    $('input:radio[name=widthlogs]').change(function() {
        updatePreview(cm.getValue());
    });
    $('input:radio[name=depthlogs]').change(function() {
        updatePreview(cm.getValue());
    });
    $('#increment17').on('mousedown mouseup mouseleave', e => {
        holdClickInc(e, 17);
    });
    $('#decrement17').on('mousedown mouseup mouseleave', e => {
        holdClickDec(e, 17);
    });
    $('#increment18').on('mousedown mouseup mouseleave', e => {
        holdClickInc(e, 18);
    });
    $('#decrement18').on('mousedown mouseup mouseleave', e => {
        holdClickDec(e, 18);
    });
    $('#increment19').on('mousedown mouseup mouseleave', e => {
        holdClickInc(e, 19);
    });
    $('#decrement19').on('mousedown mouseup mouseleave', e => {
        holdClickDec(e, 19);
    });
    $('#increment20').on('mousedown mouseup mouseleave', e => {
        holdClickInc(e, 20);
    });
    $('#decrement20').on('mousedown mouseup mouseleave', e => {
        holdClickDec(e, 20);
    });
    $('#increment21').on('mousedown mouseup mouseleave', e => {
        holdClickInc(e, 21);
    });
    $('#decrement21').on('mousedown mouseup mouseleave', e => {
        holdClickDec(e, 21);
    });
    $('#increment22').on('mousedown mouseup mouseleave', e => {
        holdClickInc(e, 22);
    });
    $('#decrement22').on('mousedown mouseup mouseleave', e => {
        holdClickDec(e, 22);
    });
    $('#increment14').on('mousedown mouseup mouseleave', e => {
        holdClickInc(e, 14);
    });
    $('#decrement14').on('mousedown mouseup mouseleave', e => {
        holdClickDec(e, 14);
    });
}

function holdClickDec(e, number) {
    if (e.type == "mousedown") {
        decrement(number);
    } else {
        stop()
    }
}

function holdClickInc(e, number) {
    if (e.type == "mousedown") {
        increment(number);
    } else {
        stop()
    }
}

function loadInput(number, max, min) {
    var input = document.getElementById('input' + number);
    input.addEventListener('change', function() {
        if (input.value < min) {
            input.value = min;
        }
        if (input.value > max) {
            input.value = max;
        }
        $('#input' + number).val(input.value);
        updatePreview(cm.getValue());
    });
}

function loadInputColor(number, css) {
    var body = document.querySelector('body');
    var input = document.getElementById('input' + number);
    input.addEventListener('change', function() {
        body.style.setProperty(css, input.value);
        $('#input' + number).val(input.value);
        updatePreview(cm.getValue());
    });
}

function loadMenu() {
    /*SLIDER MENU*/
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

    $(".menu-list").find(".accordion-toggle2").click(function() {
        $(this).next().toggleClass("open").slideToggle("fast");
        $(this).toggleClass("active-tab").find(".menu-link").toggleClass("active");

        $(".menu-list .accordion-content2").not($(this).next()).slideUp("fast").removeClass("open");
        $(".menu-list .accordion-toggle2").not(jQuery(this)).removeClass("active-tab").find(".menu-link").removeClass("active");
    });
}

function saveCode() {
    var fname = prompt('Code File', 'neurotronikCode');
    if (fname) {
        saveAsFile(fname, cm.getValue(), 'text/plain');
    }
}

function saveSVG() {
    var fname = prompt('Svg File', 'neurotronikSVG');
    if (fname) {
        let save = svgCode.slice(54, svgCode.length);
        svgCode = '<svg id="svgImage" viewBox=\'' + (x_min) + ' ' + (y_min - 10) + ' ' + (x_max - x_min + 15) + ' ' + (y_max - y_min + 10) + '\' xmlns=\'http://www.w3.org/2000/svg\'>\n' + save;
        saveAsFile(fname, svgCode, 'image/svg+xml');
    }
}

function openFile() {
    $('#openFile').click();

    document.getElementById("openFile").addEventListener('change', function() {
        var fr = new FileReader();
        fr.onload = function() {
            if (fileValidation()) {
                cm.setValue(this.result);
                updatePreview(cm.getValue());
            }
        }
        fr.readAsText(this.files[0]);
    })
}

function fileValidation() {
    var fileInput = document.getElementById('openFile');
    var filePath = fileInput.value;
    if (!filePath.includes(".txt")) {
        alert('Please upload file having extensions .txt only.');
        fileInput.value = '';
        return false;
    }
    return true;
}

function decrement(number) {
    let input = $('#input' + number);
    let n1 = parseFloat(input.val());
    //Size
    if (number == 14 || number == 20 || number == 21 || number == 22) {
        timeout = setTimeout(() => {
            decrement(number);
        }, speed);
        let result = parseFloat(n1 - 1);
        if (result > 0) {
            $('#input' + number).val(result.toFixed(0));
        } else {
            $('#input' + number).val(0);
        }
    } else if (number == 17 || number == 18 || number == 19) {
        timeout = setTimeout(() => {
            decrement(number);
        }, speed);
        let result = parseFloat(n1 - 1);
        if (result > -360) {
            $('#input' + number).val(result.toFixed(0));
        } else {
            $('#input' + number).val(-360);
        }
    } else {
        let result = parseFloat(n1 - 0.1);
        if (result > 0) {
            $('#input' + number).val(result.toFixed(1));
        } else {
            $('#input' + number).val(0);
        }
    }
    updatePreview(cm.getValue());
}

function increment(number) {
    let input = $('#input' + number);
    let n1 = parseFloat(input.val());

    //Size
    if (number == 14) {
        timeout = setTimeout(() => {
            increment(number);
        }, speed);
        let result = parseFloat(n1 + 1);
        if (result < 15) {
            $('#input' + number).val(result.toFixed(0));
        } else {
            $('#input' + number).val(15);
        }
    } else if (number == 17 || number == 18 || number == 19) {
        timeout = setTimeout(() => {
            increment(number);
        }, speed);
        let result = parseFloat(n1 + 1);
        if (result < 360) {
            $('#input' + number).val(result.toFixed(0));
        } else {
            $('#input' + number).val(360);
        }
    } else if (number == 20 || number == 21 || number == 22) {
        timeout = setTimeout(() => {
            increment(number);
        }, speed);
        let result = parseFloat(n1 + 1);
        if (result < 250) {
            $('#input' + number).val(result.toFixed(0));
        } else {
            $('#input' + number).val(250);
        }
    } else {
        let result = parseFloat(n1 + 0.1);
        if (result < 1) {
            $('#input' + number).val(result.toFixed(1));
        } else {
            $('#input' + number).val(1);
        }
    }
    updatePreview(cm.getValue());
}

function checkInputNumber(number) {
    let input = $('#input' + number);
    if (number == 14) {
        let n1 = parseFloat(input.val());
        if (n1 > 15) {
            $('#input' + number).val(15);
        }
        if (n1 < 0) {
            $('#input' + number).val(0);
        }
    } else if (number == 17 || number == 18 || number == 19) {
        let n1 = parseFloat(input.val());
        if (n1 > 360) {
            $('#input' + number).val(360);
        }
        if (n1 < -360) {
            $('#input' + number).val(-360);
        }
    } else if (number == 20 || number == 21 || number == 22) {
        let n1 = parseFloat(input.val());
        if (n1 > 250) {
            $('#input' + number).val(250);
        }
        if (n1 < 0) {
            $('#input' + number).val(0);
        }
    } else {
        let n1 = parseFloat(input.val());
        if (n1 > 1) {
            $('#input' + number).val(1);
        }
        if (n1 < 0) {
            $('#input' + number).val(0);
        }
    }

}
var fonts = {
    list: [
        'Calibri',
        'Arial',
        'Consolas',
        'Georgia',
        'Courier',
    ],
    index: 0
}

function toggleButton() {
    fonts.index = fonts.index + 1;
    let i = (fonts.index) % fonts.list.length;
    $('#fontButton').text(fonts.list[i]);
    $('#fontButton').css('font-family', fonts.list[i]);
    updatePreview(cm.getValue());
}

function zoomIn() {
    svg.zoomIn();
}

function zoomOut() {
    svg.zoomOut();
}

function undo() {
    svg.reset();
}

function reset(...args) {
    //Color or Font Settings
    if (args.length > 1) {
        $('body').css(args[1], args[2]);
        $('#input' + args[0]).val(args[2]);
        if (args[0] == 13) {
            //Font Settings
            $('#input' + (args[0] + 1)).val(6);
            $('#fontButton').text(fonts.list[0]);
            $('#fontButton').css('font-family', fonts.list[0]);
            fonts.index = 0;
        } else {
            //Color Settings
            $('#input' + (args[0] + 1)).val(0.5);
        }

    }
    //Range Settings
    else {
        let a;
        let b;
        let c;

        if (args[0] == 17) {
            //Rotation Settings
            a = 30;
            b = 60;
            c = 0;

        } else {
            //Distance Settings
            a = 50;
            b = 50;
            c = 50;
        }
        $('#input' + (args[0])).val(a);
        $('#input' + (args[0] + 1)).val(b);
        $('#input' + (args[0] + 2)).val(c);
    }
    updatePreview(cm.getValue());
}

function saveAsFile(filename, data, type) {
    var blob = new Blob([data], { type });

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
 * CTRL+Shift+O = Open File
 * CTRL+Shift+S = Save File
 * CTRL+Shift+B = Word wrap
 * CTRL+Shift+E = Hide/Show Editor
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

    if (e.ctrlKey && e.shiftKey && theChar == 'O') {
        openFile();
    }

    if (e.ctrlKey && e.shiftKey && theChar == 'S') {
        saveSVG();
    }

    if (e.ctrlKey && e.shiftKey && theChar == 'E') {
        expandPreview();
    }

}

function expandPreview() {
    var isVisible = $(".paper").is(":visible");
    if (isVisible) {
        $(".paper").hide("slow");
        $(".editorbuttons").hide("slow");
        $(".dropdown").hide("slow");
        $(".preview").css("width", "100%");
        $("#btnexp").removeClass("fa fa-expand");
        $("#btnexp").addClass("fa fa-window-maximize");
        $(".zoombuttons").css("-webkit-transition", "all 0.75s ease-in-out");
        $(".zoombuttons").css("-moz-transition", "all 0.75s ease-in-out");
        $(".zoombuttons").css("-moz-transition", "all 0.75s ease-in-out");
        $(".zoombuttons").css("-o-transition", "all 0.75s ease-in-out");
        $(".zoombuttons").css("transition", "all 0.75s ease-in-out");
        $(".zoombuttons").css("margin-left", "4%");

        $(".title").css("-webkit-transition", "all 0.75s ease-in-out");
        $(".title").css("-moz-transition", "all 0.75s ease-in-out");
        $(".title").css("-moz-transition", "all 0.75s ease-in-out");
        $(".title").css("-o-transition", "all 0.75s ease-in-out");
        $(".title").css("transition", "all 0.75s ease-in-out");
        $(".title").css("margin-left", "44.7%");
        svg.setViewBox(0, 0, 2000, 2000, 0);
    } else {
        $(".paper").show("slow");
        $(".editorbuttons").show("slow");
        $(".dropdown").show("slow");
        $(".preview").css("width", "70%");
        $("#btnexp").removeClass("fa fa-window-maximize");
        $("#btnexp").addClass("fa fa-expand");
        $(".zoombuttons").css("margin-left", "30.5%");
        $(".title").css("margin-left", "57.7%");
        svg.setViewBox(0, 0, 1000, 1000, 0);
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

function stop() {
    clearTimeout(timeout);
}