// Dados de impactos ambientais
const environmentalImpacts = [
    {
        id: 1,
        title: "Perda de Biodiversidade",
        description: "Queimadas destroem habitats naturais, causando extinção de espécies e desequilíbrio ecológico.",
        icon: "fas fa-paw",
        color: "#dc2626",
        stats: [
            { label: "Espécies Ameaçadas", value: "28 mil" },
            { label: "Habitats Destruídos", value: "45%" }
        ]
    },
    {
        id: 2,
        title: "Mudanças Climáticas",
        description: "Emissão massiva de CO₂ acelera o aquecimento global e altera padrões climáticos.",
        icon: "fas fa-thermometer-full",
        color: "#ea580c",
        stats: [
            { label: "CO₂ Liberado", value: "2.8 GT" },
            { label: "Aumento Temperatura", value: "+1.5°C" }
        ]
    },
    {
        id: 3,
        title: "Qualidade do Ar",
        description: "Fumaça e partículas tóxicas poluem o ar, causando problemas respiratórios graves.",
        icon: "fas fa-lungs",
        color: "#ca8a04",
        stats: [
            { label: "Material Particulado", value: "850 μg/m³" },
            { label: "Cidades Afetadas", value: "120+" }
        ]
    },
    {
        id: 4,
        title: "Recursos Hídricos",
        description: "Contaminação de rios e lençóis freáticos afeta disponibilidade de água potável.",
        icon: "fas fa-tint",
        color: "#2563eb",
        stats: [
            { label: "Rios Contaminados", value: "340" },
            { label: "População Afetada", value: "12 milhões" }
        ]
    },
    {
        id: 5,
        title: "Desertificação",
        description: "Solo queimado perde fertilidade, levando à degradação e desertificação de áreas.",
        icon: "fas fa-mountain",
        color: "#8b5cf6",
        stats: [
            { label: "Solo Degradado", value: "2.3 milhões ha" },
            { label: "Produtividade Perdida", value: "-65%" }
        ]
    },
    {
        id: 6,
        title: "Economia Rural",
        description: "Perdas na agricultura e pecuária afetam economias locais e segurança alimentar.",
        icon: "fas fa-coins",
        color: "#059669",
        stats: [
            { label: "Prejuízo Econômico", value: "R$ 15 bi" },
            { label: "Empregos Perdidos", value: "450 mil" }
        ]
    }
];

// Dados de soluções
const solutions = [
    {
        id: 1,
        title: "Monitoramento por Satélite",
        description: "Uso de tecnologia espacial para detectar focos de calor em tempo real.",
        icon: "fas fa-satellite",
        features: [
            "Detecção precoce de incêndios",
            "Mapeamento de áreas de risco",
            "Coordenação de combate",
            "Análise pós-incêndio"
        ]
    },
    {
        id: 2,
        title: "Brigadas de Incêndio",
        description: "Equipes especializadas em prevenção e combate a incêndios florestais.",
        icon: "fas fa-fire-extinguisher",
        features: [
            "Resposta rápida a emergências",
            "Prevenção em épocas críticas",
            "Treinamento de comunidades",
            "Manutenção de aceiros"
        ]
    },
    {
        id: 3,
        title: "Educação Ambiental",
        description: "Programas educativos para conscientizar sobre prevenção de queimadas.",
        icon: "fas fa-graduation-cap",
        features: [
            "Campanhas de conscientização",
            "Programas escolares",
            "Treinamento rural",
            "Mídia educativa"
        ]
    },
    {
        id: 4,
        title: "Reflorestamento",
        description: "Recuperação de áreas degradadas através do plantio de espécies nativas.",
        icon: "fas fa-seedling",
        features: [
            "Plantio de mudas nativas",
            "Recuperação de nascentes",
            "Corredores ecológicos",
            "Monitoramento do crescimento"
        ]
    },
    {
        id: 5,
        title: "Políticas Públicas",
        description: "Legislação e fiscalização rigorosas para prevenir queimadas ilegais.",
        icon: "fas fa-gavel",
        features: [
            "Fiscalização ambiental",
            "Multas e penalidades",
            "Incentivos à conservação",
            "Parcerias público-privadas"
        ]
    },
    {
        id: 6,
        title: "Tecnologia Verde",
        description: "Desenvolvimento de alternativas sustentáveis às práticas que causam queimadas.",
        icon: "fas fa-leaf",
        features: [
            "Agricultura regenerativa",
            "Energia renovável",
            "Biotecnologia aplicada",
            "Economia circular"
        ]
    }
];

