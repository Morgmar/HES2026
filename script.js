let wrongQuestionsPool = [];
const rawQuestions = [
  {
    q: 'Pytanie 1 \nWg Światowej Organizacji Turystyki Narodów Zjednoczonych (UNWTO) odwiedzający to:',
    a: [
      'osoba podróżująca do miejscowości znajdującej się poza jej codziennym otoczeniem na czas dłuższy niż 12 miesięcy, jeżeli podstawowym celem podróży jest podjęcie działalności zarobkowej wynagradzanej w odwiedzanej miejscowości',
      'osoba podróżująca do miejscowości znajdującej się poza jej codziennym otoczeniem na czas dłuższy niż 12 miesięcy, jeżeli podstawowym celem podróży nie jest podjęcie działalności zarobkowej wynagradzanej w odwiedzanej miejscowości',
    ],
    c: [1],
    img: '',
  },
  {
    q: 'Pytanie 2 \nRuch turystyczny to:',
    a: [
      'zbiór podróżnych motywowanych różnymi celami natury społeczno-kulturowej i zawodowej, które zamierzają osiągnąć w kraju lub za granicą, po czasowym i dobrowolnym opuszczeniu stałego miejsca zamieszkania',
      'osoby które zatrzymują się na co najmniej jedną noc oraz odwiedzający jednodniowi (bez noclegu) za granicą',
    ],
    c: [0],
    img: '',
  },
  {
    q: 'Pytanie 3 \nCzy wyjazd w celu odwiedzenia krewnych jest wyjazdem turystycznym?',
    a: ['tak', 'nie'],
    c: [0],
    img: '',
  },
  {
    q: 'Pytanie 4 \nKiedy nastąpił największy rozwój turystyki?',
    a: ['w okresie Cesarstwa Rzymskiego', 'po II wojnie światowej'],
    c: [1],
    img: '',
  },
  {
    q: 'Pytanie 5 \nWedług którego kryterium turystykę dzieli się na wiek, liczbę uczestników, czas pobytu itp.?',
    a: [
      'kryterium motywacji',
      'kryterium podmiotu',
      'kryterium pochodzenia turysty',
    ],
    c: [1],
    img: '',
  },
  {
    q: 'Pytanie 6 \nCzy motywacja może być kryterium podziału turystyki?',
    a: ['tak', 'nie'],
    c: [0],
    img: '',
  },
  {
    q: 'Pytanie 7 \nTurystyka wewnątrz krajowa to:',
    a: [
      'turystyka krajowa przyjazdowa',
      'turystyka zagraniczna przyjazdowa i wyjazdowa',
      'turystyka krajowa i zagraniczna przyjazdowa',
    ],
    c: [2],
    img: '',
  },
  {
    q: 'Pytanie 8 \nTurystyka kwalifikowana:',
    a: [
      'każda podróż krajowa lub zagraniczna, która zawiera w sobie co najmniej dwa z trzech elementów: aktywność fizyczną, interakcję z naturą, wymianę kulturową',
      'forma aktywności zaspokajająca poza miejscem zamieszkania potrzeby rozwoju oraz odnowy sił fizycznych i psychicznych, a także potrzeby informacyjno-poznawcze',
    ],
    c: [1],
    img: '',
  },
  {
    q: 'Pytanie 9 \nTurystyka wiejska to:',
    a: [
      'turystyka organizowana na obszarach wiejskich, wiąże się z niepowtarzalnymi atutami polegającymi na małej skali przedsiębiorstw, otwartej przestrzeni, kontakcie z przyrodą oraz dziedzictwie opartym na tradycyjnych społecznościach i zwyczajach pracy, jest różnorodna, co zależy od zasobów przyrodniczych, historycznych i kulturowych',
      'to forma turystyki ściśle związana z rolnictwem, z funkcjonującym gospodarstwem rolnym. Atrakcję tego rodzaju turystyki stanowi możliwość uczestniczenia w życiu gospodarstwa wiejskiego, kontakt ze zwierzętami, możliwość uczestniczenia w pracach rolnych',
    ],
    c: [0],
    img: '',
  },
  {
    q: 'Pytanie 10 \nTurystyka krajoznawcza to:',
    a: [
      'forma turystyki której głównym celem podróży jest zwiedzenie określonego obiektu, miejsca, miejscowości czy regionu',
      'wyjazdy w miejsca gdzie promowana jest ochrona natury lub w miejsca niezmienione przez ludzi',
    ],
    c: [0],
    img: '',
  },
  {
    q: 'Pytanie 11 \nTurystyka zdrowotna to:',
    a: [
      'świadome i dobrowolne udanie się na pewien okres do miejscowości posiadającej status uzdrowiska w czasie wolnym od pracy, mając na celu utrzymanie lub polepszenie obecnego stanu zdrowia przez wypoczynek fizyczny i psychiczny',
      'świadome i dobrowolne udanie się na pewien okres poza miejsce zamieszkania, w czasie wolnym od pracy w celu regeneracji ustroju, dzięki aktywnemu wypoczynkowi fizycznemu i psychicznemu',
    ],
    c: [1],
    img: '',
  },
  {
    q: 'Pytanie 12 \nCelem jakiej turystyki jest polepszenie stosunków międzyludzkich w przedsiębiorstwie, zwiększenie lojalności pracowników, wywarcie określonego wpływu na zachowanie uczestników takich imprez oraz dążenie do spełniania celów firmy i organizacji?',
    a: [
      'turystyki biznesowej',
      'turystyki kongresowej',
      'turystyki motywacyjnej',
    ],
    c: [2],
    img: '',
  },
  {
    q: 'Pytanie 13 \nCelem jakiej turystyki jest umożliwienie wyjazdów urlopowych tym, których na to nie stać?',
    a: ['turystyki weekendowej', 'turystyki socjalnej', 'autostopu'],
    c: [1],
    img: '',
  },
  {
    q: 'Pytanie 14 \nJak nazywamy turystykę która skupia się na emocjach?',
    a: ['turystyka emocji / przeżyć', 'tanatoturystyka', 'turystyka eventowa'],
    c: [0],
    img: '',
  },
  {
    q: 'Pytanie 15 \nCzy czynniki ekologiczne zaliczamy do megaczynników wpływających na rozwój turystyki?',
    a: ['nie', 'tak'],
    c: [1],
    img: '',
  },
  {
    q: 'Pytanie 16 \nMalejąca liczba urodzeń w Europie spowoduje:',
    a: [
      'potencjalne zmniejszenie liczby turystów',
      'potencjalne zwiększenie liczby turystów',
    ],
    c: [0],
    img: '',
  },
  {
    q: 'Pytanie 17 \nCzy na rozwój turystyki korzystnie wpływa wydłużanie się życia ludzi?',
    a: ['tak', 'nie'],
    c: [0],
    img: '',
  },
  {
    q: 'Pytanie 18 \nCzy ludność zamieszkująca tereny zurbanizowane i przemysłowe przejawia większe skłonności do ruchu turystycznego?',
    a: ['tak', 'nie'],
    c: [0],
    img: '',
  },
  {
    q: 'Pytanie 19 \nCzy plaża jest dobrem turystycznym?',
    a: ['tak', 'nie'],
    c: [0],
    img: '',
  },
  {
    q: 'Pytanie 20 \nWszystkie elementy środowiska przyrodniczego ze względu na swoją atrakcyjność mogą być określane jako:',
    a: ['walory turystyczne', 'dobra turystyczne'],
    c: [0],
    img: '',
  },
  {
    q: 'Pytanie 21 \nPodstawowe dobro turystyczne to:',
    a: ['góry', 'wyciąg krzesełkowy'],
    c: [0],
    img: '',
  },
  {
    q: 'Pytanie 22 \nCzy walory turystyczne mogą się zmienić w produkty turystyczne?',
    a: ['tak', 'nie'],
    c: [0],
    img: '',
  },
  {
    q: 'Pytanie 23 \nInformacja turystyczna to:',
    a: [
      'obiekt infrastruktury technicznej',
      'obiekt infrastruktury społecznej',
    ],
    c: [1],
    img: '',
  },
  {
    q: 'Pytanie 24 \nCzy sklep spożywczy może być elementem infrastruktury turystycznej?',
    a: ['tak', 'nie'],
    c: [0],
    img: '',
  },
  {
    q: 'Pytanie 25 \nUznanie społeczne i prestiż to wg Danna czynnik decydujący o wyjeździe z grupy:',
    a: ['czynników popychających', 'czynników przyciągających'],
    c: [0],
    img: '',
  },
  {
    q: 'Pytanie 26 \nKtóra perspektywa w socjologii turystyki podkreśla, że motywacją dla turystyki jest chęć doświadczenia różnicy i poszukiwania nowych doświadczeń?',
    a: [
      'perspektywa autentyczności',
      'perspektywa obcości',
      'perspektywa zabawy',
    ],
    c: [1],
    img: '',
  },
  {
    q: 'Pytanie 27 \nWszelkie środki i urządzenia obsługujące ruch turystyczny, czynniki, które ułatwiają zrealizowanie potrzeb turystów to:',
    a: ['infrastruktura turystyczna', 'gospodarka turystyczna'],
    c: [1],
    img: '',
  },
  {
    q: 'Pytanie 28 \nProdukt turystyczny w wąskim ujęciu to:',
    a: [
      'wszystko co turysta kupuje odrębnie lub w postaci zestawu',
      'całość przeżytego doświadczenia od wyjazdu do powrotu do domu',
    ],
    c: [0],
    img: '',
  },
  {
    q: 'Pytanie 29 \nRdzeń produktu:',
    a: [
      'stanowi potrzebę, jaką zaspokaja turysta, w związku z wyjazdem turystycznym',
      'właściwy przedmiot transakcji jaką dokonuje turysta nabywając produkt turystyczny',
      'zbiór dodatkowych korzyści, jakie otrzymuje turysta nabywając produkt turystyczny',
    ],
    c: [0],
    img: '',
  },
  {
    q: 'Pytanie 30 \nCzy turystyka ma wpływ na redystrybucję dochodów między regionami?',
    a: ['tak', 'nie'],
    c: [0],
    img: '',
  },
  {
    q: 'Pytanie 31 \nCzy społeczny wpływ turystyki może obejmować odrodzenie kultury?',
    a: ['tak', 'nie'],
    c: [0],
    img: '',
  },
];
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

