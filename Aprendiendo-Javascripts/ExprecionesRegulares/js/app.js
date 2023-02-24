// notacion literal
//        variable       patron
const exprecionRegular =  /hola/i;

// notacion de objeto
//   instancia de la exprecion   constructor
const exprecionRegularObjeto = new RegExp("hola","i");
// el "test" retorna true or false si encuentra la palabra en el String
console.log(exprecionRegular.test("hola"));

/*caracteres especiales*/
//se utilizan para realizar validaciones
//los corchetes se utilizan para que encuentre esos caracteres en esa palabra
const regExpLiteral = /[hu]/gi;
console.log(regExpLiteral.test("huevo"));

//acepta cualquier caracter de la A a la Z y del 0 al 9
const regExp = /[A-Za-z0-9]/i;
console.log(regExp.test("hola 123 HOLA"));

//acepta solo numeros
const regExp1 = /^\d+$/gi;
console.log(regExp1.test("123"));

//solo letras (sin tildes)
const regExp2 = /^[a-zA-Z ]*$/;
console.log(regExp2.test("huevo"));

//solo letras (con tildes)
const regExp3 = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
console.log(regExp3.test("índio"));

//validar un correo (no acepta mayusculas)
const regExp4 = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;
console.log(regExp4.test("gabo123@gmail.com"));