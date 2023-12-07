function simpanNama(){
    const namaPengguna = document.getElementById('inputNama').value;

    if(!localStorage.getItem('namaPengguna') && namaPengguna === ""){
        alert("Silahkan isi nama untuk melanjutkan")
    }
    else if(!localStorage.getItem('namaPengguna') ){
        localStorage.setItem('namaPengguna', namaPengguna);
        window.location.href='page/main.html'
    }
    else{
        alert("Anda sudah pernah masuk, klik ok untuk melanjutkan")
        window.location.href='page/main.html'
    } 
}