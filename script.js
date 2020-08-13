// Const variables for HTML elements
const container  = $(".container");
const currentDay = $("#currentDay");

// JQuery variables to create HTML elements
const btn = ("<button>");
const $saveBtn = btn.addClass(saveBtn);

// Takes HTML variable and array of class names as arguments. Returns variable with all classes attached
function insertClass (obj, arr) {
    if (!Array.isArray(arr)) return;
    
    let classes = "";
    let out = "";
    
    arr.forEach(element => {
        classes = classes + " " + element;
    });
    out = obj.addClass(classes);
    return out;
}

// Builds calendar grid on page-load
function buildDay () {

}