export const Api ={
  baseUrl: "LinkBD",

  authorization: 'YourEmail',

  readAllUrl :() =>Api.baseUrl + '/',
  readOneUrl:(id)=>Api.baseUrl + '/'+id,
  createUrl: () => Api.baseUrl + '/',
  // retornos iguais mas os nomes e caminhos podem ser diferentes
  deleteAllUrl: () => Api.baseUrl + '/',

  deleteUrl:(id) => Api.baseUrl + '/'+id,
// Put para alterar dados existentes
// o id é para identificar item unico, se nao ele pode alterar todo mundo
  updateUrl:(id) => Api.baseUrl + '/' + id,

// ele pega o url + / + id do personagem

// Fazendo o get All para pegar TUDO:
  buildApiGetRequest: url => {
  return fetch(url, {
    method: 'GET',
    headers: new Headers({
      Authorization: Api.authorization,
    })
  })
},



  // Fazendo um Post
  // buildApiPostRequest: (url, body) => {
  //     return fetch(url, {
  //         method: 'POST',
  //         // new significa que ta instanciando um objeto
  //         headers: new Headers({
  //             Authorization: Api.authorization,
  //             'ContentType': 'Application/json'
  //             // Vai criar novo header quando for fazer cadastro novamente, ao criar ele faz um novo pois sao request diferentes a cada personagem
  //         }),
  //         body: JSON.stringify(body)
  //         // Vai transfomar json no formato de string, é esses tres componentes para criar
  //     })
  // },
  buildApiPostRequest: (url, body) => {
      return fetch(url, {
        method: 'POST',
        headers: new Headers({
          Authorization: Api.authorization,
          'Content-Type': 'application/json',
        }),
        body: JSON.stringify(body),
      });
    },

  // Fazer o delete para todos osdados

  buildApiDeleteRequest: url => {
      return fetch(url, {
          method: 'DELETE',
          headers: new Headers({
              Authorization: Api.authorization,
              // Vai criar novo header quando for fazer cadastro novamente, ao criar ele faz um novo pois sao request diferentes a cada personagem
          }),
      });
    },
    // COlocando o Update
    buildApiPutRequest:(url,body)=>{
      return fetch(url, {
        method: 'PUT',
        headers: new Headers({
            Authorization: Api.authorization,
          'Content-Type': 'application/json',
        }),
        body: JSON.stringify(body),
        // pega o body e o trasnformaa em string
      })
    },
}

// Fazer input para alterar os dados


// importar o comportamento do insomomnia para o vs code
