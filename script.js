// Datos de ejemplo sobre Humbe y sus canciones
const songs = [
    {
      title: "Fantasmas",
      album: "Esencia",
      year: 2023,
      description: "Uno de sus sencillos más populares, aborda recuerdos y emociones profundas.",
      videoUrl: "https://www.youtube.com/watch?v=e2c8NkNY41U"
    },
    {
      title: "Te Lo Prometo",
      album: "Esencia",
      year: 2023,
      description: "Balada romántica incluida en el álbum Esencia.",
      videoUrl: "https://www.youtube.com/watch?v=7flT6J_1P7Y"
    },
    {
      title: "El Poeta",
      album: "Entropía",
      year: 2021,
      description: "Canción que refleja su faceta de compositor y poeta musical.",
      videoUrl: "https://www.youtube.com/watch?v=bgk_tO934YE"
    },
    {
      title: "Amor de Cine",
      album: "Aurora",
      year: 2021,
      description: "Canción del álbum Aurora que consolidó su estilo pop romántico.",
      videoUrl: "https://www.youtube.com/watch?v=Dbts3CjpVhg"
    }
  ];
  
  const songListEl = document.getElementById("songList");
  const songDetailsEl = document.getElementById("songDetails");
  const titleDetail = document.getElementById("titleDetail");
  const albumDetail = document.getElementById("albumDetail");
  const yearDetail = document.getElementById("yearDetail");
  const descriptionDetail = document.getElementById("descriptionDetail");
  const videoLink = document.getElementById("videoLink");
  
  // Función para mostrar detalles de una canción
  function showSongDetail(index) {
    const song = songs[index];
    titleDetail.textContent = song.title;
    albumDetail.textContent = "Álbum: " + song.album;
    yearDetail.textContent = "Año: " + song.year;
    descriptionDetail.textContent = song.description;
    videoLink.href = song.videoUrl;
    videoLink.textContent = "Ver en YouTube";
  
    songDetailsEl.style.display = "block";
  
    // Marcar el elemento activo
    const lis = songListEl.querySelectorAll("li");
    lis.forEach((li, liIndex) => {
      li.classList.toggle("active", liIndex === index);
    });
  }
  
  // Crear la lista de canciones
  songs.forEach((song, index) => {
    const li = document.createElement("li");
    li.textContent = `${song.title} (${song.album})`;
    li.addEventListener("click", () => showSongDetail(index));
    songListEl.appendChild(li);
  });
  
  // Mostrar la primera canción por defecto
  if (songs.length > 0) {
    showSongDetail(0);
  }