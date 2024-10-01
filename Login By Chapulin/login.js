// Función para iniciar sesión
function loginUser() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const rememberMe = document.getElementById('rememberMe').checked;

    // Aquí puedes agregar la lógica para autenticar al usuario
    // Para fines demostrativos, vamos a guardar los datos en localStorage
    if (email && password) {
        if (rememberMe) {
            localStorage.setItem('user', JSON.stringify({ email, password }));
        }
        alert('Inicio de sesión exitoso');
        window.location.href = 'menu.html'; // Redirige al menú escolar
    } else {
        alert('Por favor completa todos los campos.');
    }
}

// Función para compartir en redes sociales
function shareOnSocialMedia(platform) {
    const url = encodeURIComponent(window.location.href);
    let shareUrl = '';

    switch (platform) {
        case 'facebook':
            shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
            break;
        case 'twitter':
            shareUrl = `https://twitter.com/intent/tweet?url=${url}`;
            break;
        default:
            alert('Plataforma no soportada');
            return;
    }

    window.open(shareUrl, '_blank');
}

// Asignación de funciones al formulario
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    loginUser();
});
