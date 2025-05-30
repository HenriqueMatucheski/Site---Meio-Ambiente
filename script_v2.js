// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Hide loader after page loads
    setTimeout(function() {
        document.getElementById('loader').classList.add('hidden');
    }, 2000);

    // Initialize particles
    initParticles();
    
    // Initialize scroll events
    initScrollEvents();
    
    // Initialize timeline interactions
    initTimeline();
    
    // Initialize temperature indicator
    initTemperatureIndicator();
    
    // Initialize modal
    initModal();
    
    // Initialize charts and interactive elements (placeholders for now)
    initInteractiveElements();
});

// Progress bar
window.addEventListener('scroll', function() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById('progressBar').style.width = scrolled + '%';
});

// Particle system
function initParticles() {
    const particlesContainer = document.getElementById('particles-js');
    const particleCount = 100;
    
    // Create particles
    for (let i = 0; i < particleCount; i++) {
        createParticle(particlesContainer);
    }
    
    // Animate particles
    animateParticles();
}

function createParticle(container) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    
    // Random size between 2-6px
    const size = Math.random() * 4 + 2;
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';
    
    // Random position
    particle.style.left = Math.random() * 100 + 'vw';
    particle.style.top = Math.random() * 100 + 'vh';
    
    // Random opacity
    particle.style.opacity = Math.random() * 0.5 + 0.1;
    
    // Random color based on temperature (blue to red)
    const hue = Math.random() * 60 + 200; // Blue to purple range
    particle.style.backgroundColor = `hsl(${hue}, 70%, 60%)`;
    
    // Add to container
    container.appendChild(particle);
    
    // Store initial position and movement data
    particle.dataset.x = Math.random() * 100;
    particle.dataset.y = Math.random() * 100;
    particle.dataset.speedX = Math.random() * 0.2 - 0.1;
    particle.dataset.speedY = Math.random() * 0.2 - 0.1;
    
    return particle;
}

function animateParticles() {
    const particles = document.querySelectorAll('.particle');
    
    particles.forEach(particle => {
        // Update position based on speed
        let x = parseFloat(particle.dataset.x);
        let y = parseFloat(particle.dataset.y);
        const speedX = parseFloat(particle.dataset.speedX);
        const speedY = parseFloat(particle.dataset.speedY);
        
        x += speedX;
        y += speedY;
        
        // Wrap around screen edges
        if (x < 0) x = 100;
        if (x > 100) x = 0;
        if (y < 0) y = 100;
        if (y > 100) y = 0;
        
        // Update position
        particle.dataset.x = x;
        particle.dataset.y = y;
        particle.style.left = x + 'vw';
        particle.style.top = y + 'vh';
    });
    
    requestAnimationFrame(animateParticles);
}

