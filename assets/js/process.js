console.log("assalamualaikum");
// dom access-> getElementById, dom property innerHTML
document.getElementById("judul").innerHTML="Form Login"; 
// dom access-> getElementById, dom property STYLE
document.getElementById("judul").style.color = "white";
// dom access-> getElementById, dom property value
// document.getElementById("username").value = "lp3i";
// cara menulis fuction 
// fuction nama_fungsi(){}
// cara pertama

function ceklogin(){
    const admin     = "user"
    const adminpass = "1234"
    let txt_user = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    // validasi
    if(txt_user==""){
        alert("username wajib di isi")
    }
    if(txt_user==""){
        alert("password wajib di isi")
    }
    else{
        if(txt_user !== admin){
            alert("username salah!!!")
        }
        else if(password !== adminpass){
            alert("password salah!!!");
        }
        else{
            window.location = "home.html";
        }
    }
    // document.write("username = "+txt_user+ "<br> password= "+password);   //menampilkan hasil output
    // alert("login berhasil")
    //alert("login berhasil"+"username = "+txt_user+ "<br> password= "+password); //menampilkan data

    document.getElementById("username").value ="";
    document.getElementById("password").value ="";
}