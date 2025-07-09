import React from "react";
import { useState } from "react";
import axios from "axios";
import MohanMurugeAvatar from "../../assets/image/Mohan-muruge.jpg";
import "./CommentInput.scss"; // Assuming you have a CSS file for styling

export default function CommentInput({ videoId, onAddComment }) {
    // console.log({ onAddComment });
    const BASE_URL = import.meta.env.VITE_API_BASE_URL;

    const [comment, setComment] = useState("");

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     if (!comment.trim()) return;

    //     const newComment = {
    //         id: Date.now().toString(),
    //         name: "Test User",
    //         comment,
    //         timestamp: Date.now(),
    //     };

    //     onAddComment(newComment);
    //     setComment("");
    // };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!comment.trim()) return;

        try {
            const newComment = {
                name: "Test User",
                comment,
            };
            onAddComment(newComment); 
            setComment("");
        } catch (error) {
            console.error("Error posting comment:", error);
        }
    };

    return (
        <section className="comment-input">
            <div className="comment-input__avatar-wrapper">
                <img
                    src={MohanMurugeAvatar}
                    alt="Mohan Muruge"
                    className="comment-input__avatar"
                />
            </div>
            <form className="comment-input__form" onSubmit={handleSubmit}>
                <label htmlFor="comment" className="comment-input__label">
                    JOIN THE CONVERSATION
                </label>
                <textarea
                    id="comment"
                    name="comment"
                    className="comment-input__textarea"
                    placeholder="Add a new comment"
                    rows="3"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    required
                ></textarea>
                <button type="submit" className="comment-input__button">
                    COMMENT
                </button>
            </form>
        </section>
    );
}
