// Dados dos tipos de resíduos
const wasteTypes = [
    {
        id: 1,
        name: "Orgânico",
        description: "Restos de comida, cascas de frutas, folhas e outros materiais biodegradáveis.",
        color: "#6d4c41",
        icon: "fas fa-apple-alt",
        examples: [
            "Cascas de frutas e verduras",
            "Restos de comida",
            "Borra de café",
            "Folhas secas"
        ]
    },
    {
        id: 2,
        name: "Plástico",
        description: "Garrafas PET, embalagens, sacolas e outros materiais plásticos recicláveis.",
        color: "#2196f3",
        icon: "fas fa-bottle-water",
        examples: [
            "Garrafas PET",
            "Embalagens plásticas",
            "Potes e tampas",
            "Sacolas plásticas"
        ]
    },
    {
        id: 3,
        name: "Papel",
        description: "Jornais, revistas, papelão e outros materiais de papel limpos.",
        color: "#607d8b",
        icon: "fas fa-newspaper",
        examples: [
            "Jornais e revistas",
            "Papelão limpo",
            "Papel de escritório",
            "Livros"
        ]
    },
    {
        id: 4,
        name: "Vidro",
        description: "Garrafas, potes e outros recipientes de vidro limpos.",
        color: "#00bcd4",
        icon: "fas fa-wine-glass",
        examples: [
            "Garrafas de bebidas",
            "Potes de conserva",
            "Frascos de perfume",
            "Copos de vidro"
        ]
    },
    {
        id: 5,
        name: "Metal",
        description: "Latas de alumínio, ferro e outros metais recicláveis.",
        color: "#9e9e9e",
        icon: "fas fa-cog",
        examples: [
            "Latas de refrigerante",
            "Latas de conserva",
            "Tampinhas metálicas",
            "Papel alumínio"
        ]
    },
    {
        id: 6,
        name: "Perigoso",
        description: "Pilhas, baterias, lâmpadas e produtos químicos que necessitam descarte especial.",
        color: "#f44336",
        icon: "fas fa-exclamation-triangle",
        examples: [
            "Pilhas e baterias",
            "Lâmpadas fluorescentes",
            "Produtos químicos",
            "Medicamentos"
        ]
    }
];

// Perguntas do quiz
const quizQuestions = [
    {
        id: 1,
        question: "Onde deve ser descartada uma garrafa PET vazia?",
        options: [
            "Lixo Plástico (Azul)",
            "Lixo Orgânico (Marrom)",
            "Lixo Comum (Cinza)"
        ],
        correctAnswer: 0,
        explanation: "Garrafas PET são materiais plásticos e devem ser descartadas no lixo reciclável azul."
    },
    {
        id: 2,
        question: "Qual o destino correto para cascas de frutas?",
        options: [
            "Lixo Plástico",
            "Lixo Orgânico (Marrom)",
            "Lixo de Vidro"
        ],
        correctAnswer: 1,
        explanation: "Cascas de frutas são resíduos orgânicos e devem ir para o lixo marrom."
    },
    {
        id: 3,
        question: "Jornais velhos devem ser descartados em qual lixeira?",
        options: [
            "Lixo de Papel (Azul)",
            "Lixo Orgânico",
            "Lixo Comum"
        ],
        correctAnswer: 0,
        explanation: "Jornais são materiais de papel reciclável e devem ir para o lixo azul."
    },
    {
        id: 4,
        question: "Onde descartar uma lâmpada fluorescente queimada?",
        options: [
            "Lixo Comum",
            "Lixo de Vidro",
            "Ponto de coleta especial"
        ],
        correctAnswer: 2,
        explanation: "Lâmpadas fluorescentes contêm materiais perigosos e devem ser levadas a pontos de coleta especializados."
    },
    {
        id: 5,
        question: "Uma lata de refrigerante vazia deve ir para onde?",
        options: [
            "Lixo de Metal",
            "Lixo Comum",
            "Lixo Orgânico"
        ],
        correctAnswer: 0,
        explanation: "Latas de refrigerante são feitas de alumínio, um metal reciclável."
    }
];

