import React from "react";
import LikeIcon from "../../assets/icon/svg/Icon-likes.svg";
import ViewIcon from "../../assets/icon/svg/Icon-views.svg";
import "./MainVideoInfo.scss";

export default function MainVideoInfo({ mainVideo }) {
    
    const {
        title,
        channel,
        timestamp,
        likes,
        views,
        description,
    } = mainVideo;

    return (
        <div className="main-video-info">
            <h1 className="main-video-info__title">{title}</h1>

            <div className="main-video-info__meta">
                <p className="main-video-info__channel">By {channel}</p>
                <p className="main-video-info__date">
                    {new Date(timestamp).toLocaleDateString()}
                </p>
            </div>

            <div className="main-video-info__stats">
                <p className="main-video-info__likes">
                    <img
                        src={LikeIcon}
                        alt="like icon"
                        className="like-icon"
                    />{" "}
                    {likes} likes
                </p>
                <p className="main-video-info__views">
                    <img
                        src={ViewIcon}
                        alt="view icon"
                        className="view-icon"
                    />{" "}
                    {views} views
                </p>
            </div>

            <p className="main-video-info__description">{description}</p>
        </div>
    );
}
