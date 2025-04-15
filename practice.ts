//convert liters into milli liters

function litresConversion(){
  let  litres= 2.5678;
  let millimeters = litres * 1000;
  if(millimeters>=0){
    console.log(millimeters);
  }
  else {
    let message="don't give negative numbers";
    console.log(message);
  }
}

litresConversion();