// Dicas práticas
const practicalTips = [
    {
        id: 1,
        title: "Use Sacolas Reutilizáveis",
        description: "Substitua sacolas plásticas por ecobags. Uma única sacola reutilizável pode substituir centenas de sacolas plásticas.",
        icon: "fas fa-shopping-bag"
    },
    {
        id: 2,
        title: "Garrafa Reutilizável",
        description: "Use garrafas reutilizáveis para água. Evite garrafas plásticas descartáveis sempre que possível.",
        icon: "fas fa-bottle-water"
    },
    {
        id: 3,
        title: "Compostagem Caseira",
        description: "Transforme restos orgânicos em adubo. Reduza o lixo e crie fertilizante natural para suas plantas.",
        icon: "fas fa-seedling"
    },
    {
        id: 4,
        title: "Reaproveite Materiais",
        description: "Seja criativo! Potes de vidro podem virar organizadores, e caixas de papelão podem ser brinquedos.",
        icon: "fas fa-recycle"
    },
    {
        id: 5,
        title: "Evite Descartáveis",
        description: "Use utensílios reutilizáveis. Leve seus próprios talheres e canudos quando comer fora de casa.",
        icon: "fas fa-utensils"
    },
    {
        id: 6,
        title: "Consuma Conscientemente",
        description: "Pense antes de comprar. Prefira produtos com menos embalagens e de empresas sustentáveis.",
        icon: "fas fa-leaf"
    }
];

// Variáveis globais do quiz
let currentQuestionIndex = 0;
let score = 0;
let userAnswers = [];

// Função para scroll suave
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
        });
    }
}

// Função para toggle do menu mobile
function toggleMobileMenu() {
    const nav = document.querySelector('nav ul');
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
}

// Função para carregar tipos de resíduos
function loadWasteTypes() {
    const wasteGrid = document.getElementById('wasteGrid');
    wasteGrid.innerHTML = '';

    wasteTypes.forEach(waste => {
        const wasteCard = document.createElement('div');
        wasteCard.className = 'waste-card';
        wasteCard.style.borderLeftColor = waste.color;

        wasteCard.innerHTML = `
            <div class="waste-card-header">
                <div class="waste-icon" style="background-color: ${waste.color}">
                    <i class="${waste.icon}"></i>
                </div>
                <div>
                    <h3>${waste.name}</h3>
                </div>
            </div>
            <p>${waste.description}</p>
            <ul class="waste-examples">
                ${waste.examples.map(example => `<li>${example}</li>`).join('')}
            </ul>
        `;

        wasteGrid.appendChild(wasteCard);
    });
}

// Função para carregar quiz
function loadQuiz() {
    displayQuestion();
}

function displayQuestion() {
    const quizContent = document.getElementById('quizContent');
    const question = quizQuestions[currentQuestionIndex];
    const progress = ((currentQuestionIndex + 1) / quizQuestions.length) * 100;

    quizContent.innerHTML = `
        <div class="quiz-progress">
            <div class="quiz-progress-bar" style="width: ${progress}%"></div>
        </div>
        
        <div class="quiz-question">
            <h3>Pergunta ${currentQuestionIndex + 1} de ${quizQuestions.length}</h3>
            <h3>${question.question}</h3>
            
            <div class="quiz-options">
                ${question.options.map((option, index) => `
                    <div class="quiz-option" onclick="selectAnswer(${index})">
                        ${option}
                    </div>
                `).join('')}
            </div>
            
            <button class="cta-button" onclick="nextQuestion()" style="margin-top: 2rem; opacity: 0.5; pointer-events: none;" id="nextBtn">
                ${currentQuestionIndex === quizQuestions.length - 1 ? 'Finalizar Quiz' : 'Próxima Pergunta'}
            </button>
        </div>
    `;
}

function selectAnswer(answerIndex) {
    // Remove seleção anterior
    document.querySelectorAll('.quiz-option').forEach(option => {
        option.classList.remove('selected');
    });
    
    // Adiciona seleção atual
    document.querySelectorAll('.quiz-option')[answerIndex].classList.add('selected');
    
    // Habilita botão
    const nextBtn = document.getElementById('nextBtn');
    nextBtn.style.opacity = '1';
    nextBtn.style.pointerEvents = 'auto';
    
    // Armazena resposta
    userAnswers[currentQuestionIndex] = answerIndex;
}