let questions = shuffle([...rawQuestions]);
let currentIdx = 0;
let correctCount = 0;
let wrongCount = 0;
let isChecked = false;

const questionArea = document.getElementById('question-area');
const nextBtn = document.getElementById('next-btn');
const correctSpan = document.getElementById('correct-count');
const wrongSpan = document.getElementById('wrong-count');
const scoreSpan = document.getElementById('score-percentage');
function resetMainStats() {
  correctCount = 0;
  wrongCount = 0;
  currentIdx = 0; // Resetujemy indeks pytania do 0 (pierwsze pytanie)
  // Jeśli używasz procentów w statystykach, updateStats wszystko przeliczy
  updateStats(); // Odświeżamy widoczne statystyki punktowe
  loadQuestion(); // Ładujemy pierwsze pytanie od nowa, co zaktualizuje napis "Pytanie 1 z 148"
  console.log('Statystyki testu zostały zresetowane po poprawieniu błędów.');
}
function updateStats() {
  const cEl = document.getElementById('correct-count');
  const wEl = document.getElementById('wrong-count');
  const pEl = document.getElementById('score-percentage');

  if (cEl) cEl.innerText = correctCount;
  if (wEl) wEl.innerText = wrongCount;

  if (pEl) {
    // Obliczamy sumę pytań na których udzielono odpowiedzi
    const sumaPytan = correctCount + wrongCount;
    console.log(correctCount, wrongCount, sumaPytan);

    if (sumaPytan > 0) {
      // Formuła: (Poprawne - Błędne) / Wszystkie udzielone * 100
      // let wynik =
      //   ((correctCount - wrongCount) / (correctCount + wrongCount)) * 100;

      let wynik = (correctCount / (correctCount + wrongCount)) * 100; // tylko dodanie odp

      // Zabezpieczenie przed wynikiem ujemnym
      if (wynik < 0) wynik = 0;

      pEl.innerText = Math.round(wynik) + '%';
    } else {
      pEl.innerText = '0%';
    }
  }
}
function renderImage(qData) {
  // 1. Sprawdzamy, czy w obiekcie pytania jest ścieżka do zdjęcia
  if (qData.img && qData.img !== '') {
    const imgDiv = document.createElement('div');

    // Nadajemy style, aby obrazek był wycentrowany i dopasowany
    imgDiv.style.cssText = 'margin: 15px 0; text-align: center; width: 100%;';

    imgDiv.innerHTML = `
      <img src="${qData.img}" alt="Ilustracja do pytania" 
           style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.15);">
    `;

    // Dodajemy obrazek do questionArea (zostanie dodany pod tekstem pytania)
    questionArea.appendChild(imgDiv);
  }
}
function loadQuestion() {
  isChecked = false;
  nextBtn.innerText = 'Sprawdź odpowiedź';
  const qData = questions[currentIdx];

  questionArea.innerHTML = `
        <div style="color: #666; margin-bottom: 10px;">Pytanie ${currentIdx + 1} z ${questions.length}</div>
        <h3 style="margin-bottom: 20px;">${qData.q}</h3>
    `;
  //  WYWOŁANIE FUNKCJI OBRAZKA (to dodajemy teraz)
  renderImage(qData);
  qData.a.forEach((ans, i) => {
    const div = document.createElement('div');
    div.id = `opt-container-${i}`;
    // div.style.cssText =
    //   'padding: 12px; margin: 8px 0; border: 1px solid #ddd; border-radius: 8px; cursor: pointer; transition: 0.3s; display: flex; align-items: center;';
    // USUNĘLIŚMY cssText, ZAMIAST TEGO DODAJEMY KLASĘ:
    div.className = 'answer-card';

    div.innerHTML = `
        <input type="checkbox" value="${i}" class="ans-checkbox" 
               style="margin-right: 15px; transform: scale(1.2); pointer-events: none;">
        <span style="font-size: 1.05rem; pointer-events: none;">${ans}</span>
    `;
    // Usunąłem label, aby nie dublować kliknięć. Używamy spanu.
    div.innerHTML = `
        <input type="checkbox" value="${i}" class="ans-checkbox" 
               style="margin-right: 15px; transform: scale(1.2); pointer-events: none;">
        <span style="font-size: 1.05rem; pointer-events: none;">${ans}</span>
    `;

    div.onclick = () => {
      if (isChecked) return;

      const cb = div.querySelector('input');
      cb.checked = !cb.checked; // Ręcznie przełączamy stan

      // Opcjonalne: Wizualne podświetlenie kafelka po zaznaczeniu
      if (cb.checked) {
        div.style.backgroundColor = '#eef6ff';
        div.style.borderColor = '#007bff';
      } else {
        div.style.backgroundColor = '#fff';
        div.style.borderColor = '#ddd';
      }
    };

    questionArea.appendChild(div);
  });
  startTimer();
}

