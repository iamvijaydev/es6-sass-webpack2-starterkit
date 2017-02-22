import findGreet from './findGreet'

export default class Main {
    constructor(props) {
        this.greet = findGreet();
    }

    genMsg() {
        let user = prompt('Hey, what\'s your name', 'Vijay Dev');
        let msg;

        if (user != null) {
            msg = `${this.greet}, ${user}`;
        } else {
            msg = this.greet;
        }

        return msg;
    }
}