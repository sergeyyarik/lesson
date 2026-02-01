"use strict";
document.addEventListener('click', documentActions);

function documentActions(e) {
    const targetElement = e.target;
    if (targetElement.closest('.header-hed__burger')) {
        document.documentElement.toggleAttribute('data-menu-open');
        console.log('Menu toggle');
    }
}


// scroll headera
const animItems = document.querySelector('.header');
if(animItems){
    window.addEventListener('scroll', elementScrollHeder);
    function elementScrollHeder(){
        const res = document.documentElement;
        const headerScrol = window.pageXOffset;
        const headerScrolTop = res.scrollTop;
            const animItem = animItems;
        if (headerScrolTop !== headerScrol){
                animItem.classList.add("active");
        } else if (headerScrolTop == headerScrol){
                animItem.classList.remove("active");

            }
    }
}
// -------------------------------------------------




// let someVar = 0;
// ++someVar;

// if (someVar) {
// 	console.log(someVar);
// }

// let nam = 11;
// for(i = 1;i<nam;i++ ){
//     console.log("Пункт No" + i);
// }
// if (2 * 20 <= 10 || 30 / 2 < 5 && 10 <= "10" || 20 === "20") {
// 	console.log('000');
// }



// let rez ;
// let calcDil = (b, c) =>{
// rez = b / c;
//     if (typeof b !== 'number' || isNaN(b) || typeof c !== 'number' || isNaN(c)){
//         console.log("Ви ввели не число! ");
//     }
//     else if( b === 0 || c === 0 ){
//         console.log("Не можливо поділити на Нуль !!!");
//     }else{
//         console.log("Ваша відповідь:" + b +"/" + c + "="+rez + ";");
//     }
//  };
// calcDil(19, 0);


// masNumb.forEach(masRez =>{
    //         if(masRez === 10){
        //             console.log(masRez);
        //         }
        // })
        // for(let masRez of masNumb){
            //     if(masRez === 10){
                //         console.log(masRez);
                //     }
                // }

// let masNumb = [3, 4, 7, "fg4y5",  9, 10, "ty", 5 ];
// for(let i = 0 ; i < masNumb.length; i++){
//     console.log(masNumb[i]);
//     let masRez = masNumb[i];
//     if(masRez === 10){
//         console.log(masRez);
//     }
// }


//let res;

// function calcInt(a, b){
//   res = a  / b;
//   if (typeof a !== 'number'|| isNaN(a)||typeof b !== 'number'|| isNaN(b)){
//     console.log(`Результат не можна обчислити` + res)
//   }
//   else if(b === 0){
//     console.log(`На нуль ділити не можна`)}
//   else{
//     console.log(`Результат: ${res}`)
//   }
// }
// calcInt(6, "ghdh") ;
// - сюди можна підставити значення

