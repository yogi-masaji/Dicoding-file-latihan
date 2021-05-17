function sapaan(nama, bahasa) {
    if(bahasa === "English"){
        console.log("Good Morning " + nama + "!");
    }else if (bahasa === "French"){
        console.log("Bonjour " + nama + "!" );
    }else {
        console.log("Selamat Pagi " + nama + "!");
    }
}

sapaan("Yogi" , "French");