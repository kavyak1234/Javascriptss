document.getElementById("btn").addEventListener("click",()=>{
    let x=parseInt(document.getElementById("fno").value);
    let y=parseInt(document.getElementById("sno").value);

    p=document.getElementById("parent");
    let head=document.createElement("h1");
    head.innerText=`sum is ${x+y}`;
    p.appendChild(head);

})
document.getElementById("clear").addEventListener("click",()=>{
    document.getElementById("fno").value="";
    document.getElementById("sno").value="";
    p=document.getElementById("parent");

p.removeChild(document.getElementsByTagName("h1")[0]);

})