// Dados das regiões
const regionsData = {
    amazonia: {
        name: "Amazônia",
        fires: "45.2k focos",
        area: "4.2 milhões km²",
        deforestation: "+8.2% em 2024",
        biodiversity: "60% da biodiversidade brasileira",
        co2: "1.8 GT de CO₂ liberado",
        description: "A maior floresta tropical do mundo enfrenta sua pior crise, com recordes de queimadas e desmatamento."
    },
    cerrado: {
        name: "Cerrado",
        fires: "28.7k focos", 
        area: "2.0 milhões km²",
        deforestation: "+12.5% em 2024",
        biodiversity: "5% das espécies mundiais",
        co2: "950 MT de CO₂ liberado",
        description: "Savana mais biodiversa do mundo, berço das águas, severamente ameaçada pela expansão agrícola."
    },
    pantanal: {
        name: "Pantanal",
        fires: "12.3k focos",
        area: "150 mil km²",
        deforestation: "+6.8% em 2024", 
        biodiversity: "Maior planície alagável do mundo",
        co2: "320 MT de CO₂ liberado",
        description: "Patrimônio Natural da Humanidade sofre com queimadas intensas durante período de seca."
    },
    caatinga: {
        name: "Caatinga",
        fires: "8.9k focos",
        area: "844 mil km²", 
        deforestation: "+4.2% em 2024",
        biodiversity: "Única vegetação 100% brasileira",
        co2: "180 MT de CO₂ liberado",
        description: "Bioma exclusivamente brasileiro enfrenta desertificação acelerada e perda de espécies endêmicas."
    }
};

// Alertas de queimadas
const fireAlerts = [
    {
        id: 1,
        time: "5 min atrás",
        level: "critical",
        message: "Novo foco de grande intensidade detectado na região de Alter do Chão, PA. Vento forte pode espalhar o incêndio."
    },
    {
        id: 2,
        time: "12 min atrás", 
        level: "warning",
        message: "Aumento de 340% nos focos de calor no Pantanal Norte. Situação de emergência declarada."
    },
    {
        id: 3,
        time: "25 min atrás",
        level: "critical", 
        message: "Queimada de grandes proporções avança em direção à Terra Indígena Xingu. Brigadistas mobilizados."
    },
    {
        id: 4,
        time: "1 hora atrás",
        level: "warning",
        message: "Qualidade do ar em nível perigoso em Brasília devido à fumaça de queimadas no entorno."
    },
    {
        id: 5,
        time: "2 horas atrás",
        level: "warning",
        message: "Detecção de 45 novos focos de calor no Cerrado em Minas Gerais nas últimas 6 horas."
    }
];

// Dados históricos para o gráfico (1985-2024)
const historicalData = {
    years: [],
    fires: [],
    deforestation: [],
    co2: []
};

// Gerar dados históricos realistas
for (let year = 1985; year <= 2024; year++) {
    historicalData.years.push(year);
    
    // Simular crescimento exponencial com variações
    const baseGrowth = Math.pow(1.08, year - 1985);
    const variation = 0.7 + Math.random() * 0.6;
    const seasonality = 1 + 0.3 * Math.sin((year - 1985) * 0.5);
    
    const fires = Math.floor(25000 + baseGrowth * 15000 * variation * seasonality);
    const deforestation = Math.floor(8000 + baseGrowth * 3000 * variation);
    const co2Emissions = Math.floor(180 + baseGrowth * 120 * variation);
    
    historicalData.fires.push(fires);
    historicalData.deforestation.push(deforestation);
    historicalData.co2.push(co2Emissions);
}

// Variáveis globais
let isLoading = true;
let currentChart = null;
let smokeParticles = [];
let animationId;

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    showLoadingScreen();
    setupFireCursor();
    setupSmokeParticles();
    loadEnvironmentalImpacts();
    loadSolutions();
    setupEventListeners();
    
    setTimeout(() => {
        hideLoadingScreen();
        startAnimations();
        setupChart();
        loadLiveUpdates();
        
        // Iniciar atualizações automáticas
        setInterval(updateWeatherData, 15000); // A cada 15 segundos
        setInterval(() => {
            loadLiveUpdates();
            updateLiveFirePoints();
        }, 30000); // A cada 30 segundos
    }, 3000);
}

function showLoadingScreen() {
    const loadingScreen = document.getElementById('loadingScreen');
    loadingScreen.style.display = 'flex';
}

function hideLoadingScreen() {
    const loadingScreen = document.getElementById('loadingScreen');
    loadingScreen.classList.add('fade-out');
    isLoading = false;
    
    setTimeout(() => {
        loadingScreen.style.display = 'none';
    }, 500);
}

function setupFireCursor() {
    if (window.innerWidth <= 768) return;
    
    const cursor = document.querySelector('.fire-cursor');
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });
    
    // Efeitos em elementos interativos
    const interactiveElements = document.querySelectorAll('button, a, .nav-link, .region, .timeline-btn');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
        });
        
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        });
    });
}

function setupSmokeParticles() {
    const container = document.getElementById('smokeParticles');
    
    function createParticle() {
        const particle = document.createElement('div');
        particle.className = 'smoke-particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 10 + 's';
        particle.style.animationDuration = (8 + Math.random() * 4) + 's';
        container.appendChild(particle);
        
        setTimeout(() => {
            particle.remove();
        }, 12000);
    }
    
    // Criar partículas periodicamente
    setInterval(createParticle, 2000);
    
    // Criar algumas partículas iniciais
    for (let i = 0; i < 5; i++) {
        setTimeout(createParticle, i * 500);
    }
}

function setupEventListeners() {
    setupNavigation();
    setupScrollEffects();
    setupTimelineControls();
    setupRegionInteraction();
    setupMobileNavigation();
}

