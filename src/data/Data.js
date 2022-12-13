const productos = [
{categoria: "Perro" , 
nombre: "Pelota Nudos De Algodon Beast Maxscotas", 
descripcion: "Pelota Dura de Soga Trenzada, Nudo De Juguete Para Perros y otras Mascotas",
img:"/src/assets/multimedia/images/imagesSoga2Nudos.jpg", 
precio:600, 
precioTotal:600,
cantidad:1 , 
stock:10,
id:1},

{categoria:"Perro",
nombre:"Alfombra Olfativa Perros Gatos",
descripcion:"MEDIDAS Largo 75 cm Ancho: 50 cm. Es un juguete interactivo para estimular y evitar el aburrimiento.",
img:"/src/assets/multimedia/images/alfombra3.jpg",
precio:4500,
precioTotal:4500,
cantidad:1,
stock:20,
id:2},

{categoria:"Perro","nombre":"Alfombra Olfativa Juguete Interactivo",
descripcion:"Alfombra de Olfato 30x30cm Es un juguete interactivo para estimular y evitar el aburrimiento.",
img:"/src/assets/multimedia/images/alfombra2.jpg",
precio:5200,
precioTotal:5200,
cantidad:1,
stock:20,
id:3},

{categoria:"Perro",
nombre:"Earth Rated Bolsa Desperdicio",
descripcion:"Bolsas Bio-degradables Earth Rated Bolsas extra largas y extra fuertes para proteger sus manos.",
img:"/src/assets/multimedia/images/bolsaPerros.jpg",
precio:1200,
precioTotal:1200,
cantidad:1,
stock:50,
id:4},

{categoria:"Perro",
nombre:"Alfombra Olfativa Juguete Interactivo",
descripcion:"Alfombra de Olfato 30x30cm Es un juguete interactivo para estimular y evitar el aburrimiento.",
img:"/src/assets/multimedia/images/alfombra3.jpg",
precio:2500,
precioTotal:2500,
cantidad:1,
stock:12,
id:5},

{categoria:"Perro",
nombre:"Pelota Nudos De Algodon Beast Maxscotas",
descripcion:"Juguete hecho de una cuerda trenzada, colorida y muy duradera.",
img:"/src/assets/multimedia/images/bolsaPerros.jpg",
precio:700,
precioTotal:700,
cantidad:1,
stock:20,id:6},

{categoria:"Perro",
nombre:"Juguete Soga 3 Nudos",
descripcion:"Es un juguete para perros de todas las edades y tamaños que está hecho de una cuerda trenzada, colorida y muy duradera.",
img:"/src/assets/multimedia/images/alfombra2.jpg",
precio:1200,
precioTotal:1200,
cantidad:1,
stock:20,id:7},

{categoria:"Perro",
nombre:"Juguete Soga Cuerda 2 Nudos",
descripcion:"Soga Doble Nudo Para mascotas Ideal Para Nivelar el Estres. Largo 15cm ancho 2cm",
img:"/src/Multimedia/Images/Soga2Nudos.jpg",
precio:900,
precioTotal:900,
cantidad:1,
stock:50,
id:8}


    ]

    export const getProducts = () =>{
        return new Promise((resolve, reject)=>{
          setTimeout(()=>{
            resolve(productos)
          },500)
        })
      }

    export default {productos}