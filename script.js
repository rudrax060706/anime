/* ===== LOTTIE SESSION LOGIC ===== */

const welcomeScreen = document.getElementById("welcome-screen");
const loadingScreen = document.getElementById("loading-screen");

// Welcome animation
const welcomeAnim = lottie.loadAnimation({
    container: document.getElementById("welcome-animation"),
    renderer: "svg",
    loop: false,
    autoplay: false,
    path: "welcome.json"
});

// Loading animation
const loadingAnim = lottie.loadAnimation({
    container: document.getElementById("loading-animation"),
    renderer: "svg",
    loop: true,
    autoplay: false,
    path: "Loading.json"
});

window.addEventListener("load", () => {
    const hasSession = sessionStorage.getItem("home_loaded");

    if (!hasSession) {
        // 🔥 FIRST LOAD IN THIS TAB → WELCOME
        welcomeScreen.style.display = "flex";
        loadingScreen.style.display = "none";

        welcomeAnim.play();

        sessionStorage.setItem("home_loaded", "true");

        setTimeout(() => {
            welcomeScreen.style.display = "none";
        }, 5000);

    } else {
        // 🔁 REDIRECT / RELOAD → LOADING
        loadingScreen.style.display = "flex";
        welcomeScreen.style.display = "none";

        loadingAnim.play();

        setTimeout(() => {
            loadingScreen.style.display = "none";
        }, 2000);
    }
});


/* ===== ANIME DATA ===== */
const anime = [
    {
        id: 1,
        name: "One Piece",
        Creator: "Eiichiro Oda",
        img: "https://m.media-amazon.com/images/M/MV5BMTNjNGU4NTUtYmVjMy00YjRiLTkxMWUtNzZkMDNiYjZhNmViXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        Episodes: 30,
        rating: "8.9",
        genres: ["Action", "Adventure", "Fantasy"],
        stream: "https://www.youtube.com/embed/S8_YwFLCh4U"
    },
    {
        id: 2,
        name: "Naruto",
        Creator: "Masashi Kishimoto",
        img: "https://m.media-amazon.com/images/I/810Xo+d8xlL.jpg",
        Episodes: 720,
        rating: "8.4",
        genres: ["Action", "Adventure"],
        stream: "https://www.youtube.com/embed/S8_YwFLCh4U"
    },
    {
        id: 3,
        name: "Attack on Titan",
        Creator: "Hajime Isayama",
        img: "https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcT2hZFPukRv-nlSmof55IScAhbxptuTq0yUYViVzUzQdddvrm5NQyah7oDfNSzR-ilu363EhGQSYbkSNYPr",
        Episodes: 94,
        rating: "9.0",
        genres: ["Action", "Drama", "Thriller"],
        stream: "https://www.youtube.com/embed/S8_YwFLCh4U"
    },
    {
        id: 4,
        name: "Fullmetal Alchemist: Brotherhood",
        Creator: "Hiromu Arakawa",
        img: "https://images.justwatch.com/poster/8906736/s718/season-1.jpg",
        Episodes: 64,
        rating: "9.1",
        genres: ["Action", "Fantasy"],
        stream: "https://www.youtube.com/embed/S8_YwFLCh4U"
    },
    {
        id: 5,
        name: "Death Note",
        Creator: "Tsugumi Ohba",
        img: "https://m.media-amazon.com/images/M/MV5BYTgyZDhmMTEtZDFhNi00MTc4LTg3NjUtYWJlNGE5Mzk2NzMxXkEyXkFqcGc@._V1_.jpg",
        Episodes: 37,
        rating: "8.6",
        genres: ["Mystery", "Psychological"],
        stream: "https://www.youtube.com/embed/S8_YwFLCh4U"
    },
    {
        id: 6,
        name: "My Hero Academia",
        Creator: "Kohei Horikoshi",
        img: "https://m.media-amazon.com/images/M/MV5BY2QzODA5OTQtYWJlNi00ZjIzLThhNTItMDMwODhlYzYzMjA2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        Episodes: 113,
        rating: "8.2",
        genres: ["Action", "Super Power"],
        stream: "https://www.youtube.com/embed/S8_YwFLCh4U"
    },
    {
        id: 7,
        name: "Dragon Ball Z",
        Creator: "Akira Toriyama",
        img: "https://m.media-amazon.com/images/S/pv-target-images/334f00b53cf3ef848ea7048b25711bc98e8236ce1685a096990c80d0965835ea.png",
        Episodes: 291,
        rating: "8.7",
        genres: ["Action", "Martial Arts"],
        stream: "https://www.youtube.com/embed/S8_YwFLCh4U"
    },
    {
        id: 8,
        name: "Demon Slayer",
        Creator: "Koyoharu Gotouge",
        img: "https://m.media-amazon.com/images/M/MV5BMWU1OGEwNmQtNGM3MS00YTYyLThmYmMtN2FjYzQzNzNmNTE0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        Episodes: 44,
        rating: "8.5",
        genres: ["Action", "Supernatural"],
        stream: "https://www.youtube.com/embed/S8_YwFLCh4U"
    },
    {
        id: 9,
        name: "Bleach",
        Creator: "Tite Kubo",
        img: "https://m.media-amazon.com/images/M/MV5BMjgyM2QzMjAtOGZjOS00OGFkLTkxZGYtMDJjZGM5MzIzYmM3XkEyXkFqcGc@._V1_.jpg",
        Episodes: 366,
        rating: "8.1",
        genres: ["Action", "Supernatural"],
        stream: "https://www.youtube.com/embed/S8_YwFLCh4U"
    },
    {
        id: 10,
        name: "Jujutsu Kaisen",
        Creator: "Gege Akutami",
        img: "https://m.media-amazon.com/images/M/MV5BNmI1MmYxNWQtY2E5NC00ZTlmLWIzZGEtNzM1YmE3NDA5NzhjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        Episodes: 24,
        rating: "8.6",
        genres: ["Action", "Dark Fantasy"],
        stream: "https://www.youtube.com/embed/S8_YwFLCh4U"
    }
];


