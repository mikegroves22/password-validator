let password = document.getElementById("password");

password.addEventListener("input", (e)=>{

    if(e.target.value.length>0){

    document.getElementById("pass-length").innerHTML = e.target.value.length

       if( e.target.value.match(/[a-z]/) != null ){
        document.getElementById("lower").classList.add("check")
        document.getElementById("lower-img").src = "greentick.png"
       }
       else{
        document.getElementById("lower").classList.remove("check")
        document.getElementById("lower-img").src = "x.png"
       }
        
       
       if( e.target.value.match(/[A-Z]/) != null ){
        document.getElementById("upper").classList.add("check")
        document.getElementById("upper-img").src = "greentick.png"

       }
       else{
        document.getElementById("upper").classList.remove("check")
        document.getElementById("upper-img").src = "x.png"

       }
       
       
       if( e.target.value.match(/[0-9]/) != null ){
        document.getElementById("number").classList.add("check")
        document.getElementById("number-img").src = "greentick.png"

       }
       else{
        document.getElementById("number").classList.remove("check")
        document.getElementById("number-img").src = "x.png"

       }
       
       if( e.target.value.match(/[^A-Za-z0-9]+/) != null ){
        document.getElementById("special").classList.add("check")
        document.getElementById("special-img").src = "greentick.png"

       }
       else{
        document.getElementById("special").classList.remove("check")
        document.getElementById("special-img").src = "x.png"

       }
       
    }
    else{
        document.getElementById("lower").classList.remove("check")
        document.getElementById("upper").classList.remove("check")
        document.getElementById("number").classList.remove("check")
        document.getElementById("special").classList.remove("check")

        document.getElementById("lower-img").src = "x.png"
        document.getElementById("upper-img").src = "x.png"
        document.getElementById("number-img").src = "x.png"
        document.getElementById("special-img").src = "x.png"

        document.getElementById("pass-length").innerHTML = 0
        
    }

})

