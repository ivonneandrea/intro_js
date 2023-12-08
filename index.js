//elementos del Dom
const precioSpan = document.querySelector(".precio-inicial");
const total = document.querySelector(".valor-total");
const sumar = document.querySelector("#btn-sumar");
const restar = document.querySelector("#btn-restar");
const cantidad = document.querySelector(".cantidad");

//variables
    let precio = 400000;
    let totalValue = 0;
    precioSpan.innerHTML = precio;
    total.innerHTML = totalValue;

//funciones
const sumarPrecio = () => {
  precio += 400000;
  total.innerHTML = precio;
  cantidad.innerHTML = Number(cantidad.innerHTML) + 1;
};

const restarPrecio = () => {
  precio -= 400000;
  total.innerHTML = precio;
  cantidad.innerHTML = Number(cantidad.innerHTML) - 1;
};

//eventos
sumar.addEventListener("click", () => {
  let currentQuantify = Number(cantidad.innerHTML) + 1;
  cantidad.innerHTML = currentQuantify;
  total.innerHTML = precio * currentQuantify;
});

restar.addEventListener("click", () => {
  let currentQuantify = Number(cantidad.innerHTML) - 1;
  cantidad.innerHTML = currentQuantify;
  total.innerHTML = precio * currentQuantify;
});