nextBtn.onclick = () => {
  const checkboxes = document.querySelectorAll('.ans-checkbox');
  const selected = Array.from(checkboxes)
    .filter(cb => cb.checked)
    .map(cb => parseInt(cb.value));
  const qData = questions[currentIdx]; // Pobieramy dane aktualnego pytania
  const correct = qData.c;

  if (selected.length === 0 && !isChecked) {
    alert('Wybierz odpowiedź!');
    return;
  }

  if (!isChecked) {
    clearInterval(timerInterval); // Zatrzymujemy odliczanie po kliknięciu "Sprawdź"
    const isCorrect =
      selected.length === correct.length &&
      selected.every(val => correct.includes(val));

    if (isCorrect) {
      correctCount++;
    } else {
      wrongCount++;

      // --- NOWA LOGIKA PULI BŁĘDÓW (Dodana bez usuwania reszty) ---
      if (!wrongQuestionsPool.some(q => q.q === qData.q)) {
        wrongQuestionsPool.push(qData);
        updateWrongBadge(); // Ta funkcja musi być zdefiniowana w Twoim kodzie
      }
      // ----------------------------------------------------------
    }

    // Wywołujemy aktualizację statystyk ZARAZ po zmianie licznika
    updateStats();

    checkboxes.forEach((cb, i) => {
      cb.disabled = true;
      const container = document.getElementById(`opt-container-${i}`);
      if (correct.includes(i)) {
        container.style.backgroundColor = '#d4edda';
        container.style.borderColor = '#28a745';
      } else if (cb.checked) {
        container.style.backgroundColor = '#f8d7da';
        container.style.borderColor = '#dc3545';
      }
    });

    nextBtn.innerText = 'Następne pytanie »';
    isChecked = true;
  } else {
    currentIdx++;
    if (currentIdx < questions.length) {
      loadQuestion();
    } else {
      const finalScore = Math.round(
        ((correctCount - wrongCount) / questions.length) * 100,
      );
      questionArea.innerHTML = `
                <div style="text-align: center; padding: 40px;">
                    <h2>Test zakończony!</h2>
                    <p style="font-size: 2rem; margin: 20px 0; font-weight: bold;">Skuteczność: ${finalScore}%</p>
                    <p>Poprawne: ${correctCount} | Błędne: ${wrongCount}</p>
                </div>`;
      nextBtn.innerText = 'Zacznij od nowa';
      nextBtn.onclick = () => location.reload();
    }
  }
};
let timerInterval; // Zmienna przechowująca interwał odliczania
const TIME_LIMIT = 60; // Limit czasu w sekundach

