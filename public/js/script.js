// script.js

// Salvar dados no sessionStorage
function saveData() {
    if (document.getElementById('nome')) {
        sessionStorage.setItem('nome', document.getElementById('nome').value);
        sessionStorage.setItem('email', document.getElementById('email').value);
    }

    if (document.getElementById('endereco')) {
        sessionStorage.setItem('endereco', document.getElementById('endereco').value);
        sessionStorage.setItem('cidade', document.getElementById('cidade').value);
    }
}

// Avançar para a próxima etapa
function nextStep() {
    saveData();
    let nextPage = '';

    if (window.location.pathname.includes('etapa1')) {
        nextPage = 'etapa2.html';
    } else if (window.location.pathname.includes('etapa2')) {
        nextPage = 'etapa3.html';
    }

    if (nextPage) {
        window.location.href = nextPage;
    }
}

// Voltar para a etapa anterior
function previousStep() {
    saveData();
    let prevPage = '';

    if (window.location.pathname.includes('etapa3')) {
        prevPage = 'etapa2.html';
    } else if (window.location.pathname.includes('etapa2')) {
        prevPage = 'etapa1.html';
    }

    if (prevPage) {
        window.location.href = prevPage;
    }
}

// Exibir dados resumidos na etapa 3
function showResumo() {
    const nome = sessionStorage.getItem('nome');
    const email = sessionStorage.getItem('email');
    const endereco = sessionStorage.getItem('endereco');
    const cidade = sessionStorage.getItem('cidade');
    
    const resumo = `
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Endereço:</strong> ${endereco}</p>
        <p><strong>Cidade:</strong> ${cidade}</p>
    `;
    
    document.getElementById('resumo').innerHTML = resumo;
}

// Enviar o formulário (por exemplo, para um backend)
function submitForm() {
    alert("Formulário enviado com sucesso!");
    // Aqui você pode enviar os dados para o servidor
}

// Mostrar resumo apenas na etapa 3
if (window.location.pathname.includes('etapa3')) {
    showResumo();
}

// Preencher os campos com os dados salvos no sessionStorage quando voltar para uma etapa
function populateForm() {
    if (document.getElementById('nome')) {
        document.getElementById('nome').value = sessionStorage.getItem('nome') || '';
    }
    if (document.getElementById('email')) {
        document.getElementById('email').value = sessionStorage.getItem('email') || '';
    }
    if (document.getElementById('endereco')) {
        document.getElementById('endereco').value = sessionStorage.getItem('endereco') || '';
    }
    if (document.getElementById('cidade')) {
        document.getElementById('cidade').value = sessionStorage.getItem('cidade') || '';
    }
}

// Preencher os campos ao carregar a página
window.onload = populateForm;