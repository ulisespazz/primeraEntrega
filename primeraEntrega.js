let seguir = true
let producto
let Precio = 0
let total = 0
let condicion
let tipoProducto

class productos {
    constructor(nombre,producto,precio){
    this.nombre = nombre
    this.producto = producto
    this.precio = precio
    }
}
class Carro {
    constructor(total){
    this.carrito = []
    this.total = total
    }
    CarritoAdd(producto) {
        this.carrito.push(producto)
        this.total += producto.precio
    }
    Mostrar(){
        this.carrito.forEach(listado => {
            console.log(listado);
        });
    }
}

const producto1 = new productos("Agua", "Bebida", 60)
const producto2 = new productos("CocaCola", "Bebida", 130)
const producto3 = new productos("Pepsi", "Bebida", 130)
const producto4 = new productos("7up", "Bebida", 120)
const producto5 = new productos("Mirinda", "Bebida", 110)
const producto6 = new productos("Speed", "Bebida", 150) 
const producto7 = new productos("Gomitas", "Golosina", 60)
const producto8 = new productos("Caramelos", "Golosina", 60)
const producto9 = new productos("Alfajor", "Golosina", 100)
const producto10 = new productos("Chupetin", "Golosina", 40)
const producto11 = new productos("Chicle", "Golosina", 60) 
const producto12 = new productos("PapasLays", "Snacks", 100)
const producto13 = new productos("Doritos", "Snacks", 120)
const producto14 = new productos("3d", "Snacks", 100)
const producto15 = new productos("Cheetos", "Snacks", 110)
const producto16 = new productos("Pringles", "Snacks", 400) 
const carro = new Carro(0)

while(seguir){
    producto = prompt("Ingrese que producto decea comprar.(Bebidas - Golosinas - Snacks)").toLowerCase()
    while ((producto!="bebidas") && (producto!="golosinas") && (producto!="snacks")){
        alert("Error ingrese un producto que sea correcto.")
        producto = prompt("Ingrese que producto decea comprar.(Bebidas - Golosinas - Snacks)").toLowerCase()
    }
    // Switch para que el usuario elija su producto/s a comprar.
    switch(producto){
        case "bebidas":
            tipoProducto = prompt("Elija que tipo de Bebida decea comprar. (Agua - CocaCola - Pepsi - 7up - Mirinda - Speed)").toLowerCase()
            while((tipoProducto!="agua")&&(tipoProducto!="cocacola")&&(tipoProducto!="pepsi")&&(tipoProducto!="7up")&&(tipoProducto!="mirinda")&&(tipoProducto!="speed")){
                alert("Error ingrese una Bebida correcta")
                tipoProducto = prompt("Elija que tipo de Bebida decea comprar. (Agua - CocaCola - Pepsi - 7up - Mirinda - Speed)").toLowerCase()
            }
            switch (tipoProducto){
                case "agua":
                    alert("Eligió Agua - Precio: $60")
                    carro.CarritoAdd(producto1)
                    break;
                case "cocacola":
                    alert("Eligió Coca-Cola - Precio: $130")
                    carro.CarritoAdd(producto2)
                    break;
                case "pepsi":
                    alert("Eligió Pepsi - Precio: $130")
                    carro.CarritoAdd(producto3)
                    break;
                case "7up":
                    alert("Eligió 7up - Precio: $120")
                    carro.CarritoAdd(producto4)
                    break;
                case "mirinda":
                    alert("Eligió Mirinda - Precio: $110")
                    carro.CarritoAdd(producto5)
                    break;
                case "speed":
                    alert("Eligió Speed - Precio: $150")                  
                    carro.CarritoAdd(producto6)
                    break;
            }
            break;
        case "golosinas":
            tipoProducto = prompt("Elija que tipo de Golosina decea comprar. (Gomitas - Caramelos - Alfajor - Chupetin - Chicle)").toLowerCase()
            while((tipoProducto!="gomitas")&&(tipoProducto!="caramelos")&&(tipoProducto!="alfajor")&&(tipoProducto!="chupetin")&&(tipoProducto!="chicle")){
                alert("Error ingrese una Golosina correcta")
                tipoProducto = prompt("Elija que tipo de Golosina decea comprar. (Gomitas - Caramelos - Alfajor - Chupetin - Chicle)").toLowerCase()
            }
            switch (tipoProducto){
                case "gomitas":
                    alert("Eligió Gomitas - Precio: $60")
                    carro.CarritoAdd(producto7)
                    break;
                case "caramelos":
                    alert("Eligió Caramelos - Precio: $60")
                    carro.CarritoAdd(producto8)
                    break;
                case "alfajor":
                    alert("Eligió Alfajor - Precio: $100")
                    carro.CarritoAdd(producto9)
                    break;
                case "chupetin":
                    alert("Eligió Chupetin - Precio: $40")
                    carro.CarritoAdd(producto10)
                    break;
                case "chicle":
                    alert("Eligió Chicle - Precio: $60")
                    carro.CarritoAdd(producto11)
                    break;
            }
            break;
        case "snacks":
            tipoProducto = prompt("Elija que tipo de Snacks decea comprar. (PapasLays - Doritos - 3D - Cheetos - Pringles)").toLowerCase()
            while((tipoProducto!="papaslays")&&(tipoProducto!="doritos")&&(tipoProducto!="3d")&&(tipoProducto!="cheetos")&&(tipoProducto!="pringles")){
                alert("Error ingrese un Snack correcto")
                tipoProducto = prompt("Elija que tipo de Snacks decea comprar. (PapasLays - Doritos - 3D - Cheetos - Pringles)").toLowerCase()
            }
            switch(tipoProducto){
                case"papaslays":
                    alert("Eligió PapasLays - Precio: $100")
                    carro.CarritoAdd(producto12)
                    break;
                case"doritos":
                    alert("Eligió Doritos - Precio: $120")
                    carro.CarritoAdd(producto13)
                    break;
                case"3d":
                    alert("Eligió 3D - Precio: $100")
                    carro.CarritoAdd(producto14)
                    break;
                case"cheetos":
                    alert("Eligió Cheetos - Precio: $110")
                    carro.CarritoAdd(producto15)
                    break;
                case"pringles":
                    alert("Eligió Pringles - Precio: $400")
                    carro.CarritoAdd(producto16)
                    break;
            }
            break;
    }
    //condicion para preguntarle al usuario si quiere seguir comprando.
    let condicion = prompt("¿Desea seguir comprando? Si/No").toLowerCase()
        if (condicion == "no"){
            seguir = false;
            break
        }
}
alert('Para ver el carro ir a la consola.')
carro.Mostrar()
alert(`El total de su compra es de $${carro.total}`)