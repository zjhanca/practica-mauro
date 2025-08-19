class Persona {
    constructor(id, nombre, apellido, fechaNacimiento) {
        this._id = id;
        this._nombre = nombre;
        this._apellido = apellido;
        this._fechaNacmiento = fechaNacimiento;
    }

    // Getter y Setter para id
    get getId(){
        return this._id;
    }

    get getNombre(){
        return this._nombre;
    }

    get getApellido(){
        return this._apellido;
    }

    get getFechaNacimiento(){
        return this._fechaNacmiento;
    }

    get getEdad(){
        const fechaNacimiento = new Date(this._fechaNacmiento);
        const hoy = new Date();
        const edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
        return edad;
    }

    set setId(numero){
        this._id = numero;
    }

    set setNombre(texto){
        this._nombre = texto;
    }

    set setApellido(texto){
        this._apellido = texto;
    }

    set setFechaNacimiento(texto){
        this._fechaNacmiento = texto
    }

}

export default Persona;
