document.getElementById("submit").addEventListener("click",function(event)
{

event.preventDefault();


try{
var users=JSON.parse(localStorage.getItem("users")) || [];
if(!Array.isArray(users))
    {
        users=[];
    }
    
}
catch(e)
{
    users=[];
}
var name=document.getElementById("name").value.trim();
var email=document.getElementById("email").value.trim();
var age=document.getElementById("age").value.trim();
var password=document.getElementById("password").value.trim();

if(name && email && password && age)
    {
        var user=users.find(user=>user.email==email);
        if(user)
            {
                alert("user already exist");
            }
        else{
            user={name:name,email:email,age:age,password:password};
        users.push(user);
        localStorage.setItem("users",JSON.stringify(users));
        alert("user created successfully");}

    }
else{
    alert("please enter all the three fields");
}

});