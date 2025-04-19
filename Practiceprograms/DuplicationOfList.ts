//32.Write a program (function!) that takes a list and returns a new list that contains all the elements of the first list minus all the duplicates.

function duplicationOFList(){
    let numbers:number[] = [1 , 2 , 3 , 4 , 2 , 3];
    let num1 : number[] = [];
    for(let i = 0 ;i<numbers.length;i++){
        let exit = false;
    
        for(let j = 0 ;j<num1.length;j++){
            if(numbers[i]==num1[j]){
                exit = true;
                break;
    

        }
        
    } 
    if(! exit){
        num1.push(numbers[i]);
    }  

}   return num1;
}
console.log(duplicationOFList());