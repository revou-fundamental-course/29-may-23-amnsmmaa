// window.onscroll = function() {myFunction()};
// var navbar = document.getElementById("navbar");
// var sticky = navbar.offsetTop;
// function myFunction() {
//   if (window.pageYOffset >= sticky) 
//   {
//     navbar.classList.add("sticky")
//   } 
//   else 
//   {
//     navbar.classList.remove("sticky");
//   }
// } 


var jeneng = prompt("Masukkan Nama Kamu")
document.getElementById("jeneng").innerText = jeneng

function validateform(){
    var name = document.forms["message-form"]["full-name"].value;
    var email = document.forms["message-form"]["email"].value;
    var telp = document.forms["message-form"]["telp"].value;
    var date = document.forms["message-form"]["tgl-lahir"].value;
    var gender = document.forms["message-form"]["gender"].value;
    var messages = document.forms["message-form"]["Messages"].value;

    if (name == "" || email =="" || telp == "" || date == "" || gender == "" || messages == ""){
        alert("Input tidak boleh ada yang kosong !!!")
    }
    else{
        document.getElementById("sendername").innerText = name;
        document.getElementById("senderemail").innerText = email;
        document.getElementById("sendertelp").innerText = telp;
        document.getElementById("senderlahir").innerText = date;
        document.getElementById("senderkelamin").innerText = gender;
        document.getElementById("senderpesan").innerText = messages;
    }
    return false;    
}  

// document.getElementById("kirim").addEventListener('click', function(){
//     console.log(text)
// })
    
// document.getElementById("input-nama").addEventListener('input', function(){
//     var nama = document.getElementById("input-nama").value
//     console.log(nama)
// })