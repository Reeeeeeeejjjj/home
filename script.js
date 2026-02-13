const videos = [
  {
    title: "First Video",
    file: "videos/video1.mp4",
    thumbnail: "videos/thumbnail1.jpg"
  },
  {
    title: "Second Video",
    file: "videos/video2.mp4",
    thumbnail: "videos/thumbnail1.jpg"
  }
];

const videoGrid = document.getElementById("videoGrid");
const modal = document.getElementById("playerModal");
const videoPlayer = document.getElementById("videoPlayer");
const videoTitle = document.getElementById("videoTitle");
const closeBtn = document.getElementById("closeBtn");

videos.forEach(video => {
  const card = document.createElement("div");
  card.classList.add("video-card");

  card.innerHTML = `
    <img src="${video.thumbnail}" alt="${video.title}">
    <h3>${video.title}</h3>
  `;

  card.addEventListener("click", () => {
    videoPlayer.src = video.file;
    videoTitle.textContent = video.title;
    modal.classList.remove("hidden");
  });

  videoGrid.appendChild(card);
});

closeBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
  videoPlayer.pause();
});

