const printSquare= 2
let i
let j

if (typeof printSquare === 'number') {
    for (i=printSquare; i>0; i--) {
        let string = "";
        for (j=1; j<=printSquare; j++) {
            string += j;
        } console.log(string);
    } 
}
else {
    console.log("Data yang dimasukkan harus angka");
}