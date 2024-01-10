
const loginr=document.querySelector('.login-section') 
const Loginlink=document.querySelector('.Login-link')
const registerlink=document.querySelector('.register-link')
registerlink.addEventListener('click',()=>{ /* Cuando este elemento es clickeado, la función de flecha (callback) anónima se ejecuta.*/
    loginr.classList.add('active')
})
Loginlink.addEventListener('click',()=>{
    loginr.classList.remove('active')
})
