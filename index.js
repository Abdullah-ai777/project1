// let obj={
//     name:'Abdullah',
//     age:18,
//     marks:92
// }

// obj.marks

// obj.city="hafizabad";

// delete obj.marks;

// console.log(obj);

// let ary= ['apple','oreng','mango','bnana' ];

// let target ='mango';

// for (let i =0 ; i<ary.length;i++){

//     if(ary[i] == target){
//         console.log(ary[i])
//     } 

// }


// let arr= [1,2,3,4,5,6,7,8];
// let sum=0;
// for(let i=0;i<arr.length;i++){

// sum += arr[i];

// }
// console.log(sum);




// function generateOTP(length) {
//     const characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
//     let otp = '';
//     for (let i = 0; i < length; i++) {
//         const randomIndex = Math.floor(Math.random() * characters.length);
//         otp += characters[randomIndex];
//     }
//     return otp;
// }

// // Example usage:
// const otpLength = 6;
// const otp = generateOTP(otpLength);
// console.log('Your OTP is:', otp);

// function generateNumericOTP(length) {
//     let otp = '';
//     const digits = '0123456789';
//     for (let i = 0; i < length; i++) {
//         otp += digits[Math.floor(Math.random() * digits.length)];
//     }
//     return otp;
// }

// // Generate a 6-digit OTP
// const otp = generateNumericOTP(6);
// console.log(otp);
// function otp (){
//     let num= Math.random();
// num=num*123456789;
// num=Math.floor(num)
// num=num.toString()
//    if(num.length > 6){
//     if(num.length <6){
//         num=num+1;
//     }
//       num=num.slice(0,6);
//    }
//    console.log(num)
// };

// let a=otp();



// let user=prompt("guesing the number 1 to 10");
// let num= Math.random();
// num=num*100 +1;
// num=Math.floor(num)
// num=num.toString();

// while(true){
//     if(user == num){
//         document.getElementById("data").innerHTML=" yes you guesing the right number ";
//         break;
//     }else if(user == 'q'){
//         document.getElementById("data").innerHTML=" ctr + r and try agian ";
//         break;
//     }else if(user > num){
//         user=prompt("enter smaller number");
//     }else if(user < num){
//         user=prompt("enter larger number");
//     }
//     else{
//         user=prompt("try agian")
//     }
    
    
// }


// function sum (n){
//     let sum=0;

// for (let i=0; i<=n;i++){
//     sum=sum+i;
// }
// return sum;
// }

// console.log(sum(5));
 
// let greet= 'hello';

// function changGreet(){
//     let greet='hello world';
//     console.log(greet);
    
//     function innerGreet(){
//         console.log(greet);
//     }
//     // innerGreet();
// }

// console.log(greet);
// changGreet();


// function first(a,n){
//     for (let i=0;i<n;i++){
//         a();
//     }
// }


// let greet=function(){
//     console.log('hello');
// }

// for (let i=0;i<10;i++){
//     greet()
// }

// first(greet,10);
// let r='odd';

// function factory(r){
//     if(r == 'odd'){
//         return function(n){
//             console.log(!(n%2 ===0))

//         }

//     }if(r == 'even'){
//         return function(n){
//             console.log(n%2 ===0)
//         }
//     }else{
//         console.log('wrong requast');
//     }

// }

// let func= factory(r);
// func(2);
// console.log("hello");
// console.log("hello");
// try{
//     console.log(a);
// }catch(e){
//     console.log('a is not difind');
// }

// console.log("hello2");
// console.log("hello2");


// console.log("hi there");
// setTimeout(()=>{
// console.log('My Home');
// },2000 )



// console.log("welcome to");


// let a=0;

// let id= setInterval(() => {
//     a++;
//     console.log(a)
//     if (a>=20000){
//         clearInterval(id);
    
//     }
// }, 1);




// console.log(a);


// let a=0;
//  let id=setInterval(() => {
    
//     a++;
//     console.log('hello World');
// if(a>= 5){
// clearInterval(id)
// }
    
// }, 2000);

// let arr=[1,2,3,4,5,6,7,8,9,10];

// const print=(a)=>{
//     console.log(a);
    
// }

// arr.forEach(print);

//     let ary=[1,2,3,4,5];

//     let final= ary.reduce((re,el)=>{
//        return  re+el;
//     })

//     console.log(final);
    
// let num=[1,3,4,22,55,4,7,40,77,44,77,8,5,4];

// function getMin( num){
//     let final2 = num.reduce((res,el)=>{
//         if(res>el){
//             return el;
//         }else{
//             return res
//         }
    
//     })

//     return final2;
// }


// console.log(final);

// let final = final2.every((e)=>{
//     return e%10==0;
// })

// console.log(getMin(num ));

// function sum(a=2,b){
//     return a+b;
// }

// let final= sum( undefined,3); 

// console.log(final);

// let a=10;
// let b=5;

// a=a-b;
// b=a+b;
// a=b-a;

// console.log(a);
// console.log(b);

// let arr=[1,3,5,6,3,0,7,-2,44,6,];

// console.log(Math.min(...arr))
let a='hello';
let b='Abdullah';


let c=a;
a=b;
b=c;

console.log(a);
console.log(b);



