//27.write a program that returns a list that contains only the elements that are common between the lists (without duplicates).
//  Make sure your program works on two lists of different sizes.
function withoutDuplicatesOfList() {
    var list1 = [2, 3, 5, 7, 8];
    var list2 = [2, 4, 6, 7, 8];
    var list3 = [];
    for (var i = 0; i < list1.length; i++) {
        for (var j = 0; j < list2.length; j++) {
            if (list1[i] == list2[j]) {
                var isDuplicate = false;
                for (var k = 0; k < list3.length; k++) {
                    if (list3[k] === list1[i]) {
                        isDuplicate = true;
                        break;
                    }
                }
                if (!isDuplicate) {
                    list3.push(list1[i]);
                }
                break;
            }
        }
    }
    return list3;
}
console.log(withoutDuplicatesOfList());
