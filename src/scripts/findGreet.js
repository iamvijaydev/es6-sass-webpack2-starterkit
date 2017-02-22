export default function findGreet () {
    let time = (new Date).getHours();
    let greet;

    if (time < 12) {
        greet = 'Good morning';
    }

    if (time > 12) {
        greet = 'Good afternoon';
    }

    if (time > 18) {
        greet = 'Good evening';
    }

    return greet;
}