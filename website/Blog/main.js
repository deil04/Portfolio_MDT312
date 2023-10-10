
function postFunction(){
    var text = document.getElementById("text1").value;
    var topic = document.getElementById("topic1");
    var comment = document.getElementById("comment1");
    var comment1 = document.getElementById("comment2"); 

    
    if(topic.innerHTML == ""){
        console.log("topic");
        topic.innerHTML = text;
    }
    else if(comment.innerHTML == ""){
        console.log("comment1");
        comment.innerHTML = text;
    }
    else if(comment1.innerHTML == ""){
        console.log("comment2");
        comment1.innerHTML = text;
    }
}

function clearFunction() { 
    document.getElementById("topic1").innerHTML = ""; 
    document.getElementById("comment1").innerHTML = ""; 
    document.getElementById("comment2").innerHTML = ""; 

}


