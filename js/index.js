    $("html, body").animate({ scrollTop: 0 }, "slow");

    $(function() {
    var body = document.querySelector('body');
    var input1 = document.getElementById('input1');
    var input3 = document.getElementById('input3');
    var input5 = document.getElementById('input5');
    var input7 = document.getElementById('input7');
    var input9 = document.getElementById('input9');
    
    input1.addEventListener('change', function() {
        body.style.setProperty('--cubeColor', input1.value);
        $('#input1').val(input1.value);
    });
    input3.addEventListener('change', function() {
        body.style.setProperty('--kernelColor', input3.value);
        $('#input3').val(input3.value);
    });
    input5.addEventListener('change', function() {
        body.style.setProperty('--denseColor', input5.value);
        $('#input5').val(input5.value);
    });
    input7.addEventListener('change', function() {
        body.style.setProperty('--pyramidColor', input7.value);
        $('#input7').val(input7.value);
    });
    input9.addEventListener('change', function() {
        body.style.setProperty('--arrowColor', input9.value);
        $('#input9').val(input9.value);
    });
    input11.addEventListener('change', function() {
        body.style.setProperty('--strokeColor', input11.value);
        $('#input9').val(input11.value);
    });
    input13.addEventListener('change', function() {
        body.style.setProperty('--fontColor', input13.value);
        $('#input13').val(input13.value);
    });

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

function decrement(number){
    let input = $('#input'+number);
    let n1=parseFloat(input.val());
    //Size
    if(number==14||number==15 || number==16 || number==17){
        let result = parseFloat(n1-1);
        if(result>0){
            $('#input'+number).val(result.toFixed(0));
        }
        else{
            $('#input'+number).val(0);
        }
    }
    else{
        let result = parseFloat(n1-0.1);
        if(result>0){
            $('#input'+number).val(result.toFixed(1));
        }
        else{
            $('#input'+number).val(0);
        }
    }
}

function increment(number){
    let input = $('#input'+number);
    let n1=parseFloat(input.val());
    //Size
    if(number==14){
        let result = parseFloat(n1+1);
        if(result<30){
            $('#input'+number).val(result.toFixed(0));
        }
        else{
            $('#input'+number).val(30);
        }
    }
    else if(number==15 || number==16 || number==17){
        let result = parseFloat(n1+1);
        if(result<150){
            $('#input'+number).val(result.toFixed(0));
        }
        else{
            $('#input'+number).val(300);
        }
    }
    else{
        let result = parseFloat(n1+0.1);
        if(result<1){
            $('#input'+number).val(result.toFixed(1));
        }
        else{
            $('#input'+number).val(1);
        }
    }

}

function checkInputNumber(number){
    let input = $('#input'+number);
    if(number==14){
        let n1=parseFloat(input.val());
        if(n1>30){
            $('#input'+number).val(30);
        }
        if(n1<0){
            $('#input'+number).val(0);
        }
    }
    else{
        let n1=parseFloat(input.val());
        if(n1>1){
            $('#input'+number).val(1);
        }
        if(n1<0){
            $('#input'+number).val(0);
        }
    }

}
var fonts = {
    list:[
    'Calibri',
    'Arial',
    'Consolas',
    'Georgia',
    'Courier',
    ],
    index:0
}
function toggleButton(){
    fonts.index = fonts.index+1;
    let i = (fonts.index) % fonts.list.length;
    $('#fontButton').text(fonts.list[i]);
    $('#fontButton').css('font-family',fonts.list[i]);
}

function rangeSlide(value,number) {
    document.getElementById('rangeValue'+number).innerHTML = value;
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
         save();
     }
 
     if (e.ctrlKey && e.shiftKey && theChar == 'E') {
        expandPreview();
     }

 }

 function expandPreview(){
    var isVisible = $(".editor").is(":visible");
    if(isVisible){
        $(".editor" ).hide( "slow" );
        $(".preview").css("width", "100%");
        $(".preview").css("height", "200%");
        $("#btnexp").removeClass("fa fa-expand");
        $("#btnexp").addClass("fa fa-window-maximize");
    }
    else{
        $(".editor" ).show( "slow" );
        $(".preview").css("width", "60%");
        $(".preview").css("height", "100%");
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
