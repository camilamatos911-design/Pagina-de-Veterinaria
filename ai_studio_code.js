document.addEventListener('DOMContentLoaded', () => {
    // Generar 10 cards de clientes
    const carouselContent = document.getElementById('carouselContent');
    for(let i=0; i<3; i++) { // Simplificado para estructura de carrusel
        let active = i === 0 ? 'active' : '';
        carouselContent.innerHTML += `
            <div class="carousel-item ${active}">
                <div class="row">
                    ${Array.from({length: 4}).map(() => `
                        <div class="col-md-3">
                            <div class="card p-3 rainbow-border">
                                <img src="https://randomuser.me/api/portraits/lego/${Math.floor(Math.random()*9)}.jpg" class="rounded-circle heart-beat" width="50">
                                <p>¡Excelente servicio! 🐶</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    // Validación y Modal
    document.getElementById('contactForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        if(email.includes('@')) {
            new bootstrap.Modal(document.getElementById('confirmModal')).show();
            // Simular apertura de correo
            window.location.href = `mailto:contacto@clinica.com?subject=Consulta&body=${document.getElementById('mensaje').value}`;
        } else {
            alert('Email inválido');
        }
    });
});