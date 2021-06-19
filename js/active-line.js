// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: https://codemirror.net/LICENSE

(function (mod) {
    if (typeof exports == "object" && typeof module == "object") // CommonJS
        mod(require("js/codemirror"));
    else if (typeof define == "function" && define.amd) // AMD
        define(["js/codemirror"], mod);
    else // Plain browser env
        mod(CodeMirror);
})(function (CodeMirror) {
    "use strict";
    var WRAP_CLASS = "CodeMirror-activeline";
    var BACK_CLASS = "CodeMirror-activeline-background";
    var GUTT_CLASS = "CodeMirror-activeline-gutter";

    CodeMirror.defineOption("styleActiveLine", false, function (cm, val, old) {
        var prev = old == CodeMirror.Init ? false : old;
        if (val == prev) return
        if (prev) {
            cm.off("beforeSelectionChange", selectionChange);
            clearActiveLines(cm);
            delete cm.state.activeLines;
        }
        if (val) {
            cm.state.activeLines = [];
            updateActiveLines(cm, cm.listSelections());
            cm.on("beforeSelectionChange", selectionChange);
        }
    });

    function clearActiveLines(cm) {
        for (let activelines of cm.state.activeLines) {
            cm.removeLineClass(activelines, "wrap", WRAP_CLASS);
            cm.removeLineClass(activelines, "background", BACK_CLASS);
            cm.removeLineClass(activelines, "gutter", GUTT_CLASS);
        }
    }

    function sameArray(a, b) {
        if (a.length != b.length) return false;
        for (var i = 0; i < a.length; i++)
            if (a[i] != b[i]) return false;
        return true;
    }

    function updateActiveLines(cm, ranges) {
        var active = [];
        for (let range of ranges) {
            var option = cm.getOption("styleActiveLine");
            if (typeof option == "object" && option.nonEmpty ? range.anchor.line != range.head.line : !range.empty())
                continue
            var line = cm.getLineHandleVisualStart(range.head.line);
            if (active[active.length - 1] != line) active.push(line);
        }
        if (sameArray(cm.state.activeLines, active)) return;
        cm.operation(function () {
            clearActiveLines(cm);
            for (let act of active) {
                cm.addLineClass(act, "wrap", WRAP_CLASS);
                cm.addLineClass(act, "background", BACK_CLASS);
                cm.addLineClass(act, "gutter", GUTT_CLASS);
            }
            cm.state.activeLines = active;
        });
    }

    function selectionChange(cm, sel) {
        updateActiveLines(cm, sel.ranges);
    }
});