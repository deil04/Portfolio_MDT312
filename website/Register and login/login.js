window.onload = loginLoad;
function loginLoad(){
	var form = document.getElementById("myLogin");
	form.onsubmit = checkLogin;
}

function checkLogin(){
	//ถ้าตรวจสอบแล้วพบว่ามีการ login ไม่ถูกต้อง ให้ return false ด้วย

	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	const username = urlParams.get('username');
	const password = urlParams.get('password');

	var user = document.forms["myLogin"]["username"];
	var pass = document.forms["myLogin"]["password"];

	if(user.value!=username||pass.value!=password){
		alert("Username หรือ Password ไม่ถูกต้อง");
        return false;
	}
	alert("Login สำเร็จ");
}

			