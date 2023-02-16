//

const container = document.querySelector('.container');

document.addEventListener('click',(e)=>{
    // console.log(e.target.id)

    if(e.target.id === 'padre'){
        console.log('le diste click al padre')
    }
    
    //se puede usar el Metodo MATCHES para retornar un true o false
    // console.log(e.target.matches('.border-secondary'));
    if(e.target.matches('.border-secondary')){
        console.log('le diste click al hijo');
    }

    // console.log(e.target.dataset.div);
    if(e.target.dataset.div === "divNieto"){
        console.log('le diste click al nieto')
    }

});