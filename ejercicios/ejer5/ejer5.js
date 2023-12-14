'use strict'

let correo = "edmendez@gmail.com";

let after = correo.indexOf("@");
let nameUser = correo.slice(0, after);

alert(nameUser);