// Toggle Sidebar functionality
function toggleSidebar() {
    const sidebar = document.getElementById('user-dashboard');
    sidebar.classList.toggle('open');
}

// Back to Top Button functionality (if needed)
document.addEventListener('DOMContentLoaded', function() {
    const backToTopBtn = document.getElementById('back-to-top-btn');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 200) {
            backToTopBtn.style.display = 'block';
        } else {
            backToTopBtn.style.display = 'none';
        }
    });

    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
