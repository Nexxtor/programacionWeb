class Student {
    constructor(carnet, name, lastname) {
        this._carnet = carnet;
        this._name = name;
        this._lastname = lastname;
    }

    get carnet() { return this._carnet }
    get name() { return this._name }
    get lastname() { return this._lastname }

    // Hacen falta las validaciones antes de la asignación
    set carnet(carnet) { this._carnet = carnet }
    set name(name) { this._name = name }
    set lastname(lastname) { this._lastname = lastname }
}

export default Student;