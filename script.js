function scrollToRegion() {
    // เลื่อนหน้าไปยังส่วนเลือกภูมิภาค
    const regionSection = document.getElementById("regionSelection");
    regionSection.scrollIntoView({ behavior: 'smooth' });
}

function navigateToRegion(region) {
    // กำหนดเส้นทางให้ตรงกับโฟลเดอร์ของแต่ละภูมิภาค
    if (region === 'north') {
        window.location.href = 'region./north.html';
    } else if (region === 'central') {
        window.location.href = 'region./central.html';
    } else if (region === 'northeast') {
        window.location.href = 'region./northeast.html';
    } else if (region === 'south') {
        window.location.href = 'region./south.html';
    }
}



let currentIndex = 0;

        function toggleAuthor() {
            const containers = document.querySelectorAll('.container');
            containers.forEach((container, index) => {
                container.style.opacity = index === currentIndex ? '1' : '0';
                if (index !== currentIndex) {
                    container.style.display = 'none';
                } else {
                    container.style.display = 'block';
                }
            });
            currentIndex = (currentIndex + 1) % containers.length;
        }

        function closeContainers() {
            const containers = document.querySelectorAll('.container');
            containers.forEach(container => container.style.display = 'none');
            clearInterval(toggleInterval); // Stop the interval when closed
        }

        const toggleInterval = setInterval(toggleAuthor, 3000);

        window.onload = toggleAuthor;