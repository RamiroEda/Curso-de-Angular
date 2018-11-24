let promise = new Promise(
    function (success, error){
        //Funcion asincrona por medio de promesas

        console.log("Haciendo algo interesante...");

        setTimeout(() => {
            console.log("Eso interesante terminado.");
            success();
        }, 2000);
    }
);

promise.then(
    function(){
        console.log("Todo correcto");
    },
    function(){
        console.error("Algo ha pasado");
    }
);