import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Upload.scss";

const VIDEO_URL = "https://ia800701.us.archive.org/26/items/SampleVideo1280x7205mb/SampleVideo_1280x720_5mb.mp4";
const THUMB_URL = "https://i.imgur.com/nGvKkjy.jpg";
const CHANNEL = "Test Channel";

export default function Upload() {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const navigate = useNavigate();
    const BASE_URL = import.meta.env.VITE_API_BASE_URL;

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!title.trim()) return;

        try {
            await axios.post(`${BASE_URL}/videos`, {
                channel: "Test Channel",
                title,
                description: desc,
                videoUrl: VIDEO_URL,
                thumbnailUrl: THUMB_URL,
            });


            navigate("/videos");
        } catch (err) {
            console.error(err);
            alert("Upload failed—try again?");
        }
    };

    return (
        <main className="upload">
            <h1 className="upload__title">Upload Video</h1>

            <form onSubmit={handleSubmit} className="upload__form">
                <label className="upload__label">
                    Title
                    <input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Awesome skate trick"
                        required
                    />
                </label>

                <label className="upload__label">
                    Description
                    <textarea
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                        placeholder="Tell viewers what’s cool about this video"
                    />
                </label>

                <div className="upload__preview">
                    <video src={VIDEO_URL} controls className="upload__video-preview" />
                    <img src={THUMB_URL} alt="Video thumbnail" className="upload__thumb-preview" />
                </div>

                <button className="upload__btn">Publish</button>
            </form>
        </main>
    );
}
