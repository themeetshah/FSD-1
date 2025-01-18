function val() {
    var textbox = document.getElementById("username");
    var vaalue = textbox.value;
    // var p = /abc/;
    
    //modifier: i: case-insensitive, g: global, m: multiline
    
    // var p = /[abc]/i;
    // var p = /[a-z]/;
    // var p = /[^abc]/; //a,b,c sivaay b kaik hovu j joie
    // var p = /[^0-9]/; //0-9 sivaay b kaik hovu j joie
    // var p = /^[a-zA-Z0-9_]/;
    // var p = /^d/; //d thi start thavu joie
    // var p = /^[def]/; //d or e or f thi start thavu joie
    
    //identifiers:
    // \d : digits
    // \D : non-digits
    // \w : word-alphabets+nos+_
    // \W : non-word (special characters)
    // \s : white-space
    
    //var p = /\d/; // digit toh hovo j joie
    //var p = /\s/; // space toh hovo j joie
    // var p = /\s\d/; // pehla space then digit hovu joie
    
    //quantifiers:
    // var p = /[a-z]*/; //0 to inf
    // var p = /[a-z]+/; //1 to inf
    // var p = /[a-z]{5}/; //exact 5
    // var p = /[a-z]{5,}/; //min 5
    // var p = /[a-z]{,5}/; //min 5
    // var p = /[a-z]{2,5}/; //min 2, max 5
    // min and max walu match wala fxn pr j chale che
    
    var p = /^\d{3}$/; //exact 3 and starts-ends with digit
    if (!textbox) {
        console.log("No textbox found")
    } else {
        if (!vaalue) {
            console.log("No value found")
        } else {
            if (p.test(vaalue)) {
                console.log("Valid: "+vaalue)
            } else {
                console.log("Pattern didn't match")
            }
        }
    }
}