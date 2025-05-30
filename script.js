// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize loading animation
    const loader = document.createElement('div');
    loader.className = 'loader';
    loader.innerHTML = `
        <div class="loader-content">
            <div class="loader-spinner"></div>
            <div class="loader-text">Carregando Linha do Tempo Climática...</div>
        </div>
    `;
    document.body.appendChild(loader);

    // Hide loader after 2 seconds
    setTimeout(() => {
        loader.classList.add('hidden');
        setTimeout(() => {
            loader.remove();
        }, 500);
    }, 2000);

    // Create progress bar
    const progressContainer = document.createElement('div');
    progressContainer.className = 'progress-container';
    progressContainer.innerHTML = '<div class="progress-bar" id="progressBar"></div>';
    document.body.appendChild(progressContainer);

    // Create temperature indicator
    const temperatureIndicator = document.createElement('div');
    temperatureIndicator.className = 'temperature-indicator';
    
    // Add temperature markers
    const markers = [
        { year: 1800, temp: 0, bottom: '10%' },
        { year: 1950, temp: 0.2, bottom: '20%' },
        { year: 1980, temp: 0.5, bottom: '35%' },
        { year: 2000, temp: 0.8, bottom: '50%' },
        { year: 2020, temp: 1.2, bottom: '70%' },
        { year: 2023, temp: 1.5, bottom: '85%' }
    ];
    
    markers.forEach(marker => {
        const markerElement = document.createElement('div');
        markerElement.className = 'temperature-marker';
        markerElement.style.bottom = marker.bottom;
        
        const valueElement = document.createElement('div');
        valueElement.className = 'temperature-value';
        valueElement.textContent = `${marker.temp}°C (${marker.year})`;
        valueElement.style.bottom = marker.bottom;
        
        temperatureIndicator.appendChild(markerElement);
        temperatureIndicator.appendChild(valueElement);
    });
    
    document.body.appendChild(temperatureIndicator);

    // Create scroll indicator
    const scrollIndicator = document.createElement('div');
    scrollIndicator.className = 'scroll-indicator';
    scrollIndicator.innerHTML = `
        <span>Role para explorar</span>
        <i class="fas fa-chevron-down"></i>
    `;
    document.body.appendChild(scrollIndicator);

    // Create floating action button
    const fab = document.createElement('div');
    fab.className = 'fab';
    fab.innerHTML = '<i class="fas fa-info-circle"></i>';
    fab.addEventListener('click', openInfoModal);
    document.body.appendChild(fab);

    // Create info modal
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.id = 'infoModal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="modal-close">&times;</span>
            <div class="modal-header">
                <h2>Sobre o Aquecimento Global</h2>
            </div>
            <div class="modal-body">
                <p>O aquecimento global é o aumento da temperatura média da Terra devido principalmente às atividades humanas, como a queima de combustíveis fósseis, desmatamento e práticas agrícolas intensivas.</p>
                
                <div class="fact-box">
                    <h3>Fatos Importantes</h3>
                    <p>• A temperatura global já aumentou cerca de 1,1°C desde a era pré-industrial</p>
                    <p>• Os últimos 7 anos foram os mais quentes já registrados</p>
                    <p>• O nível do mar está subindo a uma taxa de 3,7 mm por ano</p>
                    <p>• Eventos climáticos extremos estão se tornando mais frequentes e intensos</p>
                </div>
                
                <p>Esta linha do tempo interativa mostra os principais marcos na história do aquecimento global, desde a Revolução Industrial até os dias atuais, destacando como as atividades humanas têm impactado o clima do planeta.</p>
                
                <p>Para limitar o aquecimento global a 1,5°C e evitar os piores impactos das mudanças climáticas, precisamos reduzir drasticamente as emissões de gases de efeito estufa e transitar para uma economia de baixo carbono.</p>
            </div>
            <div class="modal-footer">
                <button class="btn" onclick="closeModal()">Entendi</button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);

    // Close modal when clicking on X
    document.querySelector('.modal-close').addEventListener('click', closeModal);

    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });

    // Initialize particles background
    initParticles();

    // Initialize timeline animation
    initTimeline();

    // Update progress bar on scroll
    window.addEventListener('scroll', function() {
        updateProgressBar();
        checkTimelineItems();
        fadeScrollIndicator();
    });

    // Initial check for timeline items
    checkTimelineItems();
});

