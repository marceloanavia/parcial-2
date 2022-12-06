let productos = [
    {
        nombre: "Lámpara",
        categorias: ["cocina", "living", "comedor"],
        imagen: "img/lampara.png",
        descripcion: "Lampara colgante con decoración Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        precio: 200
    },
    {
        nombre: "Silla",
        categorias: ["living", "comedor", "jardin"],
        imagen: "img/silla.png",
        descripcion: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        precio: 400
    },
    {
        nombre: "Mesa",
        categorias: ["living", "comedor"],
        imagen: "img/mesa.png",
        descripcion: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        precio: 800
    },
    {
        nombre: "Cama",
        categorias: ["dormitorio"],
        imagen: "img/cama.png",
        descripcion: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        precio: 1200
    },
    {
        nombre: "Escritorio",
        categorias: ["dormitorio", "living"],
        imagen: "img/escritorio.png",
        descripcion: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        precio: 900
    },
    {
        nombre: "Parrilla",
        categorias: ["jardin", "cocina"],
        imagen: "img/parrilla.png",
        descripcion: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        precio: 1600
    }
];

let carrito = [];

document.querySelector("select").addEventListener("change", (e) => {

    let categoria = e.target.value;

    let filtrado = productos.filter((producto) => producto.categorias.includes(categoria));

    let filtradoHTML = filtrado.toHTML();

    document.querySelector("#productos").replaceChildren(...filtradoHTML);
});

document.querySelector("#carrito").addEventListener("click", (e) => {




    let carritoHTML = carrito.toCarrito();
    //carritoHTML.className = "display";

    document.querySelector("#carrito-section").replaceChildren(...carritoHTML);
    

    document.querySelector("#carrito-contenedor").classList.toggle("none");
    document.querySelector("#carrito").classList.toggle("cerrar");
    document.querySelector("#carrito").classList.toggle("abrir");


});

String.prototype.capitalize = function() {

    return this.charAt(0).toUpperCase() + this.substring(1).toLowerCase();
}

Array.prototype.toHTML = function() {

    return this.map((producto) => {




        let div = document.createElement("div");
        div.style.width = "18rem";
        div.className = "contenedor-producto"

        let img = document.createElement("img");
        img.setAttribute("src", producto.imagen);
        img.style.width = "18rem";
        div.append(img);

        let cardBody = document.createElement("div");

        let titulo = document.createElement("h5");
        titulo.innerText = producto.nombre;
        titulo.className = "titulo";
        cardBody.append(titulo);

        let descripcion = document.createElement("p");
        descripcion.innerText = producto.descripcion;
        descripcion.className = "none";
        cardBody.append(descripcion);

        let iconos = document.createElement("div");
        iconos.className = "iconos";

        let detalles = document.createElement("div");
        
        let iconoDetalles = document.createElement("img");
        iconoDetalles.setAttribute("src", "img/detalle.png");
        iconoDetalles.style.width = "4rem";
        iconoDetalles.addEventListener("click", (e) => {
            
            const target = e.target;
            const parent = target.parentElement.parentElement.previousElementSibling;

            parent.classList.toggle("none");
            
        })
        detalles.append(iconoDetalles);

        iconos.append(detalles);

        let agregar = document.createElement("div");
        
        let iconoAgregar = document.createElement("img");
        iconoAgregar.setAttribute("src", "img/agregar.png");
        iconoAgregar.style.width = "4rem";
        iconoAgregar.addEventListener("click", (e) => {

            switch (titulo.innerText) {
                case "Lámpara":
                    carrito.push(productos[0]);
                    break;
                case "Silla":
                    carrito.push(productos[1]);
                    break;
                case "Mesa":
                    carrito.push(productos[2]);
                    break;
                case "Cama":
                    carrito.push(productos[3]);
                    break;
                case "Escritorio":
                    carrito.push(productos[4]);
                    break;
                case "Parrilla":
                    carrito.push(productos[5]);
                    break;
                default:
                    break;
            }

            
        })
        agregar.append(iconoAgregar);

        iconos.append(agregar);

        cardBody.append(iconos);

        let precio = document.createElement("p");
        precio.innerText = producto.precio;
        precio.className = "precio";
        cardBody.append(precio);

        div.append(cardBody);

        let categorias = document.createElement("ul");
        
        producto.categorias.forEach((categoria) => {

            let li = document.createElement("li");
            li.innerText = categoria.capitalize();
            categorias.append(li);
        });

        div.append(categorias);

        return div;
    });
}

Array.prototype.toCarrito = function() {

    return this.map((producto) => {



        let div = document.createElement("div");
        div.className = "carrito-lista";

        let img = document.createElement("img");
        img.setAttribute("src", producto.imagen);
        img.className = "imagen-lista"
        div.append(img);

       

        let titulo = document.createElement("h5");
        titulo.innerText = producto.nombre;
        div.append(titulo);

        

        let categorias = document.createElement("ul");
        
        producto.categorias.forEach((categoria) => {

            let li = document.createElement("li");
            li.innerText = categoria.capitalize();
            categorias.append(li);
        });

        div.append(categorias);

        let precio = document.createElement("p");
        precio.innerText = producto.precio;
        div.append(precio);

        let cardBody = document.createElement("div");

        let agregar = document.createElement("div");
        
        let iconoEliminar = document.createElement("img");
        iconoEliminar.setAttribute("src", "img/eliminar.png");
        iconoEliminar.className = "eliminar-lista";
        iconoEliminar.addEventListener("click", (e) => {



            const target = e.target;
            const parent = target.parentElement.parentElement.parentElement;

            parent.remove();

            switch (titulo.innerText) {
                case "Lámpara":
                    carrito.splice(carrito.findIndex(producto => producto.nombre === "Lámpara"), 1);
                    break;
                case "Silla":
                    carrito.splice(carrito.findIndex(producto => producto.nombre === "Silla"), 1);
                    break;
                case "Mesa":
                    carrito.splice(carrito.findIndex(producto => producto.nombre === "Mesa"), 1);
                    break;
                case "Cama":
                    carrito.splice(carrito.findIndex(producto => producto.nombre === "Cama"), 1);
                    break;
                case "Escritorio":
                    carrito.splice(carrito.findIndex(producto => producto.nombre === "Escritorio"), 1);
                    break;
                case "Parrilla":
                    carrito.splice(carrito.findIndex(producto => producto.nombre === "Parrilla"), 1);
                    break;
                default:
                    break;
            }

        })
        
        agregar.append(iconoEliminar);

        cardBody.append(agregar);

        

        div.append(cardBody);



        return div;
    });
}