
// function savedb(){
//     return new Promise((s,r)=>{
//         let internet=Math.floor(Math.random()*10)+1;
//         if(internet > 4){
//             s('data send')
//         }else{
//             r('data not send bcuase your intenet speed is low')
//         }

//     });   
// };

// savedb('Abdullah').then(()=>{
//     console.log('data 1 is send');
//     return savedb('ali');
// }).then(()=>{
//     console.log(' data 2 is send');
// })
// .catch(()=>{
//     console.log('data not send bcuase your intenet speed is low');
    
// })

//  function senddb(data){
//     return new Promise((s,r)=>{
//         let internet = Math.floor(Math.random()*10)+1;
//         if(internet > 4){
//             s('your function is sucsesfull')
//         }else{
//             r('data not send bcause your internet is low')
//         }
//     })

//  };

//  senddb('hello').then((s)=>{
//     console.log('data is send ');
//     console.log(s);
    
    
//  }).catch((e)=>{
//     console.log('data not send');
//     console.log(e);
    
//  })

// let h1= document.querySelector('h1');

// function changcolor(color,d){

//     return new Promise((s,r)=>{
//         setTimeout(()=>{
//             h1.style.color=color;
//             s('color was chang')
//         },d)
//     })

// }

// async function demo() {
//     await changcolor('red',2000);
//     await changcolor('blue',2000);
//     await changcolor('orange',2000);
//     await changcolor('purple',2000);
// }

// demo();
// changcolor('red',1000).then(()=>{
//     console.log('red color chang');
//     return changcolor('orange',2000);
// }).then(()=>{
//     console.log('yellow color chang');
//     return changcolor('blue',3000);
// })
