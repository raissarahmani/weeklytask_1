let i
function kasir (harga) {
    if (harga>= 1000000) {
        i= 0.9
        console.log("Anda mendapatkan diskon sebesar 10%. Total belanja anda sebesar " + i*harga)
    }
    else if (harga>= 500000 && harga< 1000000) {
        i= 0.95
        console.log("Anda mendapatkan diskon sebesar 5%. Total belanja anda sebesar " + i*harga)
    }
    else {
        i= 1
        console.log("Anda tidak mendapat diskon. Total belanja anda sebesar " + i*harga)
    }
}

kasir (5000000)