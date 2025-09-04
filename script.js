document.getElementById("exp-School").addEventListener("click", function () {
    document.getElementById("projects-window").style.display = "none";
    document.getElementById("initial-window").style.display = "none";
    document.getElementById("school-window").style.display = "block";
    document.getElementById("exp-School").style.display = "none";
    document.getElementById("projects-button").style.display = "inline-block";
    document.getElementById("back-button").style.display = "inline-block";
});

document.getElementById("projects-button").addEventListener("click", function () {
    document.getElementById("initial-window").style.display = "none";
    document.getElementById("school-window").style.display = "none";
    document.getElementById("projects-window").style.display = "block";
    document.getElementById("projects-button").style.display = "none";
    document.getElementById("exp-School").style.display = "inline-block";
    document.getElementById("back-button").style.display = "inline-block";
});

document.getElementById("back-button").addEventListener("click", function () {
    document.getElementById("school-window").style.display = "none";
    document.getElementById("projects-window").style.display = "none";
    document.getElementById("initial-window").style.display = "block";
    document.getElementById("exp-School").style.display = "inline-block";
    document.getElementById("projects-button").style.display = "inline-block";
    document.getElementById("back-button").style.display = "none";
    document.getElementById("project-info").style.display = "none";
    document.getElementById("about-projects").style.display = "block";
    document.getElementById("projects-preview").src = "#";
});

function showProject(title, description, technologies, previewLink, githubLink) {
    document.getElementById("initial-window").style.display = "none";
    document.getElementById("school-window").style.display = "none";
    document.getElementById("about-projects").style.display = "none";
    document.getElementById("exp-School").style.display = "none";
    document.getElementById("project-info").style.display = "block";

    document.getElementById("project-title").innerText = title;
    document.getElementById("project-description").innerText = description;
    document.getElementById("project-technologies").innerText = technologies;
    document.getElementById("project-preview").src = previewLink;
    document.getElementById("project-link").href = githubLink;
}

document.getElementById("back-projects").addEventListener("click", function() {
    document.getElementById("project-info").style.display = "none";
    document.getElementById("about-projects").style.display = "block";
    document.getElementById("project-preview").src = "#";
});

document.getElementById("Pj-1").addEventListener("click", function() {
    showProject(
        "Starbucks",
        "Projeto simples de landing page que simula a apresentação de produtos Starbucks, com troca dinâmica de cores e imagens. Clique no copinho! ;)",
        "HTML, CSS, JavaScript",
        "https://lazarobatista.github.io/Starbucks-page/",
        "https://github.com/LazaroBatista/Starbucks-page"
    );
});

document.getElementById("Pj-2").addEventListener("click", function() {
    showProject(
        "WeCare",
        "Projeto simples de landing page que apresenta os serviços da WeCare, com layout moderno e responsivo.",
        "HTML, CSS",
        "https://lazarobatista.github.io/WeCare-page/",
        "https://github.com/LazaroBatista/WeCare-page"
    );
});

document.getElementById("Pj-3").addEventListener("click", function() {
    showProject(
        "EasyShopping",
        "Projeto de landing page moderna e responsiva, destacando a facilidade de realizar compras pelo celular. O layout é clean, com foco em usabilidade e adaptação para diferentes tamanhos de tela.",
        "HTML, CSS",
        "https://lazarobatista.github.io/Easy-shopping/",
        "https://github.com/LazaroBatista/Easy-shopping"
    );
});

document.getElementById("Pj-4").addEventListener("click", function() {
    showProject(
        "Conversor de Moedas",
        "Este projeto converte diferentes valores de moedas: Real, Dólar, Euro, Libra e Bitcoin.É útil para converter rapidamente moedas e saber o valor equivalente, por exemplo: gastei 100 libras, quanto isso dá em reais?",
        "HTML, CSS, JavaScript",
        "https://lazarobatista.github.io/Projeto-Conversor_de_moedas/",
        "https://github.com/LazaroBatista/Projeto-Conversor_de_moedas"
    );
});

document.getElementById("Pj-5").addEventListener("click", function() {
    showProject(
        "Sorteador",
        "Projeto simples para sortear um número aleatório entre dois valores definidos pelo usuário.",
        "HTML, CSS, JavaScript",
        "https://lazarobatista.github.io/Project-Random/",
        "https://github.com/LazaroBatista/Project-Random"
    );
});