import React, {useState} from 'react'
import './InteractiveImg.css'

export default function InteractiveImg() {
    const [transform, setTransform] = useState({ xAxis: 0, yAxis: 0 });

    const handleMouseMove = (e) => {
      const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
      const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
      setTransform({ xAxis, yAxis });
    };
  
    return (
      <div className="container" onMouseMove={handleMouseMove}>
        <img
          className="image"
          src='https://www.searchenginejournal.com/wp-content/uploads/2021/09/16-reasons-why-social-media-is-important-to-your-company-616d3200e6dc6-sej.png'
          alt="Interactive Image"
          style={{
            transform: `translate(-50%, -50%) rotateY(${transform.xAxis}deg) rotateX(${transform.yAxis}deg)`,
            objectFit: 'cover',
          }}
        />
      </div>
    );
}
