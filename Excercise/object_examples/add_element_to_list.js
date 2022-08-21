const compose = (...functions) => data => functions.reduceRight((value, func) => func(value), data);

// Se utiliza $ para identificar que una variable o constante hace referencia
// a elementos del DOM
const $DESCRIPTION = document.getElementById("description");
const $CALORIAS = document.getElementById("calorias");
const $CARBOIDRATOS = document.getElementById("carboidratos");
const $PROTEINAS = document.getElementById("proteinas");
const ERROR_CLASS = "is-invalid";
const SUCCESS_CLASS = "is-valid";

// Arreglo de elementos
const LIST = [];


// Asignacion de evntos siempre que se desea asignar un evento aun elemento del DOM
// es necesario utilizar addEventListener
$DESCRIPTION.addEventListener("keypress", () => $DESCRIPTION.classList.remove(ERROR_CLASS));
$CALORIAS.addEventListener("keypress", () => $CALORIAS.classList.remove(ERROR_CLASS));
$CARBOIDRATOS.addEventListener("keypress", () => $CARBOIDRATOS.classList.remove(ERROR_CLASS));
$PROTEINAS.addEventListener("keypress", () => $PROTEINAS.classList.remove(ERROR_CLASS));

// Limpiando inputs
const cleanInputs = () => {
    $DESCRIPTION.classList.remove(SUCCESS_CLASS);
    $DESCRIPTION.value = "";
    $CALORIAS.classList.remove(SUCCESS_CLASS);
    $CALORIAS.value = "";
    $CARBOIDRATOS.classList.remove(SUCCESS_CLASS);
    $CARBOIDRATOS.value = "";
    $PROTEINAS.classList.remove(SUCCESS_CLASS);
    $PROTEINAS.value = "";
};

// Agregar elementos en la lista
const addElement = () => {
    const newItem = {
        description: $DESCRIPTION.value,
        calorias: $CALORIAS.value,
        carboidratos: $CARBOIDRATOS.value,
        proteinas: $PROTEINAS.value,
    };
    LIST.push(newItem);
    cleanInputs();
};

// funcion para validar los inputs
const validateInputs = () => {
    // Por cuestion de buenas practicas el resultado de una condición
    // Ternaria tiene que ser asignada a una variable o constante
    const DESCRIPTION_CLASS = (($DESCRIPTION.value) ? SUCCESS_CLASS : ERROR_CLASS);
    $DESCRIPTION.classList.add(DESCRIPTION_CLASS);

    const CALORIAS_CLASS = (($CALORIAS.value) ? SUCCESS_CLASS : ERROR_CLASS);
    $CALORIAS.classList.add(CALORIAS_CLASS);

    const CARBOIDRATOS_CLASS = (($CARBOIDRATOS.value) ? SUCCESS_CLASS : ERROR_CLASS);
    $CARBOIDRATOS.classList.add(CARBOIDRATOS_CLASS);

    const PROTEINAS_CLASS = (($PROTEINAS.value) ? SUCCESS_CLASS : ERROR_CLASS);
    $PROTEINAS.classList.add(PROTEINAS_CLASS);

    if ($DESCRIPTION.value && $CALORIAS.value && $CARBOIDRATOS.value && $PROTEINAS.value) {
        addElement();
    }
};