import findGreet from './findGreet'

export default class Main {
    constructor(props) {
        this.greet = findGreet();
    }

    genMsg() {
        let defaultValue = 'Vijay Dev';
        let user = prompt('Hey, what\'s your name', defaultValue);
        let msg;

        if (user != null) {
            msg = `${this.greet}, ${user}`;
        } else {
            msg = `${this.greet}, ${defaultValue}`;
        }

        return msg;
    }
}