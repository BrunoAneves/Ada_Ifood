// Exercício 1
// Crie uma função que receba como parâmetro a lista de hotifrutis abaixo que tem três tipos: frutas, legumes e verduras, faça com que essa função retorne o número de itens de cada um desses tipos.
// Sendo que:
// fruta → banana, maçã, abacaxi, melancia, laranja, limão.
// legume → cenoura, batata, brócolis, abóbora, tomate, alho-poró.
// verdura → alface, espinafre, rúcula, couve, agrião, acelga.


const hotifrutis = ['banana', 'agrião', 'maçã', 'abacaxi', 'melancia', 'laranja', 'limão', 'cenoura', 'melancia', 'batata', 'brócolis', 'abóbora', 'tomate', 'alho-poró', 'alface', 'espinafre', 'rúcula', 'couve', 'acelga', 'maçã', 'batata'];



function contadorDeItens(hortifrutis) {
    let frutas = []
    let legumes = []
    let verduras = []


    let contadorFrutas = 0
    let contadorLegumes = 0
    let contadorVerduras = 0

    hortifrutis.forEach((item) => {
        if (['banana', 'maçã', 'abacaxi', 'melancia', 'laranja', 'limão'].includes(item) && !frutas.includes(item)) {
            frutas.push(item)
            contadorFrutas++

        } else if (['cenoura', 'batata', 'brócolis', 'abóbora', 'tomate', 'alho-poró'].includes(item) && !legumes.includes(item)) {
            legumes.push(item)
            contadorLegumes++
        } else if (['alface', 'espinafre', 'rúcula', 'couve', 'agrião', 'acelga'].includes(item) && !verduras.includes(item)) {
            verduras.push(item)
            contadorVerduras++

        }
    })

    return `Temos ${contadorFrutas} frutas, ${contadorLegumes} legumes e ${contadorVerduras} verduras, totalizando ${contadorFrutas + contadorLegumes + contadorVerduras} hortifrutis`
}
console.log(contadorDeItens(hotifrutis))



