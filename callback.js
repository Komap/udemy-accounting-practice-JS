"use strick";

 
const first = (sec) => {
    sec = 0
    setInterval(()=>{ 
        sec++;  
        console.log(sec);
    },1000);
}
//first();

// let sec = 0;
const first2 = (sec) => {
    sec++;
    console.log(sec);
}
// setInterval(()=>{ 
//     first2()
// },1000);


// что такое колбэк - это функция, которая срабатывает, после того как другая функция завершила свое выполнение

const funcForCall = (lang, callBack) =>{
    console.log(`I am learn: ${lang}`);
    callBack();
}

const functionCallBack = () =>{
    console.log("1 вариант - Функция callBack");
}
//два варианта передачи аргумента
funcForCall('JS - 1 Вариант', functionCallBack)

funcForCall('JS - 2 Вариант', ()=>{
    console.log("2 вариант - Функция callBack");
})