function startTimer() {
  let timeLeft = TIME_LIMIT;
  const display = document.getElementById('timer-display');
  display.innerText = timeLeft + 's';
  display.style.color = '#e74c3c'; // Reset koloru na czerwony/standardowy

  // Czyścimy stary interwał, jeśli istniał
  clearInterval(timerInterval);

  timerInterval = setInterval(() => {
    timeLeft--;
    display.innerText = timeLeft + 's';

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      timeIsUp(); // Wywołujemy funkcję końca czasu
    }
  }, 1000);
}

function timeIsUp() {
  if (isChecked) return;

  isChecked = true;
  clearInterval(timerInterval); // Zatrzymujemy timer

  wrongCount++;
  updateStats();

  const qData = questions[currentIdx];
  const correctAnswers = qData.c; // Tablica z indeksami poprawnych odp.

  // Przechodzimy przez wszystkie kafelki, aby pokazać poprawne odpowiedzi
  qData.a.forEach((ans, i) => {
    const div = document.getElementById(`opt-container-${i}`);
    if (div) {
      if (correctAnswers.includes(i)) {
        // Podświetlamy poprawną odpowiedź na zielono
        div.style.backgroundColor = '#d4edda';
        div.style.borderColor = '#28a745';
        div.style.color = '#155724';
        div.style.fontWeight = 'bold';
      } else {
        // Resztę lekko wygaszamy
        div.style.opacity = '0.6';
      }
    }
  });

  // Informacja dla użytkownika
  questionArea.innerHTML += `
        <div style="color: #e74c3c; font-weight: bold; text-align: center; margin-top: 20px; padding: 10px; border: 2px dashed #e74c3c; border-radius: 8px;">
            CZAS MINĄŁ! <br> <span style="color: #28a745;">Zielonym kolorem zaznaczono poprawne odpowiedzi.</span>
        </div>
    `;

  nextBtn.innerText = 'Następne pytanie »';
}
loadQuestion();
// --- LOGIKA OBSŁUGI MODALA I POWTÓREK ---

