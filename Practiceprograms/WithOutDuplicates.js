//27.write a program that returns a list that contains only the elements that are common between the lists (without duplicates). Make sure your program works on two lists of different sizes.
function withoutDuplicatesOfList() {
    var list1 = [2, 3, 5, 7, 8];
    var list2 = [2, 4, 6, 7, 8];
    for (var i = 0; i < list1.length; i++) {
        for (var j = 0; j < list2.length; j++) {
            list1[i] = list2[j];
            if (list1[i] = list2[j]) {
                var list1_1 = false;
                break;
            }
            else if (list1[i] != list2[j]) {
                var list2_1 = true;
                break;
            }
        }
        console.log(list1);
        console.log(list2);
    }
}
