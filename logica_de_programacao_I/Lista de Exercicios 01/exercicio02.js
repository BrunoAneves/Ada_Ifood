// Temos a lista de empregados com seus respectivos nomes e salários:


// Utilize o método `some` para verificar se pelo menos um dos empregados tem salário maior ou igual a R$ 1.500,00.

// Utilize o método `some` novamente para verificar se pelo menos um dos empregados tem salário menor ou igual a R$ 1.000,00.

// Obs: Pode utilizar o `for` .


const empregados = [
  { nome: 'João', salario: 1200 },
  { nome: 'Maria', salario: 1500 },
  { nome: 'Pedro', salario: 1800 },
  { nome: 'Ana', salario: 1400 },
  { nome: 'Carlos', salario: 2000 }

]

const salarioMaiorOuIgual1500 = []

empregados.some((element) => {
  if (element.salario >= 1500) {
    salarioMaiorOuIgual1500.push(element)
  }
})

if (salarioMaiorOuIgual1500 != !salarioMaiorOuIgual1500) {
  console.log(`Existem ${salarioMaiorOuIgual1500.length} funcionários com salários iguais ou superiores a 1500`)
} else {
  console.log('Todos os funcionários têm salários abaixo de 1500')
}




const salarioMenorOuIgual1000 = []

empregados.some((element) => {
  if (element.salario <= 1000) {
    salarioMenorOuIgual1000.push(element)
  }
})

if (salarioMenorOuIgual1000 != !salarioMenorOuIgual1000) {
  console.log(`Existem ${salarioMenorOuIgual1000.length} funcionários com salários iguais ou inferior a 1000`)
} else {
  console.log('Todos os funcionários têm salários superior de 1000')
}