const modal = document.getElementById('wrong-modal');
const openModalBtn = document.getElementById('open-wrong-btn');
const closeModal = document.getElementById('close-modal');
const modalQuestionArea = document.getElementById('modal-question-area');
const modalNextBtn = document.getElementById('modal-next-btn');
const modalHintBtn = document.getElementById('modal-hint-btn');

modalHintBtn.onclick = () => {
  const qData = wrongQuestionsPool[currentModalIdx];
  const correctIndices = qData.c; // Pobieramy indeksy poprawnych odpowiedzi

  // Pobieramy wszystkie kafelki w modalu
  const cards = modalQuestionArea.querySelectorAll('.answer-card');

  cards.forEach((card, index) => {
    if (correctIndices.includes(index)) {
      // Podświetlamy poprawne na delikatny zielony
      card.style.border = '2px dashed #27ae60';
      card.style.backgroundColor = '#f0fff4';

      // Opcjonalnie: zaznaczamy checkbox za użytkownika
      const cb = card.querySelector('input');
      if (cb) cb.checked = true;
    }
  });

  modalHintBtn.innerText = 'Podpowiedziano!';
  modalHintBtn.disabled = true;
  modalHintBtn.style.opacity = '0.6';
};
let currentModalIdx = 0;
let isModalChecked = false;
// RESET PRZYCISKU PODPOWIEDZI
modalHintBtn.innerText = 'Podpowiedź';
modalHintBtn.disabled = false;
modalHintBtn.style.opacity = '1';

