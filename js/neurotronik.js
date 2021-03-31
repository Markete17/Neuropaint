var example = {
    data: [
        '<h1>Example 1</h1>',
        '<h1>Example 2</h1>',
        '<h1>Example 3</h1>',
        '<h1>Example 4</h1>'
    ],
    init: function(number) {
        eval("x = doText(number)");
        cm.setValue(x);
    },
}
function doText(number){
    return example.data[number];
}