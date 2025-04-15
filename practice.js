//convert liters into milli liters
function milk() {
    var l = 2.5678;
    var mi = 1000;
    var m = l * mi;
    console.log(m);
}
milk();
function con_milk() {
    var number = 2.5678;
    var millimeters = number * 1000;
    if (millimeters >= 0) {
        console.log(millimeters);
    }
    else {
        var message = "don't give negative numbers";
        console.log(message);
    }
}
con_milk();
