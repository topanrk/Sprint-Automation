//WHILE
/* var ulang = 1

while(ulang <=10){
    document.write('Selamat Datang' + '<br>')
    ulang +=1
} */

//FOR
/* for(var coba =1; coba<=10; coba++){
    document.write('Hello Semua ' + '<br>')
} */

// Latihan 
/* var nama = 1

while(nama<=5){
    document.write('Siswa dengan no induk ' +nama+ ' member TA Vista' + '<br>')
    nama +=1
}

for(var nama=6; nama<=10; nama++){
    document.write('Siswa dengan no induk ' +nama+ ' member TA Intan' +'<br>')
} */

// Array
/* var buah = []
buah = ['apel', 'belimbing', 'campedak', 'duku','salak','pisang']

document.write(typeof(buah) + '<br>' )
document.write(buah)
document.write('<br>')
document.write(buah.length)
document.write('<br>')
document.write(buah[4])
document.write('<br>')
var iniAdalahFngsi =function(){
    alert('hai')
}

var myArr = ['teks',1234,true, iniAdalahFngsi,[2,3,4]]
document.write('<br>')
document.write(myArr[4])
document.write(myArr[4][1])

var myArr2 = []
myArr2[0] ='senin'
myArr2[1] = 'seleasa'
// myArr2[2] = 'rabu'
myArr2[3] = 'kamis'
myArr2[3] =undefined
myArr2[2] = 'rabu' */

var buah = []
buah = ['apel', 'belimbing', 'campedak', 'duku','salak','pisang']

// 1.join
/* document.write(buah) */
// document.write(buah.join('<br>'))
//2. push dan pop
//bekerja di akhir element
// push menambahkan element di akhir
// buah.push('duren')
// document.write(buah.join('<br>'))
//pop
//menghapus
// buah.pop()
// document.write(buah.join('<br>'))

//3. unshift dan shift
//unshift digunakan untuk menambahkan array di awal element
buah.unshift('jambu')
// document.write(buah.join('<br>'))
//shift digunakan untuk menghilangkan 
//mengahpus element  array di awal
buah.shift()
// document.write(buah.join('<br>'))

//4. splice
//splice (index awal, jmlhapus, elementbaru1, ...., elementbaru-n)
buah.splice(2,2,'jeruk','semangka')
document.write(buah.join('<br>'))

//5. slice
//memotong array untuk dijadikan array baru

var newBuah = buah.slice(1,3)
// document.write('<br>')
// document.write('<br>')
// document.write(newBuah.join('<br>'))

//6.for each dan map
//for each
document.write('<br>')
document.write('<br>')
buah.forEach (function(e,i){

    document.write((i+1) + '.' +e+ '<br>')
})

// map => mengembalikan array
var buahBaru = buah.map(function(e,i){
    return e + ' enak dimakan.'
})

document.write('<br>')
document.write('<br>')

document.write(buahBaru.join('<br>'))


