import React from 'react';
import { Button } from 'react-bootstrap';

const Comment = ({ comment, handleReply }) => {
    return (
        <div style={{ marginBottom: '10px', border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}>
            <strong>{comment.username} </strong>
            <p>{comment.text}</p>
            {comment.replies && comment.replies.map((reply) => (
                <div key={reply.id} style={{ marginLeft: '20px', marginTop: '10px' }}>
                    <Comment comment={reply} handleReply={handleReply} />
                </div>
            ))}
            <Button variant="link" onClick={() => handleReply(comment.id)}>Reply</Button>
        </div>
    );
};

export default Comment;
