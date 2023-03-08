document.addEventListener("DOMContentLoaded",()=>{
    fetchData();
});

const fetchData = async ()=>{
    console.log("obteniendo datos...");
    try{
        loadingData(true);

        const res = await fetch('https://rickandmortyapi.com/api/character');
        const data = await res.json();
        pintarCard(data);

    }catch(error){
        console.log(error);
    }finally{
        loadingData(false);
    }
};

const pintarCard = (data)=>{
    const cards = document.getElementById('card-dinamicas');
    const templateCard = document.getElementById('template-card').content;
    const fragment = document.createDocumentFragment();
    // console.log(data);

    data.results.forEach(element => {
        // console.log(element);
        const clone = templateCard.cloneNode(true);
        clone.querySelector('h5').textContent = element.name;
        clone.querySelector('p').textContent = element.species;
        clone.querySelector('img').setAttribute('src',element.image);

        //guardamos en el fragment para evitar el "reflow"
        fragment.appendChild(clone);
    });
    
    //insertamos el fragment en el template
    cards.appendChild(fragment);
}

//pintar el loading
const loadingData = (estado) =>{
    const loading = document.querySelector('#loading');
    if (estado) {
        loading.classList.remove('d-none');
    }else{
        loading.classList.add('d-none');
    }
}