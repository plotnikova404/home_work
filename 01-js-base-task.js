const array0 = [3, 2, 1];
const array1 = [3, 4, 2, 5];

function intersect(a0 ,a1) {
   return a0.filter((x) => {return a1.includes(x)});
}

console.log(intersect(array0, array1));