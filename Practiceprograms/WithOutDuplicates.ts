//27.write a program that returns a list that contains only the elements that are common between the lists (without duplicates).
//  Make sure your program works on two lists of different sizes.
//this method input as number and give us output
function withoutDuplicatesOfList() {
  let list1 = [2, 3, 5, 7, 8];
  let list2 = [2, 4, 6, 7, 8];
  let list3 = [];

  for (let i = 0; i < list1.length; i++) {
    for (let j = 0; j < list2.length; j++) {
     if(list1[i] == list2[j]){
      let isDuplicate = false;
      for (let k = 0; k < list3.length; k++) {
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
