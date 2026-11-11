/*
Tema: Mini-analisador de dados da Academia Box R13.

Objetivo:
- Classificar as atividades.
- Calcular o total e a média de vagas.
- Filtrar atividades por disponibilidade.
- Preparar os dados para exibição na página.
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

// 2. Processar as atividades
function processarAtividade(atividade, limiteMinimo = 5) {
    return {
        nome: atividade.nome,
        categoria: atividade.categoria,
        vagas: atividade.vagas,
        duracao: atividade.duracao,
        atendeLimite: atividade.vagas >= limiteMinimo
    };
}

// 3. Classificar a disponibilidade
function classificarDisponibilidade(resultado) {
    if (resultado.vagas === 0) {
        return "Lotado";
    } else if (resultado.vagas <= 5) {
        return "Últimas vagas";
    } else {
        return "Disponível";
    }
}

// 4. Aplicar map para processar todas as atividades
const resultados = atividades.map(function(atividade) {
    const resultado = processarAtividade(atividade);

    return {
        ...resultado,
        status: classificarDisponibilidade(resultado)
    };
});

console.table(resultados);

// 5. Aplicar filter para selecionar atividades com últimas vagas
const atividadesUltimasVagas = resultados.filter(function(atividade) {
    return atividade.status === "Últimas vagas";
});

console.table(atividadesUltimasVagas);

// 6. Aplicar reduce para calcular o total de vagas
const totalVagas = resultados.reduce(function(total, atividade) {
    return total + atividade.vagas;
}, 0);

console.log("Total de vagas:", totalVagas);

// 7. Calcular a média de vagas
const mediaVagas = totalVagas / resultados.length;

console.log("Média de vagas:", mediaVagas);

// 8. Calcular a quantidade de atividades
const totalAtividades = resultados.length;

// 9. Selecionar as áreas de resultados no HTML
const areaResultados = document.querySelector("#resultado-atividades");
const areaResumo = document.querySelector("#resumo-atividades");

if (areaResultados === null || areaResumo === null) {
    console.error("Erro: área de resultados não encontrada.");
} else {
    console.log("Áreas de resultados encontradas com sucesso!");
}

// 10. Criar os cartões das atividades
function montarElementoAtividade(atividade) {
    const cartao = document.createElement("div");
    cartao.classList.add("cartao-atividade");

    const titulo = document.createElement("h3");
    titulo.textContent = atividade.nome;

    const categoria = document.createElement("p");
    categoria.textContent = "Categoria: " + atividade.categoria;

    const vagas = document.createElement("p");
    vagas.textContent = "Vagas disponíveis: " + atividade.vagas;

    const duracao = document.createElement("p");
    duracao.textContent = "Duração: " + atividade.duracao + " minutos";

    const status = document.createElement("p");
    status.textContent = "Status: " + atividade.status;
    status.classList.add("status-atividade");

    if (atividade.status === "Lotado") {
        cartao.classList.add("lotado");
    } else if (atividade.status === "Últimas vagas") {
        cartao.classList.add("ultimas-vagas");
    } else {
        cartao.classList.add("disponivel");
    }

    cartao.append(titulo, categoria, vagas, duracao, status);

    return cartao;
}

// 11. Inserir os cartões e o resumo na página
if (areaResultados !== null && areaResumo !== null) {

    resultados.forEach(function(atividade) {
        const cartao = montarElementoAtividade(atividade);

        areaResultados.append(cartao);
    });

    const resumo = document.createElement("p");

    resumo.textContent =
        `Total de atividades: ${totalAtividades} | ` +
        `Total de vagas: ${totalVagas} | ` +
        `Média de vagas: ${mediaVagas.toFixed(1)}`;

    areaResumo.append(resumo);
}