// Initialize particles background
function initParticles() {
    // Create particles container
    const particlesContainer = document.createElement('div');
    particlesContainer.id = 'particles-js';
    document.body.insertBefore(particlesContainer, document.body.firstChild);

    // Create particles
    const particleCount = 100;
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.position = 'absolute';
        particle.style.width = Math.random() * 3 + 1 + 'px';
        particle.style.height = particle.style.width;
        particle.style.backgroundColor = 'rgba(255, 255, 255, ' + (Math.random() * 0.5 + 0.25) + ')';
        particle.style.left = Math.random() * 100 + 'vw';
        particle.style.top = Math.random() * 100 + 'vh';
        particle.style.borderRadius = '50%';
        particle.style.pointerEvents = 'none';
        
        // Add animation
        particle.style.animation = 'float ' + (Math.random() * 10 + 10) + 's linear infinite';
        particle.style.opacity = Math.random() * 0.5 + 0.3;
        
        particlesContainer.appendChild(particle);
    }

    // Add float animation to CSS
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes float {
            0% {
                transform: translateY(0) translateX(0);
            }
            25% {
                transform: translateY(-20px) translateX(10px);
            }
            50% {
                transform: translateY(0) translateX(20px);
            }
            75% {
                transform: translateY(20px) translateX(10px);
            }
            100% {
                transform: translateY(0) translateX(0);
            }
        }
    `;
    document.head.appendChild(style);
}

// Initialize timeline animation
function initTimeline() {
    // Add animation classes to timeline items
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
        // Add animation delay based on index
        item.style.transitionDelay = (index * 0.2) + 's';
        
        // Add click event to show more details
        item.addEventListener('click', function() {
            // Toggle active class
            this.classList.toggle('active');
            
            // If active, expand content
            if (this.classList.contains('active')) {
                const content = this.querySelector('.timeline-content');
                
                // Check if expanded content already exists
                if (!this.querySelector('.expanded-content')) {
                    // Create expanded content based on the year
                    const year = this.getAttribute('data-year');
                    const expandedContent = document.createElement('div');
                    expandedContent.className = 'expanded-content';
                    
                    // Add content based on year
                    let contentHTML = '';
                    switch(year) {
                        case '1800':
                            contentHTML = `
                                <div class="fact-box">
                                    <h3>Impacto da Revolução Industrial</h3>
                                    <p>A queima de carvão em larga escala marca o início do aumento significativo de CO2 na atmosfera. Antes da Revolução Industrial, os níveis de CO2 eram de aproximadamente 280 ppm (partes por milhão).</p>
                                </div>
                                <img src="https://images.unsplash.com/photo-1521295121783-8a321d551ad2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Revolução Industrial" style="width: 100%; border-radius: 8px; margin-top: 15px;">
                            `;
                            break;
                        case '1958':
                            contentHTML = `
                                <div class="fact-box">
                                    <h3>A Curva de Keeling</h3>
                                    <p>As medições de Keeling em Mauna Loa mostraram que o CO2 atmosférico estava em 315 ppm em 1958, e aumentando constantemente. Esta foi a primeira evidência clara do aumento de CO2 causado por humanos.</p>
                                </div>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Mauna_Loa_CO2_monthly_mean_concentration.svg/1200px-Mauna_Loa_CO2_monthly_mean_concentration.svg.png" alt="Curva de Keeling" style="width: 100%; border-radius: 8px; margin-top: 15px;">
                            `;
                            break;
                        case '1988':
                            contentHTML = `
                                <div class="fact-box">
                                    <h3>Formação do IPCC</h3>
                                    <p>O Painel Intergovernamental sobre Mudanças Climáticas foi criado para fornecer aos formuladores de políticas avaliações científicas regulares sobre as mudanças climáticas, suas implicações e riscos potenciais, bem como opções de adaptação e mitigação.</p>
                                </div>
                                <img src="https://images.unsplash.com/photo-1569163139599-0f4517e36f31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Cientistas climáticos" style="width: 100%; border-radius: 8px; margin-top: 15px;">
                            `;
                            break;
                        case '1997':
                            contentHTML = `
                                <div class="fact-box">
                                    <h3>Protocolo de Kyoto</h3>
                                    <p>Este acordo internacional comprometeu os países industrializados a reduzir suas emissões coletivas de gases de efeito estufa em 5,2% em relação aos níveis de 1990. Entrou em vigor em 2005, mas os EUA nunca o ratificaram.</p>
                                </div>
                                <img src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Conferência climática" style="width: 100%; border-radius: 8px; margin-top: 15px;">
                            `;
                            break;
                        case '2015':
                            contentHTML = `
                                <div class="fact-box">
                                    <h3>Acordo de Paris</h3>
                                    <p>Um marco histórico onde 196 partes se comprometeram a limitar o aquecimento global bem abaixo de 2°C, preferencialmente a 1,5°C, em comparação com os níveis pré-industriais. Ao contrário do Protocolo de Kyoto, inclui compromissos de todos os países.</p>
                                </div>
                                <img src="https://images.unsplash.com/photo-1604762524889-3e2fcc145683?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Acordo de Paris" style="width: 100%; border-radius: 8px; margin-top: 15px;">
                            `;
                            break;
                        case '2020s':
                            contentHTML = `
                                <div class="fact-box">
                                    <h3>Década de Extremos</h3>
                                    <p>A década de 2020 já registrou recordes de temperatura, com 2023 sendo o ano mais quente já registrado. Eventos extremos como incêndios na Austrália, Califórnia e Amazônia, inundações na Europa e China, e ondas de calor mortais tornaram-se mais frequentes.</p>
                                </div>
                                <img src="https://images.unsplash.com/photo-1598267410503-d0ef01973f69?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Incêndio florestal" style="width: 100%; border-radius: 8px; margin-top: 15px;">
                            `;
                            break;
                        default:
                            contentHTML = `
                                <div class="fact-box">
                                    <h3>Informações Adicionais</h3>
                                    <p>As mudanças climáticas representam um dos maiores desafios da humanidade, exigindo ação imediata e coordenada em escala global.</p>
                                </div>
                            `;
                    }
                    
                    expandedContent.innerHTML = contentHTML;
                    content.appendChild(expandedContent);
                    
                    // Add animation
                    setTimeout(() => {
                        expandedContent.style.maxHeight = expandedContent.scrollHeight + 'px';
                        expandedContent.style.opacity = 1;
                    }, 10);
                }
            } else {
                // Remove expanded content
                const expandedContent = this.querySelector('.expanded-content');
                if (expandedContent) {
                    expandedContent.style.maxHeight = '0';
                    expandedContent.style.opacity = 0;
                    
                    // Remove after animation
                    setTimeout(() => {
                        expandedContent.remove();
                    }, 500);
                }
            }
        });
    });
}

// Check if timeline items are in viewport
function checkTimelineItems() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    timelineItems.forEach(item => {
        const rect = item.getBoundingClientRect();
        const isInViewport = (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
        
        if (isInViewport) {
            item.classList.add('visible');
            
            // Add pulse animation to the dot
            const dot = item.querySelector('.timeline-item::after');
            if (dot) {
                dot.style.animation = 'pulse 2s infinite';
            }
        }
    });
}

// Update progress bar based on scroll position
function updateProgressBar() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById('progressBar').style.width = scrolled + '%';
}

// Fade out scroll indicator when scrolling
function fadeScrollIndicator() {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (window.scrollY > 100) {
        scrollIndicator.style.opacity = '0';
        setTimeout(() => {
            scrollIndicator.style.display = 'none';
        }, 500);
    } else {
        scrollIndicator.style.display = 'flex';
        scrollIndicator.style.opacity = '0.7';
    }
}

// Open info modal
function openInfoModal() {
    document.getElementById('infoModal').classList.add('active');
}

// Close modal
function closeModal() {
    document.getElementById('infoModal').classList.remove('active');
}

// Add more timeline items dynamically
function addMoreTimelineItems() {
    const timelineContainer = document.querySelector('.timeline-container');
    
    const additionalItems = [
        {
            year: '1938',
            title: 'Efeito Estufa Humano',
            content: 'Guy Callendar estabelece a ligação entre o aumento de CO2 devido à queima de combustíveis fósseis e o aquecimento global.'
        },
        {
            year: '1979',
            title: 'Primeira Conferência Mundial do Clima',
            content: 'Cientistas de 50 nações se reúnem em Genebra para discutir as mudanças climáticas como uma ameaça séria.'
        },
        {
            year: '2005',
            title: 'Protocolo de Kyoto em Vigor',
            content: 'O acordo internacional finalmente entra em vigor, oito anos após sua adoção inicial.'
        },
        {
            year: '2018',
            title: 'Relatório Especial do IPCC',
            content: 'O relatório alerta que limitar o aquecimento global a 1,5°C requer mudanças rápidas, de longo alcance e sem precedentes em todos os aspectos da sociedade.'
        }
    ];
    
    additionalItems.forEach(item => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        timelineItem.setAttribute('data-year', item.year);
        
        timelineItem.innerHTML = `
            <div class="timeline-content">
                <h2>${item.title}</h2>
                <p>${item.content}</p>
            </div>
        `;
        
        timelineContainer.appendChild(timelineItem);
    });
    
    // Re-initialize timeline
    initTimeline();
    checkTimelineItems();
}

// Add parallax effect to background images
function parallaxEffect() {
    const parallaxElements = document.querySelectorAll('.parallax-bg');
    
    window.addEventListener('scroll', function() {
        const scrollPosition = window.pageYOffset;
        
        parallaxElements.forEach(element => {
            const speed = element.getAttribute('data-speed') || 0.5;
            element.style.transform = 'translateY(' + (scrollPosition * speed) + 'px)';
        });
    });
}

// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Add resize listener to adjust layout
window.addEventListener('resize', function() {
    checkTimelineItems();
});

// Add keyboard navigation
document.addEventListener('keydown', function(e) {
    const activeItem = document.querySelector('.timeline-item.active');
    
    if (e.key === 'Escape') {
        closeModal();
    }
    
    if (activeItem) {
        if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
            const nextItem = activeItem.nextElementSibling;
            if (nextItem && nextItem.classList.contains('timeline-item')) {
                activeItem.classList.remove('active');
                nextItem.classList.add('active');
                nextItem.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }
        
        if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
            const prevItem = activeItem.previousElementSibling;
            if (prevItem && prevItem.classList.contains('timeline-item')) {
                activeItem.classList.remove('active');
                prevItem.classList.add('active');
                prevItem.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }
    }
});
