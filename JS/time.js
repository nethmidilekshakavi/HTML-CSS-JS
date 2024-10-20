/*

//set time out time ekn passe run weno

setTimeout(() =>{
    console.log("timeout");
},6000);

// set interval
//digatama meka run weno use kraddi hti thanat daana one


setInterval(() => {

    console.log("interval")
    },600);

*/

let arr6 = ["A" , "B" , "C" , "D","E"];
setInterval(() => {



   let last =  arr6[4]
    arr6.pop();

    arr6.unshift(last)



    document.getElementsByTagName("h1")[0].innerText = arr6[0];
    document.getElementsByTagName("h1")[1].innerText = arr6[1];
    document.getElementsByTagName("h1")[2].innerText = arr6[2];
    document.getElementsByTagName("h1")[3].innerText = arr6[3];
    document.getElementsByTagName("h1")[4].innerText = arr6[4];


    console.log(
        arr6
    )

},6000);