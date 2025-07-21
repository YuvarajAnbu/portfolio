//fout
window.onload = () => {
  document.querySelector("body").style.visibility = "visible";
  document.querySelector("body").classList.add("loaded");
};

//theme
if (localStorage.getItem("dark") === "false")
  document.querySelector("body").classList.remove("dark");

document.querySelector(".navbar-links-mode").addEventListener("click", () => {
  document.querySelector("body").classList.toggle("dark");
  localStorage.setItem(
    "dark",
    document.querySelector("body").classList.contains("dark")
  );
});

//skills
const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React.js",
  "Next.js",
  "Node.js",
  "MongoDB",
  "SQL",
  "Python",
  "Flask",
];

//frameworks
const fr = [
  "Bootstrap",
  "Tailwind",
  "JQuery",
  "Jest",
  "React-testing",
  "TypeScript",
  "Three.js",
  "GSAP",
  "Framer Motion",
];

let html = `I'm skilled at ${skills
  .map((el) => `<span>${el}</span>`)
  .join(", ")}, and frameworks/libraries like ${fr
  .slice(0, -1)
  .map((el) => `<span>${el}</span>`)
  .join(", ")}, and <span>${fr.slice(-1)}</span>`;

document.getElementById("skills").insertAdjacentHTML("beforeend", html);

const year = new Date().getFullYear();

//experience year
document.getElementById("exp").innerHTML = year - 2021;

//footer year
document.getElementById("year").innerHTML = year;

//work
// img 2400 1600 800 400
const works = [
  {
    name: "Sonderegger",
    span: "Replicated Awwward winning site",
    desc: "Replicated an awwward-winning website called Sonderegger using Next.js and Tailwind. As part of the process, I optimized the website, resulting in improved speed and smoother performance compared to the original site. The website now loads faster, providing a better user experience for visitors.",
    tools: [
      "HTML",
      "CSS",
      "Tailwind",
      "JavaScript",
      "TypeScript",
      "GSAP",
      "React",
      "Next",
      "Node",
    ],
    link: "https://sondereggerclone.vercel.app",
    github: "https://github.com/YuvarajAnbu/Sondereregger-clone",
    img: "sonderegger",
    single: true,
    bg: "#6c6868",
    darkBg: "#3e3e3e",
  },
  {
    name: "Stand Out",
    span: "Online clothing store",
    desc: "Designed and developed a comprehensive Full-Stack E-commerce website that allows users to purchase clothing items from A to Z. Upon visiting the site, you will be automatically logged in as an admin, giving you the ability to upload and edit products as needed.",
    tools: [
      "HTML",
      "CSS",
      "Sass",
      "JavaScript",
      "React",
      "Node",
      "Express",
      "MongoDB",
      "Cloudinary",
    ],
    link: "https://standout.fit",
    github: "https://github.com/YuvarajAnbu/standout",
    img: "standout",
    bg: "#626a70",
  },
  {
    name: "DMR Contractors",
    span: "Builders website",
    desc: "Designed & developed a construction company website with plain HTML, CSS, & JavaScript. Focused on user-friendly interface, modern design, interactive features such as image gallery & contact form. Collaborated closely with client to ensure vision was represented. ",
    tools: ["HTML", "CSS", "Sass", "JavaScript", "Cloudinary"],
    link: "https://dmrcontractors.in",
    github: "https://github.com/YuvarajAnbu/dmr-contarctors",
    img: "dmr",
    bg: "#0c38c2",
    darkBg: "#092680",
  },
  {
    name: "Sspotify ",
    span: "Replicated Spotify web-player",
    desc: "Created a replica of the Spotify web player using React, complete with all functionalities such as playing music, creating queues, and even a karaoke feature. This project highlights my expertise in front-end development, particularly in using React to create dynamic and interactive web applications.",
    tools: ["HTML", "CSS", "SCSS", "JavaScript", "React", "Redux"],
    link: "https://sspotify.vercel.app",
    github: "https://github.com/YuvarajAnbu/spotify-clone",
    img: "sspotify",
    single: true,
    bg: "#18201cc0",
    darkBg: "#5b615e",
  },
  {
    name: "Photographer",
    span: "Photographer portfolio",
    desc: "a photographer's portfolio, designed to showcase their work and provide information about them to others.",
    tools: ["HTML", "CSS", "JavaScript", "React", "GSAP"],
    link: "https://xander-photographer.netlify.app",
    github: "https://github.com/YuvarajAnbu/photograher-portfolio",
    img: "photographer",
    single: true,
    bg: "#184d47",
  },
];

