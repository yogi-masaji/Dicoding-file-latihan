// Untuk menetapkan objek pada variabel gunakan tanda kurung kurawal { } dalam menginisialisasinya. Kemudian di dalamnya kita tetapkan key: value.

let pengguna = {
    nama:{
        Depan: "Yogi",
    Belakang: "masaji",
    },
    umur: 20,
    isMuggle: false,
    stuff: ["lari", " olahraga", " kucing"]
};

console.log("hallo, nama saya " + pengguna.nama.Depan + " " + pengguna.nama.Belakang);
console.log("umur saya " + pengguna.umur + " tahun");
console.log("saya menyukai " + pengguna.stuff );