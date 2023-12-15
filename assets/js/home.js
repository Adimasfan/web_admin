// contoh function dengan return
function welcome(){
    return("selamat datang di aplikasi web");
}
welcome();
document.getElementById("title").innerHTML= welcome(); 
// contoh function dengan parameter
function created(tanggal, programmer=" fandy"){
    return("tanggal "+tanggal+" programmer :"+programmer);
}
let tanggal = new Date();
let tglsekarang = tanggal.getDay()+"-"+tanggal.getMonth()+"-"+tanggal.getFullYear();
document.getElementById("subtitle").innerHTML= created(tglsekarang); 
// contoh membuat Array
let menus=["menu_1","menu_2","menu_3"];
console.log(menus.length);   //untuk menampilkan panjang array 
console.log(menus[1]); //untuk menampilkan value array berdasarkan index
// menambahkan 1 atau lebih di dalam Array
menus.push("menus_4"); //untuk menambahkan elemen array di akhir
menus.pop(); //untuk menghapus elemen array terakhir
menus.unshift("menus_0"); //untuk menambahkan elemen array di awal
menus.shift(); //untuk menghapus elemen array di awal
menus.splice(2,1,"menu ABC"); //untuk mengganti string menu
console.log(menus); //untuk menampilkan panjang array dan berdasarkan index atau keseluruhan(

let submenu =["sub_1", "sub_2"];
// fungsi concat untuk(): untuk menggabungkan 2 array menjadi satu
let join = menus.concat(submenu);
console.log(join);
//  fungsi forwach
let spesifikasi = ["HTML/CSS", "PHP", "Javascript", "DB mySQL"];
let ulspek = document.getElementById("listspek");
// menggunakan forEach untuk menambahkan elemen <li> ke dalam <ul>
spesifikasi.forEach(function(sp){
    // membuat elemen li
    let listpek = document.createElement("li");
    // menetapkan teks elemen <li> dengan nilai dari array
    listpek.textContent = sp;
    // menambahkan elemen <li> ke dalam <ul>
    ulspek.appendChild(listpek);
});
// contoh variabel dengan value berupa data object
let dataPerusahaan = {alamat :"jalan mojopahit no.35 SBY", telp :" 0831-2354-7566", email :" hariko@gmail.com"};
document.getElementById("lokasi").innerHTML = dataPerusahaan.alamat;
document.getElementById("no").innerHTML = dataPerusahaan.telp;
document.getElementById("email").innerHTML = dataPerusahaan.email;