modalNextBtn.innerText = 'Sprawdź/Dalej';
// Funkcja aktualizująca czerwony przycisk (pokazuje/ukrywa i odświeża licznik)
function updateWrongBadge() {
  const badge = document.getElementById('wrong-count-badge');
  const btn = document.getElementById('open-wrong-btn');
  if (badge && btn) {
    badge.innerText = wrongQuestionsPool.length;
    btn.style.display = wrongQuestionsPool.length > 0 ? 'block' : 'none';
  }
}

// Otwieranie okna powtórek
openModalBtn.onclick = () => {
  if (wrongQuestionsPool.length === 0) return;
  currentModalIdx = 0;
  modal.style.display = 'block';
  loadModalQuestion();
};

// Zamykanie okna
closeModal.onclick = () => {
  modal.style.display = 'none';
};

// Ładowanie pytania do okna powtórek
function loadModalQuestion() {
  isModalChecked = false;
  if (modalHintBtn) {
    modalHintBtn.innerText = 'Pokaż poprawne odpowiedzi (Podpowiedź)';
    modalHintBtn.disabled = false;
    modalHintBtn.style.opacity = '1';
    modalHintBtn.style.background = '#f39c12';
  }
  modalNextBtn.innerText = 'Sprawdź odpowiedź';
  modalNextBtn.style.background = '#27ae60';
  const qData = wrongQuestionsPool[currentModalIdx];

  modalQuestionArea.innerHTML = `
        <div style="color: #e74c3c; font-weight: bold; margin-bottom: 10px; border-bottom: 1px solid #eee; padding-bottom: 10px;">
            TRYB POWTÓRKI: Zostało ${wrongQuestionsPool.length} pytań
        </div>
        <h3 style="margin-bottom: 20px;">${qData.q.replace(/\n/g, '<br>')}</h3>
    `;

  // Renderujemy odpowiedzi dokładnie w kolejności z tablicy qData.a
  // i przypisujemy im oryginalne indeksy (i)
  qData.a.forEach((ans, i) => {
    const div = document.createElement('div');
    div.className = 'answer-card';
    div.style.display = 'flex';
    div.style.alignItems = 'center';
    div.style.padding = '12px';
    div.style.margin = '8px 0';
    div.style.border = '1px solid #ddd';
    div.style.borderRadius = '8px';
    div.style.cursor = 'pointer';

    div.innerHTML = `
            <input type="checkbox" value="${i}" class="modal-cb" style="margin-right: 15px; pointer-events: none;">
            <span style="pointer-events: none;">${ans}</span>
        `;

    div.onclick = () => {
      if (isModalChecked) return;
      const cb = div.querySelector('input');
      cb.checked = !cb.checked;
      div.style.backgroundColor = cb.checked ? '#eef6ff' : '#fff';
      div.style.borderColor = cb.checked ? '#3498db' : '#ddd';
    };
    modalQuestionArea.appendChild(div);
  });
}

// Logika przycisku podpowiedzi (Hint)
modalHintBtn.onclick = () => {
  const qData = wrongQuestionsPool[currentModalIdx];
  const correctIndices = qData.c;
  const cards = modalQuestionArea.querySelectorAll('.answer-card');

  cards.forEach((card, index) => {
    const cb = card.querySelector('input');
    if (correctIndices.includes(index)) {
      // Podświetlamy tylko faktycznie poprawne odpowiedzi
      card.style.border = '2px dashed #27ae60';
      card.style.backgroundColor = '#f0fff4';
      if (cb) cb.checked = true;
    } else {
      // Czyścimy wszystko inne, co użytkownik mógł zaznaczyć błędnie
      card.style.border = '1px solid #ddd';
      card.style.backgroundColor = '#fff';
      if (cb) cb.checked = false;
    }
  });

  modalHintBtn.innerText = 'Podpowiedziano!';
  modalHintBtn.disabled = true;
  modalHintBtn.style.opacity = '0.6';
};

