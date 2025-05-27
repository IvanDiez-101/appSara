import React, { useState, useEffect } from "react";
import { Carousel } from "primereact/carousel";

const importantDays = [
  { date: "28 de febrero de 2025", dayName: "Día de la Paz", videoUrl: "https://www.youtube.com/embed/MuGHroroa4k" },
  { date: "5 de junio de 2025", dayName: "Día del Reciclaje", videoUrl: "https://www.youtube.com/embed/Gpc1s9qSeVM" },
  { date: "10 de noviembre de 2025", dayName: "Día de la Ciencia", videoUrl: "https://www.youtube.com/embed/GtLJLLd__HE" },
  { date: "23 de abril de 2025", dayName: "Día Mundial del Libro", videoUrl: "https://www.youtube.com/embed/_zJNXx3yT1A" },
  { date: "5 de octubre de 2025", dayName: "Día de la Felicidad", videoUrl: "https://www.youtube.com/embed/vlMgm5tw0Sg" },
  { date: "20 de noviembre de 2025", dayName: "Día Universal del Niño", videoUrl: "https://www.youtube.com/embed/5ZljUvSs8lU" },
];

export default function ImportantDaysCarousel() {
  const [videos, setVideos] = useState([]);

  const responsiveOptions = [
    { breakpoint: "1400px", numVisible: 3, numScroll: 1 },
    { breakpoint: "1199px", numVisible: 2, numScroll: 1 },
    { breakpoint: "767px", numVisible: 1, numScroll: 1 },
  ];

  useEffect(() => {
    setVideos(importantDays);
  }, []);

  const videoTemplate = (video) => {
    return (
      <div className="border-1 surface-border border-round m-2 text-center py-4 px-3">
        <h4 className="mb-2">{video.dayName}</h4>
        <p className="mb-3">{video.date}</p>
        <iframe
          width="70%"
          height="200px"
          src={video.videoUrl}
          title={video.dayName}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    );
  };

  return (
    <div className="card">
      <Carousel
        value={videos}
        numVisible={3} 
        numScroll={1}          
        responsiveOptions={responsiveOptions}
        itemTemplate={videoTemplate}
        circular              
        autoplayInterval={3000} 
      />
    </div>
  );
}