function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('data-section');
            scrollToSection(targetId);
            
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });
}

function setupScrollEffects() {
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        updateActiveNavigation();
    });
}

function setupMobileNavigation() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
    
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });
}

function setupTimelineControls() {
    const timelineBtns = document.querySelectorAll('.timeline-btn');
    
    timelineBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const period = btn.getAttribute('data-period');
            
            timelineBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            updateChart(period);
        });
    });
}

function setupRegionInteraction() {
    const regions = document.querySelectorAll('.region');
    const regionInfo = document.getElementById('regionInfo');
    
    regions.forEach(region => {
        region.addEventListener('click', () => {
            const regionKey = region.getAttribute('data-region');
            const data = regionsData[regionKey];
            
            if (data) {
                regionInfo.innerHTML = `
                    <h3>${data.name}</h3>
                    <p>${data.description}</p>
                    <div class="region-stats">
                        <div class="region-stat-item">
                            <span class="stat-label">Focos de Calor:</span>
                            <span class="stat-value">${data.fires}</span>
                        </div>
                        <div class="region-stat-item">
                            <span class="stat-label">Área Total:</span>
                            <span class="stat-value">${data.area}</span>
                        </div>
                        <div class="region-stat-item">
                            <span class="stat-label">Desmatamento:</span>
                            <span class="stat-value">${data.deforestation}</span>
                        </div>
                        <div class="region-stat-item">
                            <span class="stat-label">Biodiversidade:</span>
                            <span class="stat-value">${data.biodiversity}</span>
                        </div>
                        <div class="region-stat-item">
                            <span class="stat-label">CO₂ Liberado:</span>
                            <span class="stat-value">${data.co2}</span>
                        </div>
                    </div>
                `;
                
                // Adicionar estilos para as estatísticas da região
                if (!document.querySelector('#region-stats-styles')) {
                    const style = document.createElement('style');
                    style.id = 'region-stats-styles';
                    style.textContent = `
                        .region-stats {
                            margin-top: 2rem;
                            display: flex;
                            flex-direction: column;
                            gap: 1rem;
                        }
                        .region-stat-item {
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                            padding: 0.75rem;
                            background: var(--bg-primary);
                            border-radius: var(--radius-sm);
                            border-left: 3px solid var(--fire-red);
                        }
                        .stat-label {
                            color: var(--text-secondary);
                            font-weight: 500;
                        }
                        .stat-value {
                            color: var(--text-primary);
                            font-weight: 700;
                        }
                    `;
                    document.head.appendChild(style);
                }
            }
        });
    });
}

function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        const offsetTop = element.offsetTop - 80;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

function updateActiveNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-section') === currentSection) {
            link.classList.add('active');
        }
    });
}

function loadEnvironmentalImpacts() {
    const container = document.getElementById('impactsGrid');
    container.innerHTML = '';
    
    environmentalImpacts.forEach((impact, index) => {
        const card = document.createElement('div');
        card.className = 'impact-card';
        card.style.animationDelay = `${index * 0.1}s`;
        
        card.innerHTML = `
            <div class="impact-icon" style="background: ${impact.color};">
                <i class="${impact.icon}"></i>
            </div>
            <h3>${impact.title}</h3>
            <p>${impact.description}</p>
            <div class="impact-stats">
                ${impact.stats.map(stat => `
                    <div class="impact-stat">
                        <span class="impact-stat-value">${stat.value}</span>
                        <span class="impact-stat-label">${stat.label}</span>
                    </div>
                `).join('')}
            </div>
        `;
        
        container.appendChild(card);
    });
}

function loadSolutions() {
    const container = document.getElementById('solutionsGrid');
    container.innerHTML = '';
    
    solutions.forEach((solution, index) => {
        const card = document.createElement('div');
        card.className = 'solution-card';
        card.style.animationDelay = `${index * 0.1}s`;
        
        card.innerHTML = `
            <div class="solution-icon">
                <i class="${solution.icon}"></i>
            </div>
            <h3>${solution.title}</h3>
            <p>${solution.description}</p>
            <ul class="solution-features">
                ${solution.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
        `;
        
        container.appendChild(card);
    });
}

function startAnimations() {
    animateStatNumbers();
    setupIntersectionObserver();
}

function animateStatNumbers() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    statNumbers.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-target'));
        let current = 0;
        const increment = target / 100;
        const duration = 2000;
        const stepTime = duration / 100;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            
            if (target >= 1000) {
                stat.textContent = (current / 1000).toFixed(1) + 'K';
            } else {
                stat.textContent = Math.floor(current);
            }
        }, stepTime);
    });
}

function setupIntersectionObserver() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '-50px'
    });
    
    document.querySelectorAll('.impact-card, .solution-card, .insight-item, .highlight-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        observer.observe(el);
    });
}

