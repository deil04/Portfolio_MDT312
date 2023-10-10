window.onload = pageLoad;
function pageLoad(){
	var form = document.getElementById("myForm");
	form.onsubmit = validateForm;
}

function validateForm() {
    //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
    
    var x = document.forms["myForm"]["password"][0];
    var y = document.forms["myForm"]["password"][1];
    if(x.value != y.value){
        document.getElementById('errormsg').innerHTML = "Password ไม่ตรงกัน";
        alert("Password ไม่ตรงกัน");
        return false;
    }
    alert("ผ่าน");
}