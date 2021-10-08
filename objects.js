"use strict";

const obj = new Object();

const options = {
    name: "Madara",
    width: 1024,
    heught: 1024,
    colors: {
       border: 'black',
       background: 'green'
    }

}

for(let key in options ){
    if(typeof(options[key]) === 'object'){
        for(let i in options[key] ){
            console.log(i + ": " + options[key][i] );
        }
    }
    else{
        console.log(key + ": " + options[key]); 
    }
}
