//creamos objeto
const persona = {
    nombre: "Laura",
    edad: 24,
    profesion: "Desarrolladora",
    describir() {
        return `${this.nombre} tiene ${this.edad} años y trabaja como ${this.profesion}.`;
    }
};

//lo mostramos
console.log(persona.describir());