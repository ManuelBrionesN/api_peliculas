
fetch('https://studio-ghibli-films-api.herokuapp.com/Ponyo')
    .then(response =>response.json())
    .then(resp => {
        crearTarjeta(resp)
})
    .catch(error => console.error(error))

//aca estara la function

function crearTarjeta(resp){
 
        console.log(resp);
        card.innerHTML =
        `
        <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="${resp.poster}" alt="Card image cap">
                <div class="card-body">
                    <h2 class="card-title">${resp.title}</h2>
                    <hr>
                    <p class="card-text">${resp.synopsis}</p>
                    <hr>
                    <p class="card-text">titulo romanizado:${resp.hepburn}</p>
                    <hr>
                    <p class="card-text">año de estreno:${resp.release}</p>
                    <hr>
                    <p class="card-text">director:${resp.director}</p>
                    <a href="#" class="btn btn-primary">Mas Informacion</a>
                </div>
        </div>

        `

    
}