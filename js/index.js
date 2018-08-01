let a = prompt('введіть значення "a"',);
let b = prompt('введіть значення "b"',);
let c = prompt('введіть значення "c"',);

function quadraticEquation (a,b,c) {
    let d = b * b - 4 * a * c; // discriminant
    alert('Дискрімінант = ' + d);
    if ( d > 0) {
        let x1 = (-b + Math.sqrt(d)) / (2 * a);
        let x2 = (-b - Math.sqrt(d)) / (2 * a);
        alert('x1 = ' + x1 + ' / ' + 'x2 =' + x2);
    } else if (d == 0) {
        let x = -b / (2*a);
        alert('x = ' + x);
    } else {
        alert('Дискрімінант менше 0 - неможливо розв`язати рівняння.');
    }
}
quadraticEquation (a,b,c);