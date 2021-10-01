


// +  перед PROMPT - говорит, что будет работать с числом

document.addEventListener("DOMContentLoaded", ()=>{
    const personalMovieDB = {
        count: "",  
        movies:{},
        actors:{},
        genres:[],
        privat: false
    }

    // let i = 0;
    // const questionHowManyFilms = prompt("Один из последних просмотренных фильмов?"),
    // questionQuality = +prompt("На сколько оцените его?");
    //     if  (questionHowManyFilms && questionQuality != null 
    //         || questionHowManyFilms && questionQuality != "" 
    //         || questionQuality > 0 && questionQuality <= 10 
    //         || questionHowManyFilms.length < 50){ 
    //         do{
    //             i++
    //             console.log(i);
    //             personalMovieDB.movies[questionHowManyFilms] = questionQuality;
    //         }
    //         while(i <= 1);
    //     }
    //     else{
    //         i--
    //         alert("Ошибка");
    //     }
    //     console.log(personalMovieDB);

        // let i = 0;
        // do{
        //     const questionHowManyFilms = prompt("Один из последних просмотренных фильмов?"),
        //     questionQuality = +prompt("На сколько оцените его?");
        //     i++;
        //     if(questionHowManyFilms != '' && questionQuality != '' && questionHowManyFilms != null && questionQuality != null
        //         && questionQuality > 0 && questionQuality <= 10 && questionHowManyFilms.length < 50){
                
        //         personalMovieDB.movies[questionHowManyFilms] = questionQuality;
        //         console.log(i);
        //     }
        //     else{
        //         i--;
        //         console.log(i);
        //     }
        // }while(i <= 1);
        // console.log(personalMovieDB.movies)
   




    //! Важжный комментарий, оператор сранвения && работает так:  пока "выполнится/не выполнятся" все условия, типо "это" и "это" и "это"
    // for(let i=0; i<2; i++){
    //     const questionHowManyFilms = prompt("Один из последних просмотренных фильмов?"),
    //     questionQuality = +prompt("На сколько оцените его?");
        
    //     if( questionHowManyFilms != null 
    //         && questionQuality != null
    //         && questionHowManyFilms != ""
    //         && questionQuality != "" 
    //         && (questionQuality > 0 || questionQuality <= 10)  
    //         && questionHowManyFilms.length < 50
    //         ){
    //         personalMovieDB.movies[questionHowManyFilms] = questionQuality;
    //         console.log(i);
    //     }
    //     else{
    //         i--;
    //         alert("ввести еще раз+");
    //         console.log(i);
    //     } 
    // }
    // console.log(personalMovieDB);

    // let i = 0;
    // do{
    //     const questionHowManyFilms = prompt("Один из последних просмотренных фильмов?"),
    //     questionQuality = +prompt("На сколько оцените его?");
    //     if( 
    //     questionHowManyFilms != null 
    //     || questionQuality != null 
    //     || questionHowManyFilms !="" 
    //     || questionQuality !="" 
    //     || (questionQuality <= 0 && questionQuality < 10)
    //     || questionHowManyFilms.length <= 30 ){
            
    //         personalMovieDB.movies[questionHowManyFilms] = questionQuality;
    //          console.log(i);
    //     }
    //     else{
    //         alert("Произошла ошибка, введите данные еще раз");
    //     } 
        
    //     console.log(personalMovieDB);
    //     i++;
    // }
    // while(i <= 1);


    // const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");
    // personalMovieDB.count = numberOfFilms;
    // if(personalMovieDB.count <= 10){
    //     alert("Просмотрено довольно мало фильмов")
    // }
    // else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
    //     alert("Вы классический зритель")
    // }
    // else if(personalMovieDB.count > 30){
    //     alert("Вы киноман");
    // }
    // else{
    //     alert("Произошла ошибка");
    // }


    //! ниже код будет не работающим, потому что оператор && должен быть выполнен во всех строчках и
    //! даже если была введена пустая стпрока, при этом не был введен  NULL (Отмена)
    // for(let i=0; i<2; i++){
    //     const questionHowManyFilms = prompt("Один из последних просмотренных фильмов?"),
    //     questionQuality = +prompt("На сколько оцените его?");
        
    //     if( questionHowManyFilms === null 
    //         && questionQuality === null
    //         && questionHowManyFilms === ""
    //         && questionQuality === "" 
    //         && (questionQuality <= 0 || questionQuality > 10)  || questionHowManyFilms.length > 50
    //         ){
    //         i--;
    //         alert("ввести еще раз+");
    //         console.log(i);
    //     }
    //     else{
    //         console.log(i);
    //         personalMovieDB.movies[questionHowManyFilms] = questionQuality;
            
    //     } 
    // }
    // document.write("+1    ");
    // console.log(personalMovieDB);
   

    
    // let res = '50';
    // (res === 50) ? console.log('res равно 50') : console.log('res не равно 50');  
});



//! Замыкание 


"use strict";


let num =20;
const showFMess = (text) =>{
    console.log(text);
    let num = 10;
    console.log(num);
}

showFMess("sdfdsfsdfsdf");
console.log(num);

const calc = (a, b) =>{
    return a + b;
    console.log("Просто текст")
}


//! 3 вида функции 
//1 function declaration (Создается до начала выполнения скрипта, можно вызвать перед объявлением)
function f(){
    console.log("function declaration")
}
//2 function expression(Создается только, когда доходит до поток кода, можно вызвать только после объявления)
const fExp = function(){
    console.log("function expression")
};
//3 arrow function (не имеет своего контекста this)
const fArrow = () =>{
    console.log("arrow function")
}

f();

fExp();

fArrow();

const calculator = (a,b) =>{
     console.log( a + b)
}
calculator(5,3)

const str = 'test';
console.log(str);
console.log(str.toUpperCase());

const stringa = "some text"
console.log(stringa.slice(4,9));




