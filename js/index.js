$(function() {
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
});

function save(){
    var fname1 = prompt('Code File', 'neurotronikCode');
    var fname2 = prompt('Svg File', 'neurotronikSVG');
    if (fname1) {
        saveAsFile(fname1, cm.getValue(),'text/plain');
    }
    if (fname2) {
        saveAsFile(fname2, svg,'image/svg+xml');
    }
}

function openFile(){
    $('#openFile').click();
    
    document.getElementById("openFile").addEventListener('change',function(){
        var fr=new FileReader();
        fr.onload = function(){
            if(fileValidation()){
            cm.setValue(this.result);
            
            }
        }
        fr.readAsText(this.files[0]);
    })
}

function fileValidation(){
    var fileInput = document.getElementById('openFile');
    var filePath = fileInput.value;
    if(!filePath.includes(".txt")){
        alert('Please upload file having extensions .txt only.');
        fileInput.value = '';
        return false;
    }
    return true;
}


function saveAsFile(filename, data, type) {
    var blob = new Blob([data], { type});

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
 document.onkeyup = function(e)
 {
     e.preventDefault();
 
     // e.keyCode is deprecated from web standard and replaced with e.key
     var theChar = null;
     if (e.key !== undefined) {
         theChar = e.key.toUpperCase();
     }
     if (!theChar) {
         // Fallback to old standard
         theChar = String.fromCharCode(e.keyCode).toUpperCase();
     }
 
     if (e.ctrlKey && e.shiftKey && theChar == 'O') {
         document.getElementById('menu-open-file').click();
     }
 
     if (e.ctrlKey && e.shiftKey && theChar == 'S') {
         save();
     }
 
     if (e.ctrlKey && e.shiftKey && theChar == 'E') {
        expandPreview();
     }

 }

 function expandPreview(){
    var isVisible = $("#ed").is(":visible");
    if(isVisible){
        $( "#ed" ).hide( "slow" );
        $("#pr").css("width", "100%");
        $(".viewbuttons .expand").css("margin-left", "95%");
        $(".viewbuttons .open").css("margin-left", "91%");
        $(".viewbuttons .save").css("margin-left", "87%");
        $("#btnexp").removeClass("fa fa-expand");
        $("#btnexp").addClass("fa fa-window-maximize");
    }
    else{
        $( "#ed" ).show( "slow" );
        $("#pr").css("width", "60%");
        $(".viewbuttons .expand").css("margin-left", "92%");
        $(".viewbuttons .open").css("margin-left", "86%");
        $(".viewbuttons .save").css("margin-left", "80%");
        $("#btnexp").removeClass("fa fa-window-maximize");
        $("#btnexp").addClass("fa fa-expand");
        
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
