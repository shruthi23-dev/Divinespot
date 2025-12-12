function simulateLogin(event) {
  event.preventDefault();
  console.log("Login function called"); 
  window.location.href = "dashboard.html";
}
function showInfo(bookId, element) {
  document.querySelectorAll(".book-info").forEach(e => e.remove());

  let info = "";
  if (bookId === "book1") {
    info = `
      <div class="book-info">
        <h4>Ramayanam</h4>
        <p><strong>Author:</strong>  Valmiki<br>
        <strong>When:</strong>  ~500 BCE<br>
        <strong>Main:</strong>  Journey of Rama and ideals of dharma.<br>
        <strong> To Learn:</strong>  Devotion, morality, and sacrifice.</p>
      </div>`;
  } else if (bookId === "book2") {
    info = `
      <div class="book-info">
        <h4>Mahabharatham</h4>
        <p><strong>Author:</strong> Vyasa<br>
        <strong>When:</strong> ~400 BCE<br>
        <strong>Main:</strong> Kurukshetra war and righteousness.<br>
        <strong>Learn:</strong> Karma, dharma, and truth.</p>
      </div>`;
  } else if (bookId === "book3") {
    info = `
      <div class="book-info">
        <h4>Bhagavath Githa</h4>
        <p><strong>Author:</strong> Vyasa<br>
        <strong>When:</strong> Part of Mahabharata (~400 BCE)<br>
        <strong>Main:</strong> Krishna's wisdom to Arjuna.<br>
        <strong>Learn:</strong> Purpose, duty, detachment.</p>
      </div>`;
  } else if (bookId === "book4") {
    info = `
      <div class="book-info">
        <h4>Garuda Purana</h4>
        <p><strong>Author:</strong> Unknown<br>
        <strong>When:</strong> ~400–1000 CE<br>
        <strong>Main:</strong> Life after death, rituals.<br>
        <strong>Learn:</strong> Karma, rebirth, liberation.</p>
      </div>`;
  } else if (bookId === "book5") {
    info = `
      <div class="book-info">
        <h4>Devi Bhagavatham</h4>
        <p><strong>Author:</strong> Vyasa<br>
        <strong>When:</strong> ~9th century CE<br>
        <strong>Main:</strong> Stories of Divine Mother.<br>
        <strong>Learn:</strong> Power, protection, devotion.</p>
      </div>`;
  } else if (bookId === "book6") {
    info = `
      <div class="book-info">
        <h4>Shiva Purana</h4>
        <p><strong>Author:</strong> Vyasa<br>
        <strong>When:</strong> ~9th–10th century CE<br>
        <strong>Main:</strong> Stories of Lord Shiva.<br>
        <strong>Learn:</strong> Strength, renunciation, truth.</p>
      </div>`;
  }

  element.insertAdjacentHTML('beforeend', info);
  setTimeout(() => {
    const box = element.querySelector(".book-info");
    if (box) box.remove();
  }, 10000);
}

document.getElementById('reviewForm').addEventListener('submit', function(e) {
      e.preventDefault();
      const name = this.name.value;
      const email = this.email.value;
      const review = this.review.value;}