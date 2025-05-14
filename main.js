const datos = [{
    id:1,
    title: "Iron Man",
    year: 2008

},{
    id:1,
    title: "Spiderman:Homecoming",
    year:2017
},{
    id:3,
    title: "Avenger:EndGame",
    year: 2019
}
];

/*--Sincrono:-- *//*
Este ejemplo es sicrono, osea que los datos estan ahi en el local, los llamamos y lo invoca

*/
console.log(datos[2].title);
//---------------------------
function getDatos(){
    return datos;
}
console.log(getDatos());


/*--Asincronia:-- *//*
Imaginemos que los datos no lo tenemos en local, sino que estan en un fichero o APi o URL, ahi es donde entra la asincronia esa llamada a la base de datos o a una URL externa
tiene un pequeño retardo que es cuando esperamos que cargue la otra informacion   
*/

/*EJEMPLO #1 = ASINCRONIA SIN PROMESAS*/ console.log("EJEMPLO #1 = ASINCRONIA SIN PROMESAS")
function getDatos2(){
    setTimeout(()=> {console.log(datos)}, 2000 ) //Recibe dos parametros, primero una funcion en colba, segundo representa el tiempo en milisengundos que queremos que se retarde esa funciion - ponemos 2000 milisegundos que serian 2segundos
}

//console.log(getDatos2());

/*EJEMPLO #2 = ASINCRONIA CON PROMESAS*/ console.log("EJEMPLO #2 = ASINCRONIA CON PROMESAS")

/*--PROMISE-- */  console.log("-- PROMISES --")
/* Se usa cuando el codigo este listo lo pueda resolver o si ocurre un error lo puede rechazar. Una promesa (Promise) es un objeto que representa el resultado de una operación asíncrona (por ejemplo, cargar datos de internet). Esa operación puede terminar en:

✅ Resuelta (Resolve) → se obtuvo el resultado.

❌ Rechazada (rejected) → ocurrió un error.

⏳ Pendiente (pending) → aún no termina.
*/
function getDatos3(){
    return new Promise((resolve, reject)=>{ //En promise se ponen dos parametros el una funcion con resolve y reject

        if(datos.length===0){
            reject(new Error("Los datos estan vacios"))  //Ocurre un error y va aparecer esto
        }
        setTimeout(()=>{    //Si todo es correcto la resuelve
            resolve(datos);
        },2000)

    })  
}
//.then(): Se utiliza cuando se resuelva la promesa, es decir lo datos correctos
//.catch(): Se utiliza si tenemos un error
getDatos3()
.then((correcto)=>console.log(correcto))
.catch((error)=> console.log(error.message));

/*EJEMPLO #3 CON ASYNC Y AWAIT QUE ES ASINCRONA*/ /*

En vez de usar el .then y el .catch se usa estas variables

.await: Se pone dentro de una funcion await - Se coloca porque es asincrona
async: Se pone con una funcion
*/

async function Prueba_async_await() {
    const peliculas = await getDatos3();
    console.log(peliculas);
}
Prueba_async_await()

/*EJEMPLO PRACTICA*/ console.log("Ejemplo Practica")  
const edad = 22;
promesa= new Promise((resolve,reject)=>{

    if(edad<21){
        reject(new Error("No esa edad es inferior"))
    }
    else if(edad>21){
        setTimeout(()=>{
            reject(new Error("No esa edad es superior"))
        },2000)
        
    }
    else{
        setTimeout(()=>{
            resolve("Exacto, mi edad es "+edad+" años")
        },2000)
    }
})

promesa
.then((correcto)=> console.log(correcto))
.catch((error) => console.log(error.message))


/*-- FETCH --*/ console.log("-- FETCH --"); /*
fetch() es una peticion, función de JavaScript que permite hacer peticiones HTTP (como GET, POST, etc.) a servidores o APIs externas.
Por ejemplo, puedes pedir una lista de películas, usuarios o productos desde un servidor.

*/
// fetch("https://pokeapi.co/api/v2/pokemon/ditto")
fetch("https://jsonplaceholder.typicode.com/users")
.then((respo1)=>respo1.json())
.then((data1)=> {
    console.log(data1);
})
.catch((error)=>console.log("Ocurrio un error",error.message));

//FORMA #2 CON ASYNC Y AWAIT

async function Prueba_Fetch() {
    const respo1 = await fetch("https://jsonplaceholder.typicode.com/users")
    const data1 = respo1.json();
    console.log(data1);
}