window.onload = pageLoad;

function pageLoad(){
	document.getElementById("start").onclick= startGame;

}

function startGame(){
	alert("Ready");
	addBox();
	timeStart();
}

function timeStart(){
	var TIMER_TICK = 1000;
	var timer = null;
	var min = 0.5; // 0.5 minute
	var second = min*60; 
	var x = document.getElementById('clock');
	//setting timer using setInterval function
	var remainingtime = second;
	
	timer = setInterval(function timeCount(){
		var allbox = document.querySelectorAll("#layer div");
		if (allbox.length === 0 && remainingtime>0){
			clearInterval(timer);
			x.innerHTML = "win";
			clearScreen();
		}else if (remainingtime === 0 && allbox.length > 0){
			clearInterval(timer);
			x.innerHTML = "lose";
			clearScreen();
		}else{
			x.innerHTML = remainingtime+"s";
			remainingtime--;
		}
	}, TIMER_TICK);
}

function addBox(){
	// สร้างกล่องตาม input ที่เราใส่ 
	var numbox =  parseInt(document.getElementById("numbox").value);
	var gameLayer = document.getElementById("layer") ;
	var colorDrop = document.getElementById("color").value;
	for (var i =0; i<numbox;i++){
		var tempbox = document.createElement("div");
		tempbox.className = "square" ;
		tempbox.id = "box"+i;
		tempbox.style.left = Math.random() * (500 - 25) + "px";
		tempbox.style.top = Math.random() * (500 - 25) + "px";
		tempbox.style.backgroundColor = colorDrop;
		//add element to HTML node
		gameLayer.appendChild(tempbox);
		bindBox(tempbox);
	}
}

function bindBox(box){
	//เมื่อกดแล้ว กล่องจะหายไป
	box.onclick = function(){
		box.parentNode.removeChild(box);
	}
}

function clearScreen(){
	// ทำการลบ node ของกล่องทั้งหมด ออกจาก หน้าจอ
	var allbox = document.querySelectorAll("#layer div") ;

	//delete all  div
	for (var i=0;i<allbox.length;i++){
		addBox[i].parentNode.removeChild(addBox[1]);
	}
}




