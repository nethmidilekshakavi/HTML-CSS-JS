
//==============Literal Based Arrays====================

let array1  = []

array1 = [1,2,3,4,5]

console.log(array1)

let arrays2 = []
arrays2 = ["Red" ,"Blue","Purple"]
console.log(arrays2)

let array3 = [1,"hello","ture",function (){},["A" ,"B", "C"]]
console.log(array3)

//==============Constructor Based Arrays====================

let arrays4 = new Array(1,2,3,4,5,6);                              //object
let arrays5 = new Array(1,"Hello" , true,function(){},["hii","OOps"],{});
console.log(arrays4)
console.log(arrays5)



let Arrays6 = ["A","B","C","D"];

console.log("index0 :" + Arrays6[0])
console.log("index0 :" + Arrays6[1])
console.log("index0 :" + Arrays6[2])
console.log("index0 :" + Arrays6[3])

console.log("Arrays6 :"+Arrays6)
Arrays6[3] = "HII";
console.log("Arrays6 :"+Arrays6)

console.log("Arrays Method =========================================")

//==============Arrays Method====================


let arrays7 = ["Ranil","Namal","Sajith"]
console.log(arrays7)
//push Method ( meken wenne atrray ekat aluthin add karanwa agata)
arrays7.push("AKD")
console.log(arrays7)
arrays7.push("Dilith")
console.log(arrays7)

//pop Method ( meken wenne atrray eke theena last item eka arraya eken remove kranwaarwa)
arrays7.pop();
console.log(arrays7)

//Shift Method ( meken wenne atrray eke theena first item eka arraya eken remove kranwaarwa)
arrays7.shift()
console.log(arrays7)

//unshift Method ( meken wenne atrray eke mulata new item ekk add kranwa )
arrays7.unshift("Ranjan")
console.log(arrays7)

//unshift Method ( meken wenne atrray eke mulata new item set ekk add kranwa )
arrays7.unshift("prasad" , "Yasendra")
console.log(arrays7)

//concat Method (Arrays ekat join kranwa)

let array8 = [1,2,3];
let array9 = [4,5,6,7,8,9,10];

let result  = array8.concat(array9)
console.log("number_Array8: " +array8)
console.log("number_Array9 " +array9)
console.log("Result: " +result)

//slice Method (Arrays eke kotasaka copy ekk ganna one nm )
let my_number_array = [1,2,3,4,5,6,7,8,9,10]
let copy1 =  my_number_array.slice(2);
console.log("copy1 :" +copy1)

let copy2 =  my_number_array.slice(2,6);
console.log("copy2 :" +copy2)

//end eke idam output eka denwa
let copy3 = my_number_array.slice(-1)
console.log("copy3 :" + copy3)

//aluthma ekk hadala deno copy ekk kalin eka adala kra gnne nathuwa
let new_my_number = my_number_array.slice(3);
console.log(new_my_number);

new_my_number[3] = 100;
console.log(new_my_number);

//splice Method (item range ekkma ain krl daanna items tika)
let array10 = [1,2,3,4,5,6,7,8,9,10]
/*
array10.splice(7)
*/
//3 idam item 2k delete kranna
//array10.splice(3,2)
array10.splice(1,3,"hello" , "hii" , "jAVA")
console.log(array10)

//=======================================================================
let array11 = [10,40,60,20,80,30,70,100,50,90]

for (let i = 0; i < array11.length - 1; i++) {
    for (let j = 0; j < array11.length - 1 - i; j++) {
        if (array11[j] > array11[j + 1]) {
            let temp = array11[j];
            array11[j] = array11[j + 1];
            array11[j + 1] = temp;
        }
    }
}
console.log(array11)

//Sort Method ()

let array12 = [10,40,60,20,80,30,70,100,200,50,90]
let sortarrya = array12.sort();
console.log("Sort Arrya :" + sortarrya)

let reverse = array12.reverse();
console.log("Reverse :" + sortarrya)

//Index

let arr3 = ["USA","UK","SL","UAE"];
let idx1 = arr3.indexOf("UK")
console.log(idx1)

let idx2 = arr3.indexOf("UAE");
console.log(idx2)

//lastIndexOf(dekak thibboth anthima eke index eka denne)

let idx4 = [1,2,3,4,5,6,2,"Hello",'java']
console.log(idx4.lastIndexOf(2))

//Includes (array eka athule theenwad ndd kiyl balanna)
console.log(idx4.includes("Hello"))

//Filter (2n bedala ena ewa daanne meke item aniwa thiyenna ona)

let arr5 = [1,2,3,4,5,6,7,8,9,10]
let filter =  arr5.filter(function (item){
  return   item % 2 == 0;
})

console.log(filter)

//Map (for loop eka wenuwat use kranna puluwann group kranna)

let arr6 = ["USA" , "SRI LANKA" , "JAPAN" , "INDIA"]
/*for (let i = 0; i < arr6.length; i++) {
}*/
arr6.map((item,index)=>{
    console.log(index +" " + item)
})

let arry = ['a','b','c','d']
console.log(arry.toString());

//set time out



//set interval