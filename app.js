const posts = [
    {
        title: "Embrace landscape",
        categories: ["Lecture"],
        date: "2020-10-05",
        excerpt: "ARC413 Lecture Series — Guest lecture poster.",
        image: "./assets/posters/ARC413_MAD lecture.jpg",
        href: "./post-embrace-landscape.html"
    },
    {
        title: "Parametric Architectural Systems",
        categories: ["Lecture"],
        date: "2021-10-14",
        excerpt: "Guest lecture poster — Parametric design.",
        image: "./assets/posters/Eliana Nigro.jpg",
        href: "./post-parametric.html"
    },
    {
        title: "Towards A New Landscape",
        categories: ["Lecture"],
        date: "2021-09-28",
        excerpt: "Guest lecture poster.",
        image: "./assets/posters/Guest Lecture Subharthi Guha.jpg",
        href: "./post-towards.html"
    },
    {
        title: "Urban Regeneration",
        categories: ["Lecture"],
        date: "2019-09-26",
        excerpt: "Guest lecture poster — Urban regeneration.",
        image: "./assets/posters/Guest Lecture.jpg",
        href: "./post-urban-regeneration.html"
    },
    {
        title: "Practice in China",
        categories: ["Lecture"],
        date: "2019-10-14",
        excerpt: "Guest lecture poster.",
        image: "./assets/posters/Hann Poster_high res.jpg",
        href: "./post-practice-in-china.html"
    },
    {
        title: "xArch symposium 2023",
        categories: ["Symposium"],
        date: "2023-11-11",
        excerpt: "Symposium poster.",
        image: "./assets/posters/Poster symposium web -100.jpg",
        href: "./post-xarch-2023.html"
    },
    {
        title: "Architecture Across Boundaries 2024",
        categories: ["Conference"],
        date: "2024-08-30",
        excerpt: "Conference poster.",
        image: "./assets/posters/WechatIMG44.jpg",
        href: "./post-boundaries-2024.html"
    },
    {
        title: "Endless Cities 2.0",
        categories: ["Lecture"],
        date: "2020-09-21",
        excerpt: "Poster + speaker bio as PDF.",
        image: "./assets/posters/Subharti lecture.jpg",
        href: "./assets/posters/subharti_lecture.pdf"
    }
];


function formatDate(iso){
    const [y,m,d] = iso.split("-").map(Number);
    return `${String(d).padStart(2,"0")}/${String(m).padStart(2,"0")}/${y}`;
}

function render(){
    const root = document.querySelector("#posts");
    root.innerHTML = posts.map(p => {
        const cats = p.categories.map(c => `<a href="./category-${c.toLowerCase()}.html">${c}</a>`).join(", ");
        return `
      <article class="card">
        <a class="thumb" href="${p.href}" aria-label="${p.title}">
          <img src="${p.image}" alt="" loading="lazy" />
        </a>
        <div class="meta">/ ${cats}</div>
        <h2><a href="${p.href}">${p.title}</a></h2>
        <p class="excerpt">${p.excerpt}</p>
        <div class="meta">/ ${formatDate(p.date)} / <a href="${p.href}#comments">Leave a comment</a></div>
      </article>
    `;
    }).join("");
}

render();