function setupChart() {
    const canvas = document.getElementById('evolutionChart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    drawEvolutionChart(ctx, canvas, 'all');
}

function drawEvolutionChart(ctx, canvas, period) {
    const width = canvas.width;
    const height = canvas.height;
    
    // Limpar canvas
    ctx.clearRect(0, 0, width, height);
    
    // Filtrar dados baseado no período
    let dataYears, dataFires;
    
    switch(period) {
        case '1985-2000':
            dataYears = historicalData.years.slice(0, 16);
            dataFires = historicalData.fires.slice(0, 16);
            break;
        case '2001-2010':
            dataYears = historicalData.years.slice(16, 26);
            dataFires = historicalData.fires.slice(16, 26);
            break;
        case '2011-2024':
            dataYears = historicalData.years.slice(26);
            dataFires = historicalData.fires.slice(26);
            break;
        default:
            dataYears = historicalData.years;
            dataFires = historicalData.fires;
    }
    
    // Configurações
    const margin = 60;
    const chartWidth = width - 2 * margin;
    const chartHeight = height - 2 * margin;
    const stepX = chartWidth / (dataYears.length - 1);
    const maxValue = Math.max(...dataFires);
    const minValue = Math.min(...dataFires);
    const valueRange = maxValue - minValue;
    
    // Desenhar grade
    ctx.strokeStyle = 'rgba(255, 68, 68, 0.1)';
    ctx.lineWidth = 1;
    
    // Linhas horizontais
    for (let i = 0; i <= 5; i++) {
        const y = margin + (chartHeight / 5) * i;
        ctx.beginPath();
        ctx.moveTo(margin, y);
        ctx.lineTo(width - margin, y);
        ctx.stroke();
    }
    
    // Linhas verticais
    const yearStep = Math.ceil(dataYears.length / 8);
    for (let i = 0; i < dataYears.length; i += yearStep) {
        const x = margin + stepX * i;
        ctx.beginPath();
        ctx.moveTo(x, margin);
        ctx.lineTo(x, height - margin);
        ctx.stroke();
    }
    
    // Desenhar área sob a curva
    ctx.fillStyle = 'rgba(255, 68, 68, 0.1)';
    ctx.beginPath();
    ctx.moveTo(margin, height - margin);
    
    dataFires.forEach((value, index) => {
        const x = margin + stepX * index;
        const y = margin + chartHeight - ((value - minValue) / valueRange) * chartHeight;
        if (index === 0) {
            ctx.lineTo(x, y);
        } else {
            ctx.lineTo(x, y);
        }
    });
    
    ctx.lineTo(width - margin, height - margin);
    ctx.closePath();
    ctx.fill();
    
    // Desenhar linha principal
    ctx.strokeStyle = '#ff4444';
    ctx.lineWidth = 3;
    ctx.beginPath();
    
    dataFires.forEach((value, index) => {
        const x = margin + stepX * index;
        const y = margin + chartHeight - ((value - minValue) / valueRange) * chartHeight;
        
        if (index === 0) {
            ctx.moveTo(x, y);
        } else {
            ctx.lineTo(x, y);
        }
    });
    
    ctx.stroke();
    
    // Desenhar pontos
    ctx.fillStyle = '#ff4444';
    dataFires.forEach((value, index) => {
        const x = margin + stepX * index;
        const y = margin + chartHeight - ((value - minValue) / valueRange) * chartHeight;
        
        ctx.beginPath();
        ctx.arc(x, y, 4, 0, 2 * Math.PI);
        ctx.fill();
    });
    
    // Labels dos eixos
    ctx.fillStyle = '#666666';
    ctx.font = '12px Inter';
    ctx.textAlign = 'center';
    
    // Anos no eixo X
    for (let i = 0; i < dataYears.length; i += yearStep) {
        const x = margin + stepX * i;
        ctx.fillText(dataYears[i], x, height - margin + 20);
    }
    
    // Valores no eixo Y
    ctx.textAlign = 'right';
    for (let i = 0; i <= 5; i++) {
        const y = margin + (chartHeight / 5) * i;
        const value = maxValue - (valueRange / 5) * i;
        ctx.fillText((value / 1000).toFixed(0) + 'K', margin - 10, y + 4);
    }
    
    // Título do gráfico
    ctx.fillStyle = '#2c2c2c';
    ctx.font = 'bold 16px Inter';
    ctx.textAlign = 'center';
    ctx.fillText('Evolução dos Focos de Calor', width / 2, 30);
}

function updateChart(period) {
    const canvas = document.getElementById('evolutionChart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    drawEvolutionChart(ctx, canvas, period);
}

function showAlertModal() {
    const modal = document.getElementById('alertModal');
    const alertList = document.getElementById('alertList');
    
    alertList.innerHTML = '';
    
    fireAlerts.forEach(alert => {
        const alertElement = document.createElement('div');
        alertElement.className = `alert-item ${alert.level}`;
        
        alertElement.innerHTML = `
            <div class="alert-time">${alert.time}</div>
            <div class="alert-message">${alert.message}</div>
        `;
        
        alertList.appendChild(alertElement);
    });
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function showDonationModal() {
    const modal = document.getElementById('donationModal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function showEducationModal() {
    const modal = document.getElementById('educationModal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function showVolunteerModal() {
    showNotification('Redirecionando para página de voluntariado...', 'info');
    setTimeout(() => {
        window.open('https://www.ibama.gov.br/voluntarios', '_blank');
    }, 1000);
}

// Dados de atualizações em tempo real
const liveUpdates = [
    {
        id: 1,
        time: "Agora",
        type: "critical",
        message: "🔥 ALERTA CRÍTICO: Novo foco de grande proporção detectado em Alter do Chão, PA. Brigadas mobilizadas.",
        coordinates: "2°31'S, 54°57'W"
    },
    {
        id: 2,
        time: "3 min atrás",
        type: "warning", 
        message: "⚠️ Aumento súbito da temperatura em Cuiabá: 38°C com umidade de 12%. Risco extremo.",
        coordinates: "15°35'S, 56°05'W"
    },
    {
        id: 3,
        time: "7 min atrás",
        type: "info",
        message: "📊 Atualização: 847 focos ativos monitorados pelos satélites AQUA e TERRA nas últimas 6h.",
        coordinates: "Nacional"
    },
    {
        id: 4,
        time: "12 min atrás",
        type: "warning",
        message: "🌪️ Vento de 45 km/h registrado no Pantanal Norte. Risco de propagação rápida.",
        coordinates: "16°15'S, 57°30'W"
    },
    {
        id: 5,
        time: "15 min atrás",
        type: "success",
        message: "✅ Foco controlado em Porto Velho após 4h de combate. Área preservada: 120 hectares.",
        coordinates: "8°45'S, 63°54'W"
    }
];

// Carregar atualizações em tempo real
function loadLiveUpdates() {
    const container = document.getElementById('liveUpdates');
    if (!container) return;
    
    container.innerHTML = '';
    
    liveUpdates.forEach(update => {
        const updateElement = document.createElement('div');
        updateElement.className = `live-update ${update.type}`;
        
        updateElement.innerHTML = `
            <div class="update-time">${update.time}</div>
            <div class="update-message">${update.message}</div>
            <div class="update-coordinates">${update.coordinates}</div>
        `;
        
        container.appendChild(updateElement);
    });
}

// Simular dados climáticos em tempo real
function updateWeatherData() {
    const temperature = document.getElementById('temperature');
    const humidity = document.getElementById('humidity');
    const windSpeed = document.getElementById('windSpeed');
    const visibility = document.getElementById('visibility');
    
    if (temperature) {
        // Simular variação de temperatura
        const newTemp = 35 + Math.random() * 8;
        temperature.textContent = Math.round(newTemp);
    }
    
    if (humidity) {
        // Simular umidade baixa
        const newHumidity = 10 + Math.random() * 15;
        humidity.textContent = Math.round(newHumidity);
    }
    
    if (windSpeed) {
        // Simular variação do vento
        const newWind = 20 + Math.random() * 30;
        windSpeed.textContent = Math.round(newWind);
    }
    
    if (visibility) {
        // Simular visibilidade reduzida
        const newVisibility = 1 + Math.random() * 5;
        visibility.textContent = newVisibility.toFixed(1);
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function handleAlertSignup(event) {
    event.preventDefault();
    const email = event.target.querySelector('input[type="email"]').value;
    
    if (email) {
        showNotification(`Alertas configurados para ${email}. Você receberá notificações sobre queimadas na sua região.`, 'success');
        event.target.reset();
    }
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'warning' ? 'exclamation-triangle' : 'info-circle'}"></i>
            <span>${message}</span>
            <button class="notification-close" onclick="this.parentElement.parentElement.remove()">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    
    // Adicionar estilos se não existirem
    if (!document.querySelector('#notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            .notification {
                position: fixed;
                top: 100px;
                right: 20px;
                background: var(--bg-secondary);
                border: 1px solid rgba(255, 68, 68, 0.2);
                border-radius: var(--radius-md);
                padding: 1rem 1.5rem;
                box-shadow: var(--shadow-medium);
                z-index: 9999;
                animation: slideInRight 0.3s ease;
                max-width: 400px;
                backdrop-filter: blur(10px);
            }
            
            .notification-success {
                border-left: 4px solid #22c55e;
                background: rgba(34, 197, 94, 0.05);
            }
            
            .notification-warning {
                border-left: 4px solid var(--warning-orange);
                background: rgba(234, 88, 12, 0.05);
            }
            
            .notification-info {
                border-left: 4px solid var(--fire-red);
                background: rgba(255, 68, 68, 0.05);
            }
            
            .notification-content {
                display: flex;
                align-items: center;
                gap: 0.75rem;
                color: var(--text-primary);
            }
            
            .notification-success i {
                color: #22c55e;
            }
            
            .notification-warning i {
                color: var(--warning-orange);
            }
            
            .notification-info i {
                color: var(--fire-red);
            }
            
            .notification-close {
                background: none;
                border: none;
                color: var(--text-muted);
                cursor: pointer;
                padding: 0.25rem;
                border-radius: 50%;
                transition: all var(--transition-smooth);
                margin-left: auto;
            }
            
            .notification-close:hover {
                background: var(--fire-red);
                color: white;
            }
            
            @keyframes slideInRight {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(notification);
    
    // Remover após 5 segundos
    setTimeout(() => {
        notification.style.animation = 'slideInRight 0.3s ease reverse';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 5000);
}

// Fechar modais ao clicar fora
document.addEventListener('click', (e) => {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (e.target === modal) {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
});

// Dados do quiz ambiental
const quizQuestions = [
    {
        question: "Qual é a principal causa das queimadas na Amazônia?",
        options: [
            "A) Raios e fenômenos naturais",
            "B) Ação humana para desmatamento",
            "C) Aquecimento global",
            "D) Secas prolongadas"
        ],
        correct: 1,
        explanation: "Cerca de 95% das queimadas na Amazônia são causadas por ação humana, principalmente para abertura de pastagens e agricultura."
    },
    {
        question: "Quanto CO₂ as queimadas no Brasil liberam por ano?",
        options: [
            "A) 500 milhões de toneladas",
            "B) 1.2 bilhões de toneladas", 
            "C) 2.8 bilhões de toneladas",
            "D) 5.1 bilhões de toneladas"
        ],
        correct: 2,
        explanation: "As queimadas no Brasil liberam aproximadamente 2.8 gigatoneladas de CO₂ por ano, contribuindo significativamente para as mudanças climáticas."
    },
    {
        question: "Qual bioma brasileiro mais sofre com queimadas?",
        options: [
            "A) Amazônia",
            "B) Cerrado",
            "C) Pantanal", 
            "D) Caatinga"
        ],
        correct: 1,
        explanation: "O Cerrado é o bioma que mais sofre com queimadas, perdendo mais área que a Amazônia anualmente devido à expansão agrícola."
    },
    {
        question: "Quantas espécies estão ameaçadas pelas queimadas?",
        options: [
            "A) 5 mil espécies",
            "B) 12 mil espécies",
            "C) 28 mil espécies",
            "D) 45 mil espécies"
        ],
        correct: 2,
        explanation: "Mais de 28 mil espécies estão ameaçadas pela destruição de habitats causada pelas queimadas no Brasil."
    },
    {
        question: "Qual é o período de maior risco de queimadas?",
        options: [
            "A) Janeiro a março",
            "B) Abril a junho",
            "C) Julho a setembro",
            "D) Outubro a dezembro"
        ],
        correct: 2,
        explanation: "O período de julho a setembro é considerado o mais crítico devido à estação seca, com baixa umidade e ventos fortes."
    },
    {
        question: "Quantos hectares de floresta são perdidos por dia?",
        options: [
            "A) 2.500 hectares",
            "B) 8.700 hectares",
            "C) 15.300 hectares",
            "D) 23.600 hectares"
        ],
        correct: 2,
        explanation: "Em média, mais de 15 mil hectares de floresta são perdidos diariamente no Brasil devido a queimadas e desmatamento."
    },
    {
        question: "Qual tecnologia é mais eficaz para detectar queimadas?",
        options: [
            "A) Drones terrestres",
            "B) Torres de observação",
            "C) Satélites com sensores térmicos",
            "D) Câmeras de vigilância"
        ],
        correct: 2,
        explanation: "Satélites com sensores térmicos permitem detecção em tempo real de focos de calor em grandes áreas, sendo a tecnologia mais eficaz."
    },
    {
        question: "Quanto tempo leva para uma floresta se recuperar?",
        options: [
            "A) 5 a 10 anos",
            "B) 15 a 25 anos",
            "C) 30 a 50 anos",
            "D) 80 a 200 anos"
        ],
        correct: 3,
        explanation: "Uma floresta tropical pode levar de 80 a 200 anos para se recuperar completamente, dependendo do grau de degradação."
    }
];

// Variáveis do quiz
let currentQuizQuestion = 0;
let quizScore = 0;
let selectedAnswer = null;

// Variáveis do simulador
let simulatorValues = {
    reforest: 5000,
    brigades: 50,
    education: 25,
    satellite: 75
};

// Inicializar quiz
function initializeQuiz() {
    currentQuizQuestion = 0;
    quizScore = 0;
    selectedAnswer = null;
    document.getElementById('quizContainer').style.display = 'block';
    document.getElementById('quizResults').style.display = 'none';
    loadQuizQuestion();
}

function loadQuizQuestion() {
    const question = quizQuestions[currentQuizQuestion];
    const progressPercent = ((currentQuizQuestion + 1) / quizQuestions.length) * 100;
    
    document.getElementById('quizProgress').style.width = progressPercent + '%';
    document.getElementById('currentQuestion').textContent = currentQuizQuestion + 1;
    document.getElementById('totalQuestions').textContent = quizQuestions.length;
    document.getElementById('quizQuestion').innerHTML = `<h3>${question.question}</h3>`;
    
    const answersContainer = document.getElementById('quizAnswers');
    answersContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'quiz-option';
        button.textContent = option;
        button.onclick = () => selectAnswer(index);
        answersContainer.appendChild(button);
    });
    
    document.getElementById('quizExplanation').style.display = 'none';
    document.getElementById('nextQuestion').style.display = 'none';
    document.getElementById('finishQuiz').style.display = 'none';
    selectedAnswer = null;
}

function selectAnswer(answerIndex) {
    if (selectedAnswer !== null) return;
    
    selectedAnswer = answerIndex;
    const question = quizQuestions[currentQuizQuestion];
    const options = document.querySelectorAll('.quiz-option');
    
    options.forEach((option, index) => {
        option.classList.remove('selected', 'correct', 'incorrect');
        if (index === answerIndex) {
            option.classList.add('selected');
        }
        if (index === question.correct) {
            option.classList.add('correct');
        } else if (index === answerIndex && answerIndex !== question.correct) {
            option.classList.add('incorrect');
        }
    });
    
    if (answerIndex === question.correct) {
        quizScore++;
    }
    
    // Mostrar explicação
    const explanationDiv = document.getElementById('quizExplanation');
    explanationDiv.innerHTML = `
        <div class="explanation-content">
            <h4>${answerIndex === question.correct ? 'Correto!' : 'Resposta Correta: ' + question.options[question.correct].charAt(0)}</h4>
            <p>${question.explanation}</p>
        </div>
    `;
    explanationDiv.style.display = 'block';
    
    // Mostrar botão de próxima pergunta ou finalizar
    if (currentQuizQuestion < quizQuestions.length - 1) {
        document.getElementById('nextQuestion').style.display = 'inline-flex';
    } else {
        document.getElementById('finishQuiz').style.display = 'inline-flex';
    }
}

function nextQuizQuestion() {
    currentQuizQuestion++;
    loadQuizQuestion();
}

function finishQuiz() {
    const percentage = Math.round((quizScore / quizQuestions.length) * 100);
    
    document.getElementById('quizContainer').style.display = 'none';
    document.getElementById('quizResults').style.display = 'block';
    
    document.getElementById('scorePercentage').textContent = percentage + '%';
    
    let message, description, recommendations;
    
    if (percentage >= 80) {
        message = "Excelente!";
        description = "Você demonstrou conhecimento avançado sobre queimadas e meio ambiente. Continue sendo um defensor da natureza!";
        recommendations = [
            "Torne-se um multiplicador de conhecimento ambiental",
            "Participe de organizações de conservação",
            "Monitore dados ambientais em sua região",
            "Apoie políticas públicas sustentáveis"
        ];
    } else if (percentage >= 60) {
        message = "Muito Bom!";
        description = "Você tem bom conhecimento sobre o tema, mas ainda pode aprender mais para ajudar na proteção ambiental.";
        recommendations = [
            "Continue se informando sobre questões ambientais",
            "Participe de ações de reflorestamento",
            "Divulgue informações sobre prevenção de queimadas",
            "Reduza sua pegada de carbono pessoal"
        ];
    } else if (percentage >= 40) {
        message = "Pode Melhorar";
        description = "Você tem conhecimento básico, mas é importante se informar mais sobre a gravidade das queimadas.";
        recommendations = [
            "Estude mais sobre impactos ambientais das queimadas",
            "Acompanhe notícias sobre meio ambiente",
            "Converse com especialistas sobre o tema",
            "Visite áreas de conservação ambiental"
        ];
    } else {
        message = "Precisa Estudar Mais";
        description = "É importante se informar melhor sobre as queimadas e seus impactos para ajudar na preservação ambiental.";
        recommendations = [
            "Leia materiais educativos sobre meio ambiente",
            "Assista documentários sobre queimadas",
            "Participe de cursos sobre sustentabilidade",
            "Siga organizações ambientais nas redes sociais"
        ];
    }
    
    document.getElementById('scoreMessage').textContent = message;
    document.getElementById('scoreDescription').textContent = description;
    
    const recommendationsList = document.getElementById('recommendations');
    recommendationsList.innerHTML = '';
    recommendations.forEach(rec => {
        const li = document.createElement('li');
        li.textContent = rec;
        recommendationsList.appendChild(li);
    });
}

function restartQuiz() {
    initializeQuiz();
}

// Simulador de impacto
function updateSimulation() {
    // Atualizar valores dos controles
    const reforestArea = document.getElementById('reforestArea').value;
    const fireBrigades = document.getElementById('fireBrigades').value;
    const eduPrograms = document.getElementById('eduPrograms').value;
    const satelliteMonitor = document.getElementById('satelliteMonitor').value;
    
    // Atualizar displays
    document.getElementById('reforestValue').textContent = parseInt(reforestArea).toLocaleString();
    document.getElementById('brigadesValue').textContent = fireBrigades;
    document.getElementById('programsValue').textContent = eduPrograms;
    document.getElementById('satelliteValue').textContent = satelliteMonitor + '%';
    
    // Calcular impactos (fórmulas realistas baseadas em estudos)
    const fireReduction = Math.round(
        (reforestArea / 50000 * 20) + 
        (fireBrigades / 200 * 30) + 
        (eduPrograms / 100 * 15) + 
        (satelliteMonitor / 100 * 25)
    );
    
    const co2Reduction = (
        (reforestArea / 50000 * 1.5) + 
        (fireBrigades / 200 * 2.2) + 
        (eduPrograms / 100 * 0.8) + 
        (satelliteMonitor / 100 * 1.3)
    ).toFixed(1);
    
    const speciesSaved = (
        (reforestArea / 50000 * 4.2) + 
        (fireBrigades / 200 * 6.1) + 
        (eduPrograms / 100 * 2.3) + 
        (satelliteMonitor / 100 * 3.8)
    ).toFixed(1);
    
    const economicSaving = Math.round(
        (reforestArea / 50000 * 8) + 
        (fireBrigades / 200 * 12) + 
        (eduPrograms / 100 * 5) + 
        (satelliteMonitor / 100 * 9)
    );
    
    // Atualizar resultados
    document.getElementById('fireReduction').textContent = `-${fireReduction}%`;
    document.getElementById('co2Reduction').textContent = `-${co2Reduction} GT`;
    document.getElementById('speciesSaved').textContent = `+${speciesSaved}k`;
    document.getElementById('economicSaving').textContent = `R$ ${economicSaving} bi`;
}

// Compartilhamento em redes sociais
function shareOnSocialMedia() {
    const text = "🔥 FireWatch - Dados alarmantes sobre queimadas no Brasil! Veja a evolução devastadora e saiba como ajudar na preservação ambiental.";
    const url = window.location.href;
    
    if (navigator.share) {
        navigator.share({
            title: 'FireWatch - Evolução das Queimadas',
            text: text,
            url: url
        });
    } else {
        // Fallback para navegadores sem Web Share API
        const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
        window.open(shareUrl, '_blank');
        showNotification('Link copiado para compartilhamento!', 'success');
    }
}

// Atualizar dados em tempo real (simulação mais rica)
let liveDataInterval;

function startLiveDataUpdates() {
    liveDataInterval = setInterval(() => {
        if (!isLoading) {
            updateLiveMetrics();
            updateNewsTicker();
        }
    }, 15000); // Atualizar a cada 15 segundos
}

function updateLiveMetrics() {
    // Simular variações realistas nos dados
    const baseFires = 76847;
    const variation = Math.floor(Math.random() * 400) - 200;
    const newFires = baseFires + variation;
    
    const fireElement = document.getElementById('liveFires');
    if (fireElement) {
        fireElement.textContent = newFires.toLocaleString();
    }
    
    // Simular mudança na temperatura
    const baseTemp = 3.1;
    const tempVariation = (Math.random() * 0.4) - 0.2;
    const newTemp = (baseTemp + tempVariation).toFixed(1);
    
    const tempElement = document.getElementById('temperature');
    if (tempElement) {
        tempElement.textContent = `+${newTemp}°C`;
    }
    
    // Simular mudança na qualidade do ar
    const airQualities = ['Boa', 'Moderada', 'Prejudicial', 'Perigosa', 'Muito Prejudicial'];
    const currentAir = airQualities[Math.floor(Math.random() * 3) + 2]; // Sempre nas piores categorias
    
    const airElement = document.getElementById('airQuality');
    if (airElement) {
        airElement.textContent = currentAir;
    }
}

function updateNewsTicker() {
    const newsItems = [
        "🔥 Novo foco de grande intensidade detectado na Amazônia",
        "🌡️ Temperatura recorde registrada no Pantanal",
        "💨 Qualidade do ar crítica em 18 cidades",
        "🚁 150 brigadistas mobilizados no Cerrado",
        "🌧️ Chuva artificial testada em área experimental",
        "📡 Novo satélite de monitoramento lançado com sucesso",
        "🏭 Empresa multada em R$ 50 milhões por queimada ilegal",
        "🌱 Área de 5 mil hectares será reflorestada em MT",
        "⚠️ Estado de emergência decretado em 4 municípios",
        "🦅 Operação de resgate salva 200 animais feridos"
    ];
    
    const randomNews = newsItems[Math.floor(Math.random() * newsItems.length)];
    const tickerElement = document.getElementById('newsTicker');
    
    if (tickerElement) {
        const span = tickerElement.querySelector('span');
        if (span) {
            // Adicionar nova notícia ao ticker
            span.textContent += ` • ${randomNews}`;
        }
    }
}

// Expandir setupEventListeners para incluir novas funcionalidades
function setupEventListeners() {
    setupNavigation();
    setupScrollEffects();
    setupTimelineControls();
    setupRegionInteraction();
    setupMobileNavigation();
    
    // Inicializar quiz ao carregar a página
    if (document.getElementById('quizContainer')) {
        initializeQuiz();
    }
    
    // Inicializar simulador
    if (document.getElementById('reforestArea')) {
        updateSimulation();
    }
    
    // Iniciar atualizações em tempo real
    startLiveDataUpdates();
}

// Atualizar função de inicialização
function initializeApp() {
    showLoadingScreen();
    setupFireCursor();
    setupSmokeParticles();
    loadEnvironmentalImpacts();
    loadSolutions();
    setupEventListeners();
    
    setTimeout(() => {
        hideLoadingScreen();
        startAnimations();
        setupChart();
        
        // Inicializar novas funcionalidades
        if (document.getElementById('quizContainer')) {
            initializeQuiz();
        }
        
        if (document.getElementById('reforestArea')) {
            updateSimulation();
        }
    }, 3000);
}