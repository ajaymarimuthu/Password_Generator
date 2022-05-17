let pwd=document.getElementById("Generate")
 
let letters=['a','b','c','d','e','f','g','h','i','j','k','l','m','n'];
let numbers=[1,2,3,4,5,6,7,8,9,0];
let symbols=['!','@','#','$','*','^','=','+','-','`','~', '<' ,'/' , '>' ,'?'     ]          
let Capitals=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P"];
let brack=['{',']','{','[',')'];

let letNum=['d',4,'a',0,'h','A','*','=','9','}',6,'='];

let combine=['!',3,'@','#','$',"D",7,"E", "L",'*','^','=','+','{',']','{','[',"M","N","f",2,">" ]
 
// pwd.addEventListener('click', () => {
//     //let v= arr[Math.floor(Math.random*arr.length)+1]
  
//    let one=letters[(Math.floor(Math.random()*letters.length))];
//    let two=numbers[(Math.floor(Math.random()*numbers.length))];
//    let three=symbols[(Math.floor(Math.random()*symbols.length))];
//    let four=Capitals[(Math.floor(Math.random()*Capitals.length))];
//    let five=brack[(Math.floor(Math.random()*brack.length))];

//    let ans=one+two+three+four+five
//    document.getElementById("password").textContent=ans
//    console.log(one+two+three+four+five);
// });


pwd.addEventListener('click', () => {

    for(let i=0;i<4;i++){

        let one=letters[(Math.floor(Math.random()*letters.length))];
        let two=numbers[(Math.floor(Math.random()*numbers.length))];
        let three=symbols[(Math.floor(Math.random()*symbols.length))];
        let four=Capitals[(Math.floor(Math.random()*Capitals.length))];
        let five=brack[(Math.floor(Math.random()*brack.length))];
        let all=combine[(Math.floor(Math.random()*combine.length))];
        let numcCombine=letNum[(Math.floor(Math.random()*letNum.length))];

     //   let ans=one+two+three+four+five+all

        if(i===0){
            let ans=one+two+three+four+five+numcCombine+all
            document.getElementById("password0").textContent=ans
        } 
        if(i===1){
            let ans=one+two+three+four+five+numcCombine+all
            document.getElementById("password1").textContent=ans
        } 
        if(i===2){
            let ans=one+two+three+four+five+numcCombine+all
            document.getElementById("password2").textContent=ans
        } 
        if(i===3){
            let ans=one+two+three+four+five+numcCombine+all
            document.getElementById("password3").textContent=ans
        } 


    }



})
