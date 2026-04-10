// Simple Typing Effect for Terminal
document.addEventListener('DOMContentLoaded', () => {
    const lines = [
        { text: "Downloading FemtoClaw v0.1.0...", delay: 500 },
        { text: "Compiling Brain...", delay: 1000 },
        { text: "Compiling Memory...", delay: 1500 },
        { text: "✅ Ready to grasp.", delay: 2000, class: "success" }
    ];

    const terminalBody = document.querySelector('.terminal-body');
    let cumulativeDelay = 0;

    // Clear initial static content for animation
    terminalBody.innerHTML = '<p><span class="prompt">$</span> cargo install femtoclaw</p>';

    lines.forEach((line, index) => {
        cumulativeDelay += line.delay;
        setTimeout(() => {
            const p = document.createElement('p');
            p.className = line.class || 'output';
            p.textContent = line.text;
            // Insert before the cursor line
            const cursorLine = terminalBody.querySelector('.cursor').parentElement;
            terminalBody.insertBefore(p, cursorLine);
        }, cumulativeDelay);
    });
});
