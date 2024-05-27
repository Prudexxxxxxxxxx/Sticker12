    update() 
document.querySelector('.notification__form button').addEventListener('click',
function(){
    let tim = document.querySelector('.notification__form input').value;
  
    // let message = document.querySelector('.notification__form textarea').value;

     
    let summ = document.querySelector('.prof').value;
    
    
   
    let dat = document.getElementById('dat');
    let datt = dat.value.split('-').reverse().join('.') ;
    time = tim +' - '+ datt


    let info = document.querySelector('.notification__info');

    if(!tim ){
        info.textContent = 'Укажите заявку'
        info.style.opacity = 1
        setTimeout(() => {
            info.style.opacity = 0
        },2000)
        setTimeout(()=>{
            info.textContent = ''
        },3000)
        return
    }
    localStorage.setItem(time,summ)
  
    update() 
} )

document.querySelector('.notification__list > button').addEventListener('click',
function(){
        
    if (localStorage.length && confirm('Очистить список?')){
        localStorage.clear()
        update() 
        document.querySelector('.notification__list').hidden = true   
    }
    else if (!localStorage.length){
        alert('Уведомлений нет')
    }

})

function update() {
   
    
    if(!localStorage.length) {
        document.querySelector('.notification__list').hidden = true  
    } else {
        document.querySelector('.notification__list').hidden = false  
    }
    document.querySelector('.notification__list > div').innerHTML=''
    document.querySelector('.notification__info').textContent=''
 
        for (let key of Object.keys(localStorage) ){
            console.log(localStorage.getItem(key))
         
            document.querySelector('.notification__list > div').insertAdjacentHTML('beforeend' , `
            <div class="notification__item " >
            <div >  ${localStorage.getItem(key)} - ${key} </div>           
            <button data-time = "${key}" >&times;</button>
         </div> 
            `)
          
        
       
   
            let vsego =document.getElementsByClassName('notification__item').length;
            document.querySelector('.col').textContent = 'Заявок ' +  vsego  ;

            
  
        
        document.querySelector('.notification__form textarea').value = '' 
        if(document.querySelector('.audioAlert')) {
            document.querySelector('.audioAlert').remove()
           
           
        }
} }

document.querySelector('.notification__list').addEventListener('click', function(e){
    if(!e.target.dataset.time){
        return
    }
    localStorage.removeItem(e.target.dataset.time)
    update()
})


