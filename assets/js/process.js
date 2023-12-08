console.log("assalamualaikum");
// dom access-> getElementById, dom property innerHTML
document.getElementById("judul").innerHTML="Form Login"; 
// dom access-> getElementById, dom property STYLE
document.getElementById("judul").style.color = "blue";
// dom access-> getElementById, dom property value
// document.getElementById("username").value = "lp3i";
// cara menulis fuction 
// fuction nama_fungsi(){}
// cara pertama

function ceklogin(){
    let txt_user = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    // document.write("username = "+txt_user+ "<br> password= "+password);   //menampilkan hasil output
    // alert("login berhasil")
    alert("login berhasil"+"username = "+txt_user+ "<br> password= "+password); //menampilkan data

    document.getElementById("username").value ="";
    document.getElementById("password").value ="";
}