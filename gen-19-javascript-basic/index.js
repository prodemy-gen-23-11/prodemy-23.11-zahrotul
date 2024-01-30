
function luasSegitiga(alas,tinggi){
    return(alas*tinggi*0.5)
}

function luasPersegi(sisi){
    return(sisi*sisi)
}

function luasPersegiPanjang(lebar,tinggi){
    return(lebar*tinggi)
}

function luasJajarGenjeng(alas,tinggi){
    return(alas*tinggi)
}

function luasTrapesium(sisi1,sisi2,tinggi){
    return(0.5*(sisi1+sisi2)*tinggi)
}

function luasLayangLayang(diagonal1, diagonal2){
    return((diagonal1*diagonal2)/2)
}

function luasLingkaran(jari){
    return(22/7*jari*jari)
}

let alasSegitiga = 3, tinggiSegitiga = 4
let sisiPersegi = 8
let alasPersegiPanjang = 5, tinggiPersegiPanjang = 8
let alasJajarGenjang = 8, tinggiJajarGenjang = 7
let sisi1Trapesium = 9, sisi2Trapesium = 8, tinggiTrapesium = 4
let diagonal1Layang = 11, diagonal2Layang = 11
let jariLingkaran = 35

console.log("Luas Segitiga : " + luasSegitiga(alasSegitiga,tinggiSegitiga))
console.log("Luas Persegi : "+ luasPersegi(sisiPersegi))
console.log("Luas Persegi Panjang : "+luasPersegiPanjang(alasPersegiPanjang,tinggiPersegiPanjang))
console.log("Luas Jajar Genjang : "+luasJajarGenjeng(alasJajarGenjang,tinggiJajarGenjang))
console.log("Luas Trapesium : "+luasTrapesium(sisi1Trapesium,sisi2Trapesium,tinggiTrapesium))
console.log("Luas Layang-layang : "+luasLayangLayang(diagonal1Layang,diagonal2Layang))
console.log("Luas Lingkaran : "+luasLingkaran(jariLingkaran))

