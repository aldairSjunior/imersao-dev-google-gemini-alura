function pesquisar(){

let section = document.getElementById('resultados-pesquisa');
console.log(section);

let resultados = ''

for (let dado of jogadoresBotafogo2024) {
    // Cria um novo elemento HTML para cada resultado
    resultados += `
        <div class="item-resultado">
            <h2>
                <a href="${dado.link}" target="_blank">${dado.nome}</a>
            </h2>
            <p class="descricao-meta">${dado.apresentacao}</p>
            <p class="idade-meta">Idade: ${dado.idade} </>
            <p class="contrato-meta">Contrato: ${dado.contrato} </>
            <p class="posicao-meta">Posição: ${dado.posicao} </>
            <p class="nacionalidade-meta">Nacionalidade: ${dado.nacionalidade} </>
        </div>
    `;
}

section.innerHTML = resultados
}
