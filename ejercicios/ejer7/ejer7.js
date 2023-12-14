'use strict'
/

let id = "https://ecuador.worldplaces.me/es/view-place/76588703-comercial-mendez.html";
let link = id.indexOf("=");

let idDrive = id.substring(link+1);

alert(idDrive);