import React from "react";
import { useState } from "react";
import MohanMurugeAvatar from "../../assets/image/Mohan-muruge.jpg";
import "./CommentInput.scss"; // Assuming you have a CSS file for styling

export default function CommentInput({ onAddComment }) {
    console.log({ onAddComment });

    const [comment, setComment] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!comment.trim()) return;

        const newComment = {
            id: Date.now().toString(),
            name: "Test User",
            comment,
            timestamp: Date.now(),
        };

        onAddComment(newComment);
        setComment("");
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