works.forEach((el) => {
  const node = `<section style="--bg: ${el.bg}; --dark-bg: ${
    el.darkBg ? el.darkBg : el.bg
  }" class="work-item ${el.single ? "single" : ""}">
<div class="work-item-content">
  <h1>${el.name} <span>${el.span}</span></h1>

  <p>${el.desc}</p>
  <div class="work-item-content-tools">
  ${el.tools ? el.tools.map((e) => `<span>${e}</span>`).join("") : ""}
  </div>
  <div class="work-item-content-btns">
    <a
      href=${el.link}
      target="_blank"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="15"
        viewBox="0 0 122.6 122.88"
      >
        <g>
          <path
            d="M110.6,72.58c0-3.19,2.59-5.78,5.78-5.78c3.19,0,5.78,2.59,5.78,5.78v33.19c0,4.71-1.92,8.99-5.02,12.09 c-3.1,3.1-7.38,5.02-12.09,5.02H17.11c-4.71,0-8.99-1.92-12.09-5.02c-3.1-3.1-5.02-7.38-5.02-12.09V17.19 C0,12.48,1.92,8.2,5.02,5.1C8.12,2,12.4,0.08,17.11,0.08h32.98c3.19,0,5.78,2.59,5.78,5.78c0,3.19-2.59,5.78-5.78,5.78H17.11 c-1.52,0-2.9,0.63-3.91,1.63c-1.01,1.01-1.63,2.39-1.63,3.91v88.58c0,1.52,0.63,2.9,1.63,3.91c1.01,1.01,2.39,1.63,3.91,1.63h87.95 c1.52,0,2.9-0.63,3.91-1.63s1.63-2.39,1.63-3.91V72.58L110.6,72.58z M112.42,17.46L54.01,76.6c-2.23,2.27-5.89,2.3-8.16,0.07 c-2.27-2.23-2.3-5.89-0.07-8.16l56.16-56.87H78.56c-3.19,0-5.78-2.59-5.78-5.78c0-3.19,2.59-5.78,5.78-5.78h26.5 c5.12,0,11.72-0.87,15.65,3.1c2.48,2.51,1.93,22.52,1.61,34.11c-0.08,3-0.15,5.29-0.15,6.93c0,3.19-2.59,5.78-5.78,5.78 c-3.19,0-5.78-2.59-5.78-5.78c0-0.31,0.08-3.32,0.19-7.24C110.96,30.94,111.93,22.94,112.42,17.46L112.42,17.46z"
          />
        </g>
      </svg>
      Visit Site
    </a>
    <a
      href=${el.github}
      target="_blank"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="17"
        height="17"
        fill="currentcolor"
        shape-rendering="geometricPrecision"
        text-rendering="geometricPrecision"
        image-rendering="optimizeQuality"
        fill-rule="evenodd"
        clip-rule="evenodd"
        viewBox="0 0 640 640"
      >
        <path
          d="M319.988 7.973C143.293 7.973 0 151.242 0 327.96c0 141.392 91.678 261.298 218.826 303.63 16.004 2.964 21.886-6.957 21.886-15.414 0-7.63-.319-32.835-.449-59.552-89.032 19.359-107.8-37.772-107.8-37.772-14.552-36.993-35.529-46.831-35.529-46.831-29.032-19.879 2.209-19.442 2.209-19.442 32.126 2.245 49.04 32.954 49.04 32.954 28.56 48.922 74.883 34.76 93.131 26.598 2.882-20.681 11.15-34.807 20.315-42.803-71.08-8.067-145.797-35.516-145.797-158.14 0-34.926 12.52-63.485 32.965-85.88-3.33-8.078-14.291-40.606 3.083-84.674 0 0 26.87-8.61 88.029 32.8 25.512-7.075 52.878-10.642 80.056-10.76 27.2.118 54.614 3.673 80.162 10.76 61.076-41.386 87.922-32.8 87.922-32.8 17.398 44.08 6.485 76.631 3.154 84.675 20.516 22.394 32.93 50.953 32.93 85.879 0 122.907-74.883 149.93-146.117 157.856 11.481 9.921 21.733 29.398 21.733 59.233 0 42.792-.366 77.28-.366 87.804 0 8.516 5.764 18.473 21.992 15.354 127.076-42.354 218.637-162.274 218.637-303.582 0-176.695-143.269-319.988-320-319.988l-.023.107z"
        />
      </svg>
      View Code
    </a>
  </div>
</div>
<div class="work-item-img">
  <img
    src="./images/${el.img}_800.webp"
    alt="website image"
    srcset="
    ./images/${el.img}-400.webp 400w, 
    ./images/${el.img}-800.webp 800w, 
    ./images/${el.img}-1600.webp 1600w, 
    ./images/${el.img}-2400.webp 2400w"
    sizes="(max-width: 500px) 400px, 800px"
  />
  ${
    !el.single
      ? `<img
    class="back"
    src="./images/${el.img}_800.webp"
    alt="website image"
    srcset="
    ./images/${el.img}-400.webp 400w, 
    ./images/${el.img}-800.webp 800w, 
    ./images/${el.img}-1600.webp 1600w, 
    ./images/${el.img}-2400.webp 2400w"
    sizes="(max-width: 500px) 400px, 800px"
  />`
      : ""
  }
</div>
</section>`;

  document.querySelector(".work").insertAdjacentHTML("beforeend", node);
});
