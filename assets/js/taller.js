const btnUser = document.getElementById("btnUser");
const nomb = document.getElementById("nomb");
const ape = document.getElementById("ape");
const eda = document.getElementById("eda");
const tel = document.getElementById("tel");
const cell = document.getElementById("cell");
const dire = document.getElementById("dire");
const btnUser2 = document.getElementById("btnUser2");
const nomb2 = document.getElementById("nomb2");
const suel = document.getElementById("suel");
const btnUser3 = document.getElementById("btnUser3");
const btnUser4 = document.getElementById("btnUser4");
//funciones
const userData = () => {
    let nombre = prompt("ingresa tu nombre");
    let apellido = prompt("ingrese apeliido");
    let edad = prompt("ingrese la edad");
    let telefono = prompt("ingrese el telefono");
    let celular = prompt("ingrese el celular");
    let direccion = prompt("ingrese direccion");

    nomb.innerHTML = "Nombre : " + nombre;
    localStorage.setItem("nombre", nombre);

    ape.innerHTML = "Apellido: " + apellido;
    localStorage.setItem("apellido", apellido);

    eda.innerHTML = "Edad: " + edad;
    localStorage.setItem("edad", edad);

    tel.innerHTML = "Telefono: " + telefono;
    localStorage.setItem("telefono", telefono);

    cell.innerHTML = "Celular: " + celular;
    localStorage.setItem("celular", celular);

    dire.innerHTML = "Direccion: " + direccion;
    localStorage.setItem("direccion", direccion);
};
const userData2 = () => {
    let nombre2 = prompt("ingresa tu nombre");
    let sueldo = parseInt(prompt("ingrese el sueldo"));

    nomb2.innerHTML = "Nombre : " + nombre2;
    localStorage.setItem("nombre2", nombre2);

    suel.innerHTML = "sueldo : " + sueldo;
    localStorage.setItem("sueldo", sueldo);
};

const userData3 = () => {
    let selec = prompt(
        "escriba la palabra a traducir: \n casa \n mesa \n perro \n gato"
    );
    selec = selec.toLowerCase();
    switch (selec) {
        case "casa":
            alert("La traduccion es: House");
            break;
        case "mesa":
            alert("La traduccion es: Table");
            break;
        case "perro":
            alert("La traduccion es: Dog");
            break;
        case "gato":
            alert("la traduccion es: cat");
            break;
        default:
            break;
    }
};

const userData4 = () => {
    let dep = prompt("ingrese el departamento al cual quiere saber la capital");
    dep = dep.toLowerCase();
    switch (dep) {
        case "amazonas":
            alert("Su capital es: Leticia");
            break;
        case "antioquia":
            alert("Su capital es: Medellin");
            break;
        case "arauca":
            alert("Su capital es: Arauca");
            break;
        case "atlantico":
            alert("Su capital es: Barranquilla");
            break;
        case "bogota":
            alert("Su capital es: Bogota");
            break;
        case "bolivar":
            alert("Su capital es: Cartagena de Indias");
            break;
        case "boyaca":
            alert("Su capital es: Tunja");
            break;
        case "caldas":
            alert("Su capital es: Manizales");
            break;
        case "caqueta":
            alert("Su capital es: Florencia");
            break;
        case "casanare":
            alert("Su capital es: Yopal");
            break;
        case "cauca":
            alert("Su capital es: Popayan");
            break;
        case "cesar":
            alert("Su capital es: Valledupar");
            break;
        case "choco":
            alert("Su capital es: quibdo");
            break;
        case "cordoba":
            alert("Su capital es: Monteria");
            break;
        case "cundinamarca":
            alert("Su capital es: Bogota");
            break;
        case "guainia":
            alert("Su capital es: Inirida");
            break;
        case "guaviare":
            alert("Su capital es: San Jose del Guaviare");
            break;
        case "huila":
            alert("Su capital es: Neiva");
            break;
        case "la guajira":
            alert("Su capital es: Riohacha");
            break;
        case "magdalena":
            alert("Su capital es: Santa Marta");
            break;
        case "meta":
            alert("Su capital es: Villavicencio");
            break;
        case "narinio":
            alert("Su capital es: Pasto");
            break;
        case "norte de santander":
            alert("Su capital es: Cucuta");
            break;
        case "putumayo":
            alert("Su capital es: Mocoa");
            break;
        case "quindio":
            alert("Su capital es: Armenia");
            break;
        case "risaralda":
            alert("Su capital es: Pereira");
            break;
        case "san andres y providencia":
            alert("Su capital es: San Andres");
            break;
        case "santander":
            alert("Su capital es: Bucaramanga");
            break;
        case "sucre":
            alert("Su capital es: Sincelejo");
            break;
        case "tolima":
            alert("Su capital es: Ibague");
            break;
        case "valle del cauca":
            alert("Su capital es: Cali");
            break;
        case "vaupes":
            alert("Su capital es: Mitu");
            break;
        case "Vichada":
            alert("Su capital es: Puerto carrenio");
            break;

        default:
            break;
    }
};
if (localStorage.getItem("nombre")) {
    nomb.innerHTML = "Nombre :" + localStorage.getItem("nombre");
}
if (localStorage.getItem("apellido")) {
    ape.innerHTML = "Apellido :" + localStorage.getItem("apellido");
}
if (localStorage.getItem("edad")) {
    eda.innerHTML = "Edad :" + localStorage.getItem("edad");
}
if (localStorage.getItem("telefono")) {
    tel.innerHTML = "telefono :" + localStorage.getItem("telefono");
}
if (localStorage.getItem("celular")) {
    cell.innerHTML = "Celular: " + localStorage.getItem("celular");
}
if (localStorage.getItem("direccion")) {
    dire.innerHTML = "direccion :" + localStorage.getItem("direccion");
}
if (localStorage.getItem("nombre2")) {
    nomb2.innerHTML = "Nombre :" + localStorage.getItem("nombre2");
}
if (localStorage.getItem("sueldo")) {
    suel.innerHTML = "sueldo :" + localStorage.getItem("sueldo");
}
//evento
btnUser.onclick = () => {
    userData();
};
btnUser2.onclick = () => {
    userData2();
};
btnUser3.onclick = () => {
    userData3();
};
btnUser4.onclick = () => {
    userData4();
};
