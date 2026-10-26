/*
Tema: Mini-analisador de dados da Academia Box R13.

Entrada: Um limite mínimo de vagas informado pelo usuário.

Processamento:

- Percorrer as atividades cadastradas.
- Classificar as atividades pela quantidade de vagas.
- Identificar a categoria de cada atividade.
- Calcular o total de vagas e encontrar a atividade com mais vagas.

Saída: Exibir as atividades classificadas e um resumo dos dados.

Pseudocódigo:

1. Cadastrar as atividades da academia.
2. Solicitar um limite mínimo de vagas.
3. Validar o valor informado.
4. Percorrer todas as atividades.
5. Classificar cada atividade conforme suas vagas.
6. Identificar sua categoria.
7. Calcular o total de vagas e o maior valor.
8. Exibir os resultados e permitir uma nova consulta.
   */

const atividades = [
    {
        nome: "Musculação",
        categoria: "Força",
        vagas: 20,
        duracao: 60
    },
    {
        nome: "Cardio",
        categoria: "Resistência",
        vagas: 8,
        duracao: 30
    },
    {
        nome: "Funcional",
        categoria: "Grupo",
        vagas: 3,
        duracao: 45
    },
    {
        nome: "Personal",
        categoria: "Individual",
        vagas: 0,
        duracao: 50
    },
    {
        nome: "Avaliação física",
        categoria: "Avaliação",
        vagas: 12,
        duracao: 30
    }
];
const limitevagas = prompt("Digite o limite mínimo de vagas:");
const limite = Number(limitevagas);

if (limitevagas === null) {
    console.log("Operação cancelada pelo usuário.");
}
 else if (limiteVagas.trim() === "") {
    console.log("Erro: você não digitou nenhum valor.");
}
 else if (Number.isNaN(limite)) {
    console.log("Erro: digite um número válido.");
}
 else if (!Number.isInteger(limite) || limite < 0 || limite > 100) {
    console.log("Erro: digite um número inteiro entre 0 e 100.");
}
 else {
    console.log(`Limite mínimo de vagas: ${limite}`);
}

for (let i = 0; i < atividades.length; i++){
    const atividade = atividades[i];

    if (atividade.vagas === 0) {
        
    }
}