function nextQuestion() {
    const selectedAnswer = userAnswers[currentQuestionIndex];
    if (selectedAnswer === undefined) return;

    // Verifica se está correto
    if (selectedAnswer === quizQuestions[currentQuestionIndex].correctAnswer) {
        score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < quizQuestions.length) {
        displayQuestion();
    } else {
        showQuizResult();
    }
}

function showQuizResult() {
    const quizContent = document.getElementById('quizContent');
    const percentage = Math.round((score / quizQuestions.length) * 100);
    
    let message = '';
    if (percentage >= 80) {
        message = 'Excelente! Você é um expert em separação de resíduos!';
    } else if (percentage >= 60) {
        message = 'Muito bom! Você tem um bom conhecimento sobre reciclagem.';
    } else if (percentage >= 40) {
        message = 'Bom trabalho! Continue estudando para melhorar ainda mais.';
    } else {
        message = 'Continue praticando! A educação ambiental é um processo contínuo.';
    }

    quizContent.innerHTML = `
        <div class="quiz-result">
            <h2>🎉 Parabéns!</h2>
            <p>Você acertou <strong>${score} de ${quizQuestions.length}</strong> perguntas!</p>
            <p>Sua pontuação: <strong>${percentage}%</strong></p>
            <p>${message}</p>
            <button class="cta-button" onclick="restartQuiz()" style="margin-top: 2rem;">
                <i class="fas fa-redo"></i>
                Fazer Novamente
            </button>
        </div>
    `;
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];
    displayQuestion();
}

// Funções da calculadora
function updateCalculator() {
    const plastic = document.getElementById('plasticSlider').value;
    const paper = document.getElementById('paperSlider').value;
    const glass = document.getElementById('glassSlider').value;
    const metal = document.getElementById('metalSlider').value;

    document.getElementById('plasticValue').textContent = plastic;
    document.getElementById('paperValue').textContent = paper + ' kg';
    document.getElementById('glassValue').textContent = glass;
    document.getElementById('metalValue').textContent = metal;
}

function calculateImpact() {
    const plastic = parseInt(document.getElementById('plasticSlider').value);
    const paper = parseInt(document.getElementById('paperSlider').value);
    const glass = parseInt(document.getElementById('glassSlider').value);
    const metal = parseInt(document.getElementById('metalSlider').value);

    // Cálculos baseados em pesquisas de impacto ambiental
    const co2Saved = (plastic * 0.5 + paper * 1.2 + glass * 0.8 + metal * 0.6).toFixed(1);
    const waterSaved = Math.round(plastic * 15 + paper * 25 + glass * 20 + metal * 30);
    const energySaved = Math.round(plastic * 2 + paper * 3 + glass * 4 + metal * 5);

    // Nível de sustentabilidade
    const totalScore = plastic + paper + glass + metal;
    let sustainabilityLevel;
    
    if (totalScore >= 15) {
        sustainabilityLevel = "Excelente!";
    } else if (totalScore >= 10) {
        sustainabilityLevel = "Muito Bom!";
    } else if (totalScore >= 5) {
        sustainabilityLevel = "Bom!";
    } else {
        sustainabilityLevel = "Pode Melhorar";
    }

    displayImpactResults(co2Saved, waterSaved, energySaved, sustainabilityLevel);
}

function displayImpactResults(co2, water, energy, level) {
    const resultsContainer = document.getElementById('impactResults');
    
    resultsContainer.innerHTML = `
        <div class="impact-card">
            <div class="impact-value">${co2} kg</div>
            <div class="impact-metric">CO₂ Economizado</div>
            <small>por semana</small>
        </div>
        
        <div class="impact-card">
            <div class="impact-value">${water} L</div>
            <div class="impact-metric">Água Economizada</div>
            <small>por semana</small>
        </div>
        
        <div class="impact-card">
            <div class="impact-value">${energy} kWh</div>
            <div class="impact-metric">Energia Economizada</div>
            <small>por semana</small>
        </div>
        
        <div class="impact-card" style="background: linear-gradient(135deg, var(--accent), var(--accent-dark)); color: white;">
            <div class="impact-value">${level}</div>
            <div class="impact-metric">Nível de Sustentabilidade</div>
            <small>Continue assim para um planeta melhor!</small>
        </div>
    `;
}