// Scroll events and animations
function initScrollEvents() {
    // Smooth scroll for anchor links
    document.querySelectorAll('.scroll-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Scroll down indicator
    document.querySelector('.scroll-down-indicator').addEventListener('click', function() {
        document.querySelector('.intro-section').scrollIntoView({
            behavior: 'smooth'
        });
    });
    
    // Parallax effect
    window.addEventListener('scroll', function() {
        const parallaxElements = document.querySelectorAll('.parallax-bg');
        parallaxElements.forEach(element => {
            const speed = element.getAttribute('data-speed') || 0.5;
            const yPos = -(window.scrollY * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    });
    
    // Reveal elements on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });
    
    document.querySelectorAll('.timeline-item').forEach(item => {
        observer.observe(item);
    });
}

// Timeline functionality
function initTimeline() {
    const eras = document.querySelectorAll('.timeline-era');
    const prevEraBtn = document.getElementById('prev-era');
    const nextEraBtn = document.getElementById('next-era');
    const eraTitleElement = document.getElementById('current-era-title');
    
    let currentEraIndex = 0;
    const eraTitles = [
        'Os Primeiros Sinais (Séculos XVIII e XIX)',
        'Primeiras Evidências (1900-1950)',
        'Conscientização Global (1950-2000)',
        'Crise Intensificada (2000-Presente)',
        'O Futuro em Nossas Mãos (2030-2100)'
    ];
    
    // Show first era
    eras[currentEraIndex].style.display = 'block';
    
    // Era navigation
    prevEraBtn.addEventListener('click', function() {
        if (currentEraIndex > 0) {
            eras[currentEraIndex].style.display = 'none';
            currentEraIndex--;
            eras[currentEraIndex].style.display = 'block';
            eraTitleElement.textContent = eraTitles[currentEraIndex];
            updateTemperatureIndicator();
        }
    });
    
    nextEraBtn.addEventListener('click', function() {
        if (currentEraIndex < eras.length - 1) {
            eras[currentEraIndex].style.display = 'none';
            currentEraIndex++;
            eras[currentEraIndex].style.display = 'block';
            eraTitleElement.textContent = eraTitles[currentEraIndex];
            updateTemperatureIndicator();
        }
    });
    
    // Expand timeline items
    document.querySelectorAll('.expand-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const expandedContent = this.nextElementSibling;
            
            if (expandedContent.classList.contains('active')) {
                expandedContent.classList.remove('active');
                this.textContent = '+';
                this.setAttribute('aria-label', 'Expandir detalhes');
            } else {
                expandedContent.classList.add('active');
                this.textContent = '−';
                this.setAttribute('aria-label', 'Recolher detalhes');
            }
        });
    });
}

// Temperature indicator
function initTemperatureIndicator() {
    updateTemperatureIndicator();
    
    // Update on scroll to show progression
    window.addEventListener('scroll', function() {
        const scrollPercentage = window.scrollY / (document.body.scrollHeight - window.innerHeight);
        updateTemperatureBasedOnScroll(scrollPercentage);
    });
}

function updateTemperatureIndicator() {
    const tempFill = document.getElementById('tempFill');
    const tempValue = document.getElementById('tempValue');
    const eras = document.querySelectorAll('.timeline-era');
    const currentEraIndex = Array.from(eras).findIndex(era => era.style.display === 'block');
    
    // Temperature values for each era
    const temperatures = [0.2, 0.5, 0.8, 1.2, 2.0];
    const currentTemp = temperatures[currentEraIndex];
    
    // Update fill height (percentage)
    const fillPercentage = (currentTemp / 2.0) * 100;
    tempFill.style.height = fillPercentage + '%';
    
    // Update temperature text
    tempValue.textContent = `+${currentTemp.toFixed(1)}°C`;
    
    // Change color based on temperature
    if (currentTemp <= 0.5) {
        tempFill.style.background = 'linear-gradient(to top, #2196f3, #64b5f6)';
    } else if (currentTemp <= 1.0) {
        tempFill.style.background = 'linear-gradient(to top, #64b5f6, #ffeb3b)';
    } else if (currentTemp <= 1.5) {
        tempFill.style.background = 'linear-gradient(to top, #ffeb3b, #ff9800)';
    } else {
        tempFill.style.background = 'linear-gradient(to top, #ff9800, #f44336)';
    }
}

function updateTemperatureBasedOnScroll(scrollPercentage) {
    const tempFill = document.getElementById('tempFill');
    const tempValue = document.getElementById('tempValue');
    
    // Max temperature is 2.0°C
    const maxTemp = 2.0;
    const currentTemp = scrollPercentage * maxTemp;
    
    // Update fill height (percentage)
    const fillPercentage = (currentTemp / maxTemp) * 100;
    tempFill.style.height = fillPercentage + '%';
    
    // Update temperature text
    tempValue.textContent = `+${currentTemp.toFixed(1)}°C`;
    
    // Change color based on temperature
    if (currentTemp <= 0.5) {
        tempFill.style.background = 'linear-gradient(to top, #2196f3, #64b5f6)';
    } else if (currentTemp <= 1.0) {
        tempFill.style.background = 'linear-gradient(to top, #64b5f6, #ffeb3b)';
    } else if (currentTemp <= 1.5) {
        tempFill.style.background = 'linear-gradient(to top, #ffeb3b, #ff9800)';
    } else {
        tempFill.style.background = 'linear-gradient(to top, #ff9800, #f44336)';
    }
}

// Modal functionality
function initModal() {
    const modal = document.getElementById('infoModal');
    const fab = document.getElementById('infoFab');
    const closeBtn = document.querySelector('.modal-close');
    const closeBtnFooter = document.querySelector('.modal-close-btn');
    
    fab.addEventListener('click', function() {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    });
    
    closeBtn.addEventListener('click', function() {
        modal.classList.remove('active');
        document.body.style.overflow = ''; // Re-enable scrolling
    });
    
    closeBtnFooter.addEventListener('click', function() {
        modal.classList.remove('active');
        document.body.style.overflow = ''; // Re-enable scrolling
    });
    
    // Close modal when clicking outside content
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.classList.remove('active');
            document.body.style.overflow = ''; // Re-enable scrolling
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            modal.classList.remove('active');
            document.body.style.overflow = ''; // Re-enable scrolling
        }
    });
}

