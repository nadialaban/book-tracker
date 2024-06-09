class Model {
    init(description) {
        this._backup = description

        if (description) {
            this.id = parseInt(description.id)
        }
    }

    save() {

    }

    reset() {
        this.init(this._backup)
    }
}

export default Model