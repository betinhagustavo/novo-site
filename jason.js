// Dados técnicos organizados em um objeto do JavaScript
const dadosBMW = {
    motor: "Elétrico síncrono de 170 cv (125 kW)",
    torque: "255 Nm instantâneo",
    aceleracao: "0 a 100 km/h em 7,3 segundos",
    autonomia: "Cerca de 260 km a 310 km (WLTP dependendo da bateria)",
    sustentabilidade: "Interior feito com até 25% de materiais reciclados"
};

// Função para renderizar as especificações na tela
function carregarEspecificacoes() {
    const lista = document.getElementById("specs-list");
    
    lista.innerHTML = `
        <li><strong>Motor:</strong> ${dadosBMW.motor}</li>
        <li><strong>Torque:</strong> ${dadosBMW.torque}</li>
        <li><strong>Aceleração:</strong> ${dadosBMW.aceleracao}</li>
        <li><strong>Autonomia:</strong> ${dadosBMW.autonomia}</li>
        <li><strong>Sustentabilidade:</strong> ${dadosBMW.sustentabilidade}</li>
    `;
}

// Lógica simples do botão de curtir
let curtidas = 0;
const botaoCurtir = document.getElementById("like-btn");
const contadorCurtidas = document.getElementById("like-count");

botaoCurtir.addEventListener("click", () => {
    curtidas++;
    contadorCurtidas.textContent = `${curtidas} ${curtidas === 1 ? 'pessoa curtiu' : 'pessoas curtiram'}`;
});

// Inicializa os dados quando a página carrega
window.onload = carregarEspecificacoes;