/* ===== ANIME LIST PAGE ===== */
const list = document.getElementById("anime-list");
if (list) {
    anime.forEach(a => {
        const col = document.createElement("div");
        col.className = "col-6 col-sm-6 col-md-4 col-lg-3";

        const card = document.createElement("div");
        card.className = "card bg-dark text-white anime-card position-relative";

        const img = document.createElement("img");
        img.src = a.img;
        img.className = "card-img-top";

        const overlay = document.createElement("div");
        overlay.className = "overlay";

        const title = document.createElement("h6");
        title.textContent = a.name;

        const ep = document.createElement("small");
        ep.textContent = `Episodes: ${a.Episodes}`;

        const btn = document.createElement("button");
        btn.className = "btn btn-sm btn-anime mt-2";
        btn.textContent = "Watch Now";
        btn.addEventListener("click", () => {
            window.location.href = `detail.html?id=${a.id}`;
        });

        overlay.appendChild(title);
        overlay.appendChild(ep);
        overlay.appendChild(document.createElement("br"));
        overlay.appendChild(btn);

        card.appendChild(img);
        card.appendChild(overlay);
        col.appendChild(card);

        list.appendChild(col);
    });
}

/* ===== ANIME DETAIL PAGE ===== */
const params = new URLSearchParams(window.location.search);
const animeId = params.get("id");
const data = anime.find(a => a.id == animeId);

if (data) {
    // Set data
    document.getElementById("anime-img").src = data.img;
    document.getElementById("anime-name").textContent = data.name;
    document.getElementById("anime-creator").textContent = data.Creator;
    document.getElementById("anime-episodes").textContent = data.Episodes;
    document.getElementById("anime-rating").textContent = data.rating || "-";
    document.getElementById("hero").style.backgroundImage = `url(${data.img})`;

    // Genres
    if (data.genres) {
        data.genres.forEach(g => {
            document.getElementById("anime-genres").innerHTML += `<span>${g}</span>`;
        });
    }

    // Episodes buttons
    const epBox = document.getElementById("episodeContainer");
    if (epBox) {
        for (let i = 1; i <= data.Episodes; i++) {
            const btn = document.createElement("div");
            btn.className = "episode-btn";
            btn.textContent = i;
            btn.onclick = () => playEpisode(i, btn);
            epBox.appendChild(btn);
        }
    }
} else if (document.getElementById("anime-img")) {
    document.body.innerHTML = "<h2 class='text-center mt-5'>Anime not found</h2>";
    throw new Error("Invalid ID");
}

function playEpisode(ep, el) {
    document.querySelectorAll(".episode-btn")
        .forEach(b => b.classList.remove("active"));

    el.classList.add("active");

    const playerBox = document.getElementById("playerBox");
    if (playerBox) playerBox.style.display = "block";

    const video = document.getElementById("videoPlayer");
    if (video) video.src = data.stream + "?episode=" + ep;
}

