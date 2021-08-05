// // // // alert('test')
// // // var namaVariable = '1234'
// // // document.write(typeof(namaVariable) + '<br>')
// // // namaVariable = 1234
// // // document.write(typeof(namaVariable)+ '<br>')
// // // namaVariable = true
// // // // document.write(typeof(namaVariable))

// // // var namaPengguna = prompt('Silahkan masukan nama kamu ',"dojo setia")

// // // document.write('Hai ' + namaPengguna +', selamat datang di DOJOBOX.id' )

// // // var konfirmasi = confirm("Mau tetap disini kan ? ")
// // // var hasil = (konfirmasi==true)? "iya donk" : "gak deh.."
// // // document.write(hasil + "<br>")

// // var angka = parseInt(prompt("Masukan angka yang mau di test : "))

// // if(angka>10){
// //     document.write("Angka yang dimasukkan lebih dari 10")
// // }

// // // var nama = 'topan'
// // var nama = prompt('masukan nama : ', 'nama pengunjung')
// // if(nama=='topan'){
// //     document.write('Seorang peserta')
// // } else{
// //     document.write('nama yang dimasukan bukan topan')
// // }

// var nilai = prompt('Masukan anagka : ')
// if(nilai % 2 == 0){
//     document.write(nilai + 'merupakan bilangan genap')
// }else if(nilai % 2 == 1){
//     document.write(nilai + 'merupakan bilangan ganjil')
// }else{
//     document.write(nilai + 'bukan merupakan bilangan')
// }

var nk = parseInt(prompt('Masukan nilai kamu ','0-100'))
switch(true){
    case (nk >= 90) :
        document.write('Nilai Kamu A')
        break
    case (nk >= 80) :
        document.write('Nilai Kamu B')
        break
    case (nk >= 70) :
        document.write('Nilai Kamu C')
        break
    case (nk >= 60) :
        document.write('Nilai Kamu D')
        break
    default :
        document.write('Nilai kamu E')
}