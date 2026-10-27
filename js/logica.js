/*
Tema: Mini-analisador de dados da Academia Box R13.

Entrada: Limite mínimo de vagas informado pelo usuário.

Processamento:
- Classificar as atividades.
- Identificar as categorias.
- Calcular o total de vagas.
- Encontrar a atividade com mais vagas.

Saída: Exibir as atividades e o resumo dos dados.

Pseudocódigo:
1. Cadastrar as atividades.
2. Solicitar o limite de vagas.
3. Validar a entrada.
4. Classificar as atividades.
5. Identificar as categorias.
6. Calcular os totais.
7. Encontrar a atividade com mais vagas.
8. Exibir os resultados e permitir novas consultas.

Teste de mesa:

Entrada: 10
Atingem o limite: Musculação e Avaliação física.

Entrada: 3
Atingem o limite: Musculação, Cardio, Funcional e Avaliação física.

Entrada: 0
Atingem o limite: todas as 5 atividades.

Resumo esperado em todas as consultas:
Total de atividades: 5
Total de vagas: 43
Atividade com mais vagas: Musculação (20 vagas).
*/

// 1. Cadastrar as atividades
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

// 2. Controlar a repetição das consultas
let continuar = "sim";

while (continuar === "sim") {

    // Solicitar o limite mínimo de vagas
    const limiteVagas = prompt("Digite o limite mínimo de vagas:");

    // Verificar se a consulta foi cancelada
    if (limiteVagas === null) {
        console.log("Consulta cancelada.");
        break;
    }

    // Validar a entrada
    if (limiteVagas.trim() === "") {
        console.log("Erro: você não digitou nenhum valor.");
    } else {
        // Converter o valor para número
        const limite = Number(limiteVagas);

        if (Number.isNaN(limite)) {
            console.log("Erro: digite um número válido.");
        } else if (!Number.isInteger(limite) || limite < 0 || limite > 100) {
            console.log("Erro: digite um número inteiro entre 0 e 100.");
        } else {
            console.log(`Limite mínimo de vagas: ${limite}`);

            // 3. Classificar as atividades e preparar a tabela
            const tabelaResultados = [];

            for (let i = 0; i < atividades.length; i++) {
                const atividade = atividades[i];
                let status;

                if (atividade.vagas === 0) {
                    status = "Lotado";
                } else if (atividade.vagas <= 5) {
                    status = "Últimas vagas";
                } else {
                    status = "Disponível";
                }

                // Verificar se a atividade atinge o limite
                if (atividade.vagas >= limite) {
                    console.log(
                        `${atividade.nome}: Atingiu o limite mínimo de ${limite} vagas.`
                    );
                } else {
                    console.log(
                        `${atividade.nome}: Está abaixo do limite mínimo de ${limite} vagas.`
                    );
                }

                tabelaResultados.push({
                    nome: atividade.nome,
                    categoria: atividade.categoria,
                    vagas: atividade.vagas,
                    duracao: atividade.duracao,
                    status: status,
                    atendeLimite: atividade.vagas >= limite ? "Sim" : "Não"
                });
            }

            // 4. Exibir os resultados em uma tabela
            console.table(tabelaResultados);

            // 5. Identificar as categorias
            for (const atividade of atividades) {
                switch (atividade.categoria) {
                    case "Força":
                        console.log(`${atividade.nome}: Treinamento de força.`);
                        break;

                    case "Resistência":
                        console.log(`${atividade.nome}: Treinamento de resistência.`);
                        break;

                    case "Grupo":
                        console.log(`${atividade.nome}: Atividade em grupo.`);
                        break;

                    case "Individual":
                        console.log(`${atividade.nome}: Atendimento individual.`);
                        break;

                    case "Avaliação":
                        console.log(`${atividade.nome}: Avaliação física.`);
                        break;

                    default:
                        console.log(`${atividade.nome}: Categoria não identificada.`);
                }
            }

            // 6. Calcular o total de atividades e vagas
            let totalAtividades = 0;
            let totalVagas = 0;

            for (const atividade of atividades) {
                totalAtividades++;
                totalVagas += atividade.vagas;
            }

            console.log(`Total de atividades: ${totalAtividades}`);
            console.log(`Total de vagas disponíveis: ${totalVagas}`);

            // 7. Encontrar a atividade com mais vagas
            let atividadeMaiorVagas = atividades[0];

            for (let i = 1; i < atividades.length; i++) {
                if (atividades[i].vagas > atividadeMaiorVagas.vagas) {
                    atividadeMaiorVagas = atividades[i];
                }
            }

            console.log(
                `Atividade com mais vagas: ${atividadeMaiorVagas.nome} (${atividadeMaiorVagas.vagas} vagas)`
            );
        }
    }

    // 8. Perguntar se deseja realizar outra consulta
    continuar = prompt(
        "Deseja realizar outra consulta? Digite sim para continuar ou não para sair."
    );

    if (continuar !== null) {
        continuar = continuar.trim().toLowerCase();
    } else {
        continuar = "não";
    }
}

// 9. Encerrar o programa
console.log("Programa encerrado.");
