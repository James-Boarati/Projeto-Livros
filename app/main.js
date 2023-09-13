let livros = []
const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
getBuscarLivrosDaAPI()

async function getBuscarLicvosDaAPI() {
    const res = await fetch(endpointDaAPI) 
    livros = await res.json()
    console.table(livros)
}