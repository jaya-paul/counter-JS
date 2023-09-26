var cnt=document.querySelector("#count");
var count=0;
for(let i=0;i<3;i++)
{
    document.querySelectorAll(".btn")[i].addEventListener("click",function(e){
        const cls=e.currentTarget.classList;
        if(cls.contains("Increase"))
        {
            count++;
        }
        else if(cls.contains("Decrease"))
        {
            count--;
        }
        else{
            count=0;
        }
        cnt.innerHTML=count;
        if(count>0)
        {
            cnt.style.color="green"
        }
        if(count<0)
        cnt.style.color="red"
        if(count===0)
        cnt.style.color="black"



    })
}