// Função para carregar dicas
function loadTips() {
    const tipsGrid = document.getElementById('tipsGrid');
    tipsGrid.innerHTML = '';

    practicalTips.forEach(tip => {
        const tipCard = document.createElement('div');
        tipCard.className = 'tip-card';

        tipCard.innerHTML = `
            <div class="tip-icon">
                <i class="${tip.icon}"></i>
            </div>
            <h3>${tip.title}</h3>
            <p>${tip.description}</p>
        `;

        tipsGrid.appendChild(tipCard);
    });
}

// Função para upload de arquivo
function handleFileUpload(event) {
    const file = event.target.files[0];
    const uploadResult = document.getElementById('uploadResult');
    
    if (!file) return;

    // Validações
    const maxSize = 5 * 1024 * 1024; // 5MB
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif'];

    if (file.size > maxSize) {
        showUploadResult('Arquivo muito grande. O tamanho máximo é 5MB.', 'error');
        return;
    }

    if (!allowedTypes.includes(file.type)) {
        showUploadResult('Tipo de arquivo não permitido. Use apenas JPG, PNG ou GIF.', 'error');
        return;
    }

    // Simula upload bem-sucedido
    setTimeout(() => {
        showUploadResult(`Arquivo "${file.name}" enviado com sucesso! Tamanho: ${(file.size / 1024 / 1024).toFixed(2)} MB`, 'success');
    }, 1000);
}

function showUploadResult(message, type) {
    const uploadResult = document.getElementById('uploadResult');
    uploadResult.innerHTML = `<p>${message}</p>`;
    uploadResult.className = `upload-result ${type}`;
    uploadResult.style.display = 'block';
    
    // Remove a mensagem após 5 segundos
    setTimeout(() => {
        uploadResult.style.display = 'none';
    }, 5000);
}

// Função para newsletter
function handleNewsletter(event) {
    event.preventDefault();
    const email = event.target.querySelector('input[type="email"]').value;
    
    // Simula cadastro na newsletter
    alert(`Obrigado! E-mail ${email} cadastrado na newsletter com sucesso!`);
    event.target.reset();
}

// Função para scroll do header
function handleScroll() {
    const header = document.getElementById('header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

// Função para animação dos números
function animateNumbers() {
    const recyclingRate = document.getElementById('recyclingRate');
    const co2Reduction = document.getElementById('co2Reduction');
    
    let currentRecycling = 0;
    let currentCO2 = 0;
    
    const recyclingInterval = setInterval(() => {
        if (currentRecycling < 78) {
            currentRecycling++;
            recyclingRate.textContent = currentRecycling;
        } else {
            clearInterval(recyclingInterval);
        }
    }, 30);
    
    const co2Interval = setInterval(() => {
        if (currentCO2 > -40) {
            currentCO2--;
            co2Reduction.textContent = currentCO2;
        } else {
            clearInterval(co2Interval);
        }
    }, 30);
}

// Inicialização quando a página carrega
document.addEventListener('DOMContentLoaded', function() {
    // Carregar seções
    loadWasteTypes();
    loadQuiz();
    loadTips();
    
    // Atualizar calculadora inicial
    updateCalculator();
    calculateImpact();
    
    // Animar números
    setTimeout(animateNumbers, 1000);
    
    // Event listener para scroll
    window.addEventListener('scroll', handleScroll);
    
    // Event listener para drag and drop
    const uploadArea = document.querySelector('.upload-area');
    
    uploadArea.addEventListener('dragover', function(e) {
        e.preventDefault();
        this.style.background = 'rgba(76, 175, 80, 0.3)';
    });
    
    uploadArea.addEventListener('dragleave', function(e) {
        e.preventDefault();
        this.style.background = 'rgba(76, 175, 80, 0.1)';
    });
    
    uploadArea.addEventListener('drop', function(e) {
        e.preventDefault();
        this.style.background = 'rgba(76, 175, 80, 0.1)';
        
        const files = e.dataTransfer.files;
        if (files.length > 0) {
            document.getElementById('fileInput').files = files;
            handleFileUpload({ target: { files: files } });
        }
    });
});