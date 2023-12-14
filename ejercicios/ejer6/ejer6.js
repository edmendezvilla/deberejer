'use strict'

let urlFacebook =  "facebook.com/edmendez";

let post = urlFacebook.indexOf("/");
let nameFacebook = urlFacebook.slice(post+1);

alert(nameFacebook);