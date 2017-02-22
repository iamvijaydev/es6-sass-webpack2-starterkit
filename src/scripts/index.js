import '../scss/styles.scss';
import Main from './Main';

let inst = new Main();
let node = document.querySelector('#print-msg');

node.innerHTML = inst.genMsg();