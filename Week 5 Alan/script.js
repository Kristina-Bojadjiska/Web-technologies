document.getElementById("btnGetTicket").addEventListener("click", e=>{
    
    let age = document.getElementById("txtAge").value;
    let output = "";
    
    if (age < 14){
        output = "Childs Ticket";
    }
    else if (age < 65){
        output = "Adult Ticket";
    }
    else{
        output = "Travel Free";
    }
    
    document.getElementById("result").innerHTML = output;
});