// Logika przycisku "Dalej" wewnątrz okna powtórek
modalNextBtn.onclick = () => {
  const qData = wrongQuestionsPool[currentModalIdx];

  if (!isModalChecked) {
    const selected = Array.from(document.querySelectorAll('.modal-cb'))
      .filter(cb => cb.checked)
      .map(cb => parseInt(cb.value));

    const isCorrect =
      selected.length === qData.c.length &&
      selected.every(val => qData.c.includes(val));

    if (isCorrect) {
      wrongQuestionsPool.splice(currentModalIdx, 1);
      modalQuestionArea.innerHTML += `<div style="color: #27ae60; font-weight: bold; margin-top: 15px; text-align: center;">✔ Dobrze! Pytanie usunięte z listy błędów.</div>`;
      if (currentModalIdx >= wrongQuestionsPool.length) currentModalIdx = 0;
    } else {
      currentModalIdx = (currentModalIdx + 1) % wrongQuestionsPool.length;
      modalQuestionArea.innerHTML += `<div style="color: #e74c3c; font-weight: bold; margin-top: 15px; text-align: center;">✖ Nadal błąd! Pytanie wróci do Ciebie w tej pętli.</div>`;
    }

    isModalChecked = true;
    modalNextBtn.innerText = 'Następne';
    modalNextBtn.style.background = '#3498db';
    updateWrongBadge();
  } else {
    if (wrongQuestionsPool.length === 0) {
      modal.style.display = 'none';
      resetMainStats();
      alert(
        'Gratulacje! Wszystkie błędy poprawione. Statystyki główne zostały wyzerowane.',
      );
    } else {
      if (currentModalIdx >= wrongQuestionsPool.length) currentModalIdx = 0;
      if (document.getElementById('add-flash-modal')) {
        document.getElementById('add-flash-modal').style.display = 'block';
      }
      loadModalQuestion();
    }
  }
};
// --- SILNIK FISZEK - INTEGRACJA ---
let flashcards = JSON.parse(localStorage.getItem('user_flashcards')) || [];

function updateFlashBadge() {
  const badge = document.getElementById('flash-badge');
  if (badge) badge.innerText = flashcards.length;
}

// Obsługa dodawania (wywoływana przez addEventListener)
function handleAddFlash(type) {
  let qData =
    type === 'main'
      ? questions[currentQuestionIndex]
      : wrongQuestionsPool[currentModalIdx];
  if (!qData) return;

  if (flashcards.some(f => f.q === qData.q)) {
    alert('To pytanie już jest w fiszkach.');
    return;
  }

  flashcards.push({
    q: qData.q,
    a: 'POPRAWNE:\n' + qData.c.map(i => qData.a[i]).join('\n'),
  });
  updateFlashBadge();
  alert('Dodano!');
}

// Podpięcie zdarzeń pod przyciski (musi być na końcu)
document
  .getElementById('add-flash-main')
  .addEventListener('click', function () {
    handleAddFlash('main');
  });

if (document.getElementById('add-flash-modal')) {
  document
    .getElementById('add-flash-modal')
    .addEventListener('click', function () {
      handleAddFlash('modal');
    });
}

// Obsługa modalu przeglądania
document.getElementById('flash-counter-btn').onclick = function () {
  if (flashcards.length === 0) return alert('Brak fiszek.');
  currentFlashIdx = 0;
  renderFlash();
  document.getElementById('flash-modal').style.display = 'flex';
};

let currentFlashIdx = 0;
function renderFlash() {
  document.getElementById('flash-front-txt').innerText =
    flashcards[currentFlashIdx].q;
  document.getElementById('flash-back-txt').innerText =
    flashcards[currentFlashIdx].a;
  document.getElementById('flash-inner-wrap').classList.remove('is-flipped');
}

document.getElementById('flash-card-trigger').onclick = function () {
  document.getElementById('flash-inner-wrap').classList.toggle('is-flipped');
};

document.getElementById('flash-next-btn').onclick = function (e) {
  e.stopPropagation();
  currentFlashIdx = (currentFlashIdx + 1) % flashcards.length;
  renderFlash();
};

document.getElementById('flash-del-btn').onclick = function (e) {
  e.stopPropagation();
  flashcards.splice(currentFlashIdx, 1);
  localStorage.setItem('user_flashcards', JSON.stringify(flashcards));
  updateFlashBadge();
  if (flashcards.length === 0)
    document.getElementById('flash-modal').style.display = 'none';
  else {
    currentFlashIdx %= flashcards.length;
    renderFlash();
  }
};

document.getElementById('close-flash').onclick = function () {
  document.getElementById('flash-modal').style.display = 'none';
};

updateFlashBadge();
