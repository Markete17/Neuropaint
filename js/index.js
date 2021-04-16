    $("html, body").animate({ scrollTop: 0 }, "slow");
    var zoom = 100;
    
    $(function() {
        loadInputs();
        loadMenu();
    });
function loadInputs(){
    let inputsColor = ['--cubeColor','--kernelColor','--denseColor','--pyramidColor',
                        '--arrowColor','--strokeColor','--fontColor','--inputColor',]
    $("#zoomtext").text(zoom+'%');
    let j=0;
    for(let i=1;i<16;i+=2){
        loadInputColor(i,inputsColor[j]);
        j++;
    }
    j=0;
    for (let i=2;i<17;i+=2){
        if(i==14){
            loadInput(i,20,0)
        }
        else{
            loadInput(i,1,0)
        }
    }
   
    for(let i=17;i<23;i++){
        if(i<20){
            //Rotation Settings
            loadInput(i,360,-360);
        }
        else{
            //Distance Settings
            loadInput(i,250,0);
        }
    }
    //Radio Settings
    $('input[type=radio]').change(function() {
        updatePreview(cm.getValue());
    });
}

function loadInput(number,max,min){
    var input = document.getElementById('input'+number);
    input.addEventListener('change', function() {
        if(input.value<min){
            input.value=min;
        }
        if(input.value>max){
            input.value=max;
        }
        $('#input'+number).val(input.value);
        updatePreview(cm.getValue());
    });
}

function loadInputColor(number,css){
    var body = document.querySelector('body');
    var input = document.getElementById('input'+number);
    input.addEventListener('change', function() {
        body.style.setProperty(css, input.value);
        $('#input'+number).val(input.value);
        updatePreview(cm.getValue());
    });
}

function loadMenu(){
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
    if(number==14 || number==20 || number == 21 ||number ==22){
        let result = parseFloat(n1-1);
        if(result>0){
            $('#input'+number).val(result.toFixed(0));
        }
        else{
            $('#input'+number).val(0);
        }
    }
    else if(number==17 || number == 18 ||number ==19){
        let result = parseFloat(n1-1);
        if(result>-360){
            $('#input'+number).val(result.toFixed(0));
        }
        else{
            $('#input'+number).val(-360);
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
    updatePreview(cm.getValue());
}

function increment(number){
    let input = $('#input'+number);
    let n1=parseFloat(input.val());
    //Size
    if(number==14){
        let result = parseFloat(n1+1);
        if(result<20){
            $('#input'+number).val(result.toFixed(0));
        }
        else{
            $('#input'+number).val(20);
        }
    }
    else if(number==17 || number == 18 ||number ==19){
        let result = parseFloat(n1+1);
        if(result<360){
            $('#input'+number).val(result.toFixed(0));
        }
        else{
            $('#input'+number).val(360);
        }
    }
    else if(number==20 || number == 21 ||number ==22){
        let result = parseFloat(n1+1);
        if(result<250){
            $('#input'+number).val(result.toFixed(0));
        }
        else{
            $('#input'+number).val(250);
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
    updatePreview(cm.getValue());
}

function checkInputNumber(number){
    let input = $('#input'+number);
    if(number==14){
        let n1=parseFloat(input.val());
        if(n1>20){
            $('#input'+number).val(20);
        }
        if(n1<0){
            $('#input'+number).val(0);
        }
    }
    else if(number==17 || number == 18 || number ==19){
        let n1=parseFloat(input.val());
        if(n1>360){
            $('#input'+number).val(360);
        }
        if(n1<-360){
            $('#input'+number).val(-360);
        }
    }

    else if(number==20 || number == 21 || number ==22){
        let n1=parseFloat(input.val());
        if(n1>250){
            $('#input'+number).val(250);
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
    updatePreview(cm.getValue());
}

function zoomIn(){
        zoom +=25;
        $("#zoomtext").text(zoom+'%');
    updatePreview(cm.getValue());
}

function zoomOut(){
        zoom -=25;
        $("#zoomtext").text(zoom+'%');
    updatePreview(cm.getValue());
}

function reset(...args){
    //Color or Font Settings
    if(args.length>1){
        $('body').css(args[1], args[2]);
        $('#input'+args[0]).val(args[2]);
        if(args[0]==13){
            //Font Settings
             $('#input'+ (args[0]+1)).val(6);
             $('#fontButton').text(fonts.list[0]);
             $('#fontButton').css('font-family',fonts.list[0]);
             fonts.index=0;
        } else{
            //Color Settings
            $('#input'+ (args[0]+1)).val(0.5);
        }

    }
    //Range Settings
    else{
        let a;
        let b;
        let c;
        
        if(args[0]==17){
        //Rotation Settings
            a = 30;
            b = 60;
            c = 0;

        } else{
        //Distance Settings
            a=100;
            b=50;
            c=50;
        }
            $('#input'+ (args[0])).val(a);
            $('#input'+ (args[0]+1)).val(b);
            $('#input'+ (args[0]+2)).val(c);
    }
    updatePreview(cm.getValue());
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
