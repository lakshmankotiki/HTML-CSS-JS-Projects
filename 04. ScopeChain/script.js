
function b() {
    var a = 20;
    c();
    function c() {
        console.log(a);
    }
}

b();
