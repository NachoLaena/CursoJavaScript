class Producto {
    constructor(x, y, z, v) {
        this.id = x;
        this.item = y;
        this.stock = z;
        this.precio = v;
    }
}
let i, z, n, id, it, st, pr = null;
let merca = [{
    id: 1,
    item: "tv",
    stock: 45,
    precio: 12345
}, {
    id: 2,
    item: "celu",
    stock: 4,
    precio: 123
}, {
    id: 3,
    item: "nose",
    stock: 7,
    precio: 123778
}];

do {

    n = parseInt(prompt(`Seleccione una opcion:
    1. Cargar producto.
    2. Buscar producto.
    3. Borrar producto.
    4. Mostrar lista de productos.
    5. Salir`));

    switch (n) {
        case 1:
            id = parseInt(prompt(`Ingrese la id:`));
            it = prompt(`Ingrese el nombre:`);
            st = parseInt(prompt(`Ingrese la cantidad:`));
            pr = parseInt(prompt(`Ingrese precio:`));

            merca.push(new Producto(id, it, st, pr));
            break;

        case 2:
            z = parseInt(prompt(`Ingrese la id del producto que desea buscar:`));
                for (i = 0; i < merca.length; i++) {
                    if (merca[i].id == z) {
                        console.log(merca[i])
                    };
                };
            break;

        case 3:
            z = parseInt(prompt(`Ingrese la id del producto que desea borrar:`));
                for (i = 0; i < merca.length; i++) {
                    if (merca[i].id == z) {
                        merca.splice(i,1);
                    };
                };
            break;


        case 4:
            console.log(merca);
            break;

        case 5:
            break;

        default:
            alert(`El numero ingresado no coincide con ninguna de las opciones, intente nuevamente`);
    }
}
while (n != 5);


