import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import "./Comments.scss"; // Assuming you have a CSS file for styling
import CommentInput from "../CommentInput/CommentInput"; // Importing the CommentInput component

export default function Comments({ mainVideo }) {
    console.log({ mainVideo });

    const BASE_URL = import.meta.env.VITE_API_BASE_URL;

    // const [comments, setComments] = useState(mainVideo.comments || []);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        async function fetchComments() {
            try {
                // const res = await axios.get(
                //     `http://localhost:8080/videos/${mainVideo.id}/comments`
                // );
                const res = await axios.get(
                    `${BASE_URL}/videos/${mainVideo.id}/comments`
                );
                setComments(res.data);
            } catch (err) {
                console.error(err);
            }
        }

        if (mainVideo?.id) fetchComments();
    }, [mainVideo]);
    console.log({ comments });

    // const handleAddComment = (newComment) => {
    //     setComments([newComment, ...comments]);
    // };

    const handleAddComment = async (newComment) => {
    try {
            // POST the new comment to backend
            await axios.post(`${BASE_URL}/videos/${mainVideo.id}/comments`, newComment);

            // GET the latest comment list after save
            const res = await axios.get(`${BASE_URL}/videos/${mainVideo.id}/comments`);
            setComments(res.data);
        } catch (error) {
            console.error("Error syncing comment list:", error);
        }
    };

    if (!mainVideo || !comments) return <p>Loading...</p>;

    const commentList = comments.map((comment) => (
        <div key={comment.id} className="comment">
            <div className="comment__avatar"></div>
            <div className="comment__details">
                <div>
                    <p className="comment__name">{comment.name}</p>
                    <p className="comment__timestamp">
                        {new Date(comment.timestamp).toLocaleDateString()}
                    </p>
                </div>
                <p className="comment__text">{comment.comment}</p>
            </div>
        </div>
    ));

    return (
        <section className="comments">
            <h3 className="comments__heading">{comments.length} Comments</h3>
            <CommentInput
                videoId={mainVideo.id}
                onAddComment={handleAddComment}
            />
            {comments.length === 0 ? (
                <p className="comments__none">No comments yet.</p>
            ) : (
                commentList
            )}
        </section>
    );
}
