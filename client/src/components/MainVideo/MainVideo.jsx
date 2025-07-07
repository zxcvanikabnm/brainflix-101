import React from "react";
import "./MainVideo.scss";

export default function Main({ mainVideo }) {
    
    if (!mainVideo) return <p>Loading...</p>;

    const { title, image, video } = mainVideo;

    return (
        <section className="main-video">
            <div className="main-video__player-wrapper">
                <video
                className="main-video__player"
                controls
                poster={image}
                title={`Video player for ${title}`}
                >
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
                </video>
            </div>        
        </section>
    );
}
