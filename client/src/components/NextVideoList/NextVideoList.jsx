import React from "react";
import { Link } from "react-router-dom";
import "./NextVideoList.scss";

export default function NextVideoList({ videoList, mainVideo }) {
    console.log("Video List: ", videoList);
    console.log("Main Video Info: ", mainVideo);

    if (!videoList || videoList.length === 0) return <p>Loading...</p>;

    return (
        <aside className="next-video-list">
            <h2 className="next-video-list__title">next videos</h2>
            {videoList
                .filter((video) => video.id !== mainVideo?.id)
                .map((video) => (
                    <Link
                        to={`/videos/${video.id}`}
                        key={video.id}
                        className="next-video-item"
                    >
                        <img
                            className="next-video-item__thumbnail"
                            src={video.image}
                            alt={video.title}
                        />
                        <div className="next-video-item__info">
                            <h4 className="next-video-item__title">
                                {video.title}
                            </h4>
                            <p className="next-video-item__channel">
                                By {video.channel}
                            </p>
                        </div>
                    </Link>
                ))}
        </aside>
    );
}
