let burger,menu;

window.addEventListener("DOMContentLoaded",function(){
    burger=document.querySelector("#burger");
    menu=document.querySelector("#menu");

    burger.addEventListener("click",()=>{
        if(menu.classList.contains('hidden')){
            menu.classList.remove('hidden');
        }else{
            menu.classList.add('hidden');
        }
    });
});

