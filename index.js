function showSection(sectionId) {
    // Remove active class from all sections
    const sections = document.querySelectorAll('.content-section');
    sections.forEach((section) => {
        section.classList.remove('active');
    });

    // Add active class to the selected section
    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.classList.add('active');
    }
}
