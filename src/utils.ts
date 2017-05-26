export function getHelloName(name: String): String {
    return `Hello, ${name}`;
}

export function infoComida(comida: Comida): String {
    return 'un plato de '+comida.nombre+' tiene '+comida.calorias+' calorias';
}

interface Comida {
    nombre: string;
    calorias: number;
}