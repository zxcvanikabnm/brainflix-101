import React from "react";
import "./Comments.scss"; // Assuming you have a CSS file for styling

export default function Comments({ mainVideo }) {
    console.log({ mainVideo });

    if (!mainVideo || !mainVideo.comments) return <p>Loading...</p>;

    const commentList = mainVideo.comments.map((comment) => (
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
            <h3 className="comments__heading">
                {mainVideo.comments.length} Comments
            </h3>
            {mainVideo.comments.length === 0 ? (
                <p className="comments__none">No comments yet.</p>
            ) : (
                commentList
            )}
        </section>
    );
}
