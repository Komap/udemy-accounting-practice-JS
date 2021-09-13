/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */


// +  перед PROMPT - говорит, что будет работать с числом

document.addEventListener("DOMContentLoaded", ()=>{;
   
    // const personalMovieDB = {
    //     count: "questionLastFilm",  
    //     movies:{},
    //     actors:{},
    //     genres:[],
    //     privat: false
    // }
    // // const questionLastFilm = +prompt("Сколько фильмов вы уже посмотрели?");
    // for(let i=0; i<2; i++){
    //     const questionHowManyFilms = prompt("Один из последних просмотренных фильмов?"),
    //     questionQuality = +prompt("На сколько оцените его?");
    //     personalMovieDB.movies[questionHowManyFilms] = questionQuality
    //     console.log(i)
    // }
    // console.log(personalMovieDB);
    // console.log();

    //! не забывать
    const wordVar = "Какое-то слово";
    console.log({wordVar});
    //! не забывать



//замыкание
    const nameDomain = (domain) =>{
            return (url)=>{
            return `https://${url}.${domain}`
        };
    }
    const newNameDomain = nameDomain("com");
    console.log(newNameDomain("domain-name"));




    const fruit = "some fruit";
    console.log("поиск символов(букв) с помощью indexOf, в этом случаем я нашел букву 'u', ее числовой порядок - " + fruit.indexOf('u'))
    const logg = "Hello World"
    console.log({logg});

    //toLowerCase и toUpperCase - выводит новое значеине(слово) если было текст.toUpperCase - выводит ТЕКСТ - после превращение - это уже отдельное слово

    console.log("Обрезка(slice) слов Hello World - (1, 4) " + logg.slice(1, 4));
    console.log("Обрезка(slice) слов Hello World - (-8, -4) " + logg.slice(-8, -4));
    console.log("Обрезка(substring) слов Hello World - (4, 8) " + logg.substring(4, 8)); // принимает start и end похожий способ slise
    console.log("Обрезка(substr) слов Hello World - (4, 5) " + logg.substr(4, 5));// 4 - означает с какого символа по счету начинать обрезку, 5 - означает, сколько символов обрезать уже после того, как определился с какого символа по счету (в нашем случае после 4)
    const num = 1.2;
    console.log(Math.round(num));
    const num2 = "2.5"
    console.log(parseInt(num2)); // переводит строку в число
    console.log(parseFloat(num2)); // возвращает число в дисетичной
});