// Interactive elements (placeholders for now)
function initInteractiveElements() {
    // CO2 Chart placeholder
    const co2ChartPlaceholder = document.getElementById('co2-chart-placeholder');
    if (co2ChartPlaceholder) {
        co2ChartPlaceholder.innerHTML = 'Gráfico de CO₂ (1800-Presente)';
        
        // Add simple animation to simulate chart
        const canvas = document.createElement('canvas');
        canvas.width = co2ChartPlaceholder.offsetWidth;
        canvas.height = co2ChartPlaceholder.offsetHeight;
        co2ChartPlaceholder.appendChild(canvas);
        
        const ctx = canvas.getContext('2d');
        ctx.strokeStyle = '#ff5722';
        ctx.lineWidth = 2;
        
        // Draw exponential curve
        ctx.beginPath();
        ctx.moveTo(0, canvas.height - 20);
        
        for (let x = 0; x < canvas.width; x++) {
            // Exponential function to simulate CO2 increase
            const progress = x / canvas.width;
            const y = canvas.height - 20 - Math.pow(progress, 3) * (canvas.height - 40);
            ctx.lineTo(x, y);
        }
        
        ctx.stroke();
        
        // Add labels
        ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
        ctx.font = '12px Arial';
        ctx.fillText('1800', 10, canvas.height - 5);
        ctx.fillText('2025', canvas.width - 30, canvas.height - 5);
        ctx.fillText('420 ppm', canvas.width - 50, 20);
        ctx.fillText('280 ppm', 10, canvas.height - 25);
    }
    
    // Globe placeholder
    const globePlaceholder = document.getElementById('globe-placeholder');
    if (globePlaceholder) {
        globePlaceholder.innerHTML = 'Globo Interativo';
        
        // Add simple animation to simulate rotating globe
        const globe = document.createElement('div');
        globe.style.width = '200px';
        globe.style.height = '200px';
        globe.style.borderRadius = '50%';
        globe.style.background = 'radial-gradient(circle at 30% 30%, #64b5f6, #1565c0)';
        globe.style.position = 'relative';
        globe.style.margin = '0 auto';
        globe.style.boxShadow = '0 0 20px rgba(0, 0, 0, 0.5)';
        globe.style.animation = 'rotate 20s linear infinite';
        
        // Add keyframes for rotation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes rotate {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
        `;
        document.head.appendChild(style);
        
        // Add continents (simplified)
        const continents = document.createElement('div');
        continents.style.position = 'absolute';
        continents.style.top = '0';
        continents.style.left = '0';
        continents.style.width = '100%';
        continents.style.height = '100%';
        continents.style.borderRadius = '50%';
        continents.style.background = 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 100 100\'%3E%3Cpath fill=\'%23388e3c\' d=\'M30,30 Q40,20 50,30 T70,40 Q80,50 70,60 T50,70 Q40,80 30,70 T20,50 Q10,40 30,30\'/%3E%3C/svg%3E")';
        continents.style.backgroundSize = 'cover';
        
        globe.appendChild(continents);
        globePlaceholder.appendChild(globe);
    }
}

// Keyboard navigation for accessibility
document.addEventListener('keydown', function(e) {
    // Tab index management for timeline items
    if (e.key === 'Tab') {
        // Add focus styles as needed
    }
    
    // Arrow keys for timeline navigation
    if (document.activeElement.classList.contains('timeline-item')) {
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            const nextItem = document.activeElement.nextElementSibling;
            if (nextItem && nextItem.classList.contains('timeline-item')) {
                nextItem.focus();
            }
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            const prevItem = document.activeElement.previousElementSibling;
            if (prevItem && prevItem.classList.contains('timeline-item')) {
                prevItem.focus();
            }
        }
    }
});