/* ===== GENRES LOGIC WITH LOADING ===== */
const genreToggle = document.getElementById("genreToggle");
const genreSection = document.getElementById("genre-section");
const genreList = document.getElementById("genre-list");

if (genreToggle && genreSection && genreList) {
    // Get unique genres from anime data
    const allGenres = [...new Set(anime.flatMap(a => a.genres))];

    // Render genre buttons
    allGenres.forEach(g => {
        const btn = document.createElement("button");
        btn.className = "genre-btn text-white btn btn-sm m-1";
        btn.textContent = g;
        btn.addEventListener("click", () => showGenreAnimeWithLoading(g));
        genreList.appendChild(btn);
    });

    // Toggle genre section
    genreToggle.addEventListener("click", () => {
        genreSection.classList.toggle("d-none");
    });
}

// Show anime for selected genre with loading animation
function showGenreAnimeWithLoading(genre) {
    // Show loading screen
    loadingScreen.style.display = "flex";
    welcomeScreen.style.display = "none";
    loadingAnim.play();

    setTimeout(() => {
        // Hide loading screen
        loadingScreen.style.display = "none";

        // Render filtered anime
        showGenreAnime(genre);
    }, 3000); // 800ms delay, adjust if needed
}

// Render anime list by genre
function showGenreAnime(genre) {
    const list = document.getElementById("anime-list");
    if (!list) return;

    // Clear current list
    list.innerHTML = "";

    // Filter anime by genre
    const filtered = anime.filter(a => a.genres.includes(genre));

    // Render filtered anime
    filtered.forEach(a => {
        const col = document.createElement("div");
        col.className = "col-6 col-sm-6 col-md-4 col-lg-3";

        const card = document.createElement("div");
        card.className = "card bg-dark text-white anime-card position-relative";

        const img = document.createElement("img");
        img.src = a.img;
        img.className = "card-img-top";

        const overlay = document.createElement("div");
        overlay.className = "overlay";

        const title = document.createElement("h6");
        title.textContent = a.name;

        const ep = document.createElement("small");
        ep.textContent = `Episodes: ${a.Episodes}`;

        const btn = document.createElement("button");
        btn.className = "btn btn-sm btn-anime mt-2";
        btn.textContent = "Watch Now";
        btn.addEventListener("click", () => {
            window.location.href = `detail.html?id=${a.id}`;
        });

        overlay.appendChild(title);
        overlay.appendChild(ep);
        overlay.appendChild(document.createElement("br"));
        overlay.appendChild(btn);

        card.appendChild(img);
        card.appendChild(overlay);
        col.appendChild(card);

        list.appendChild(col);
    });
}

/* ===== TOP ANIME PAGE ===== */

/* ===== MANUAL TOP ANIME ORDER ===== */
const topAnimeOrder = [
    4,  // Fullmetal Alchemist: Brotherhood
    3,  // Attack on Titan
    1,  // One Piece
    7,  // Dragon Ball Z
    5,  // Death Note
    10, // Jujutsu Kaisen
    8,  // Demon Slayer
    2,  // Naruto
    6,  // My Hero Academia
    9   // Bleach
];

const topList = document.getElementById("top-anime-list");

if (topList) {
    topAnimeOrder.forEach(id => {
        const a = anime.find(item => item.id === id);
        if (!a) return;

        const col = document.createElement("div");
        col.className = "col-6 col-sm-6 col-md-4 col-lg-3";

        const card = document.createElement("div");
        card.className = "card bg-dark text-white anime-card position-relative";

        const img = document.createElement("img");
        img.src = a.img;
        img.className = "card-img-top";

        const overlay = document.createElement("div");
        overlay.className = "overlay";

        const title = document.createElement("h6");
        title.textContent = a.name;

        const rating = document.createElement("small");
        rating.textContent = `IMDb: ${a.rating}`;

        const btn = document.createElement("button");
        btn.className = "btn btn-sm btn-anime mt-2";
        btn.textContent = "Watch Now";
        btn.onclick = () => {
            window.location.href = `detail.html?id=${a.id}`;
        };

        overlay.append(title, rating, document.createElement("br"), btn);
        card.append(img, overlay);
        col.appendChild(card);
        topList.appendChild(col);
    });
}
function goToTopAnime() {
    const loadingScreen = document.getElementById("loading-screen");

    if (loadingScreen && typeof loadingAnim !== "undefined") {
        loadingScreen.style.display = "flex";
        loadingAnim.play();
    }

    setTimeout(() => {
        window.location.href = "/top.html";
    }, 1200);
}
