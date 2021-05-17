function sapaan(nama, bahasa) {
    if(bahasa === "English"){
        return("Good Morning " + nama + "!");
    }else if (bahasa === "French"){
        return("Bonjour " + nama + "!" );
    }else {
        return("Selamat Pagi " + nama + "!");
    }
}

let isiSapaan = sapaan("Yogi" , "French");
console.log(isiSapaan);