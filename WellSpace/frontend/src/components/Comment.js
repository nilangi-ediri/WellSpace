import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { FaTrash, FaCheckCircle } from 'react-icons/fa';
import axios from 'axios';
import UserContext from '../contexts/UserContext';

const Comment = ({ comment, handleReply, refreshComments }) => {
    const { user } = useContext(UserContext);

    const deleteComment = async (commentId) => {
        try {
            await axios.delete(`http://localhost:5000/api/v1/comments/${commentId}`);
            refreshComments(); // Call the function to refresh the comments list
        } catch (error) {
            console.error('Error deleting comment:', error);
        }
    };

    const isCommentOwner = user && ((comment.user && comment.user._id === user._id) || (comment.doctor && comment.doctor._id === user._id));

    return (
        <div style={{ marginBottom: '10px', border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}>
            <strong>
                {comment.user
                    ? comment.user.userName
                    : (
                        <>
                            {comment.doctor && comment.doctor.name}
                            <FaCheckCircle style={{ color: 'blue', marginLeft: '5px' }} />
                        </>
                    )
                }
            </strong>
            <p>{comment.commentText}</p>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Button variant="link" onClick={() => handleReply(comment._id)}>Reply</Button>
                {isCommentOwner && (
                    <Button variant="link" onClick={() => deleteComment(comment._id)}>
                        <FaTrash />
                    </Button>
                )}
            </div>
            {/* {comment.replies && comment.replies.map((reply) => (
                <div key={reply.id} style={{ marginLeft: '20px', marginTop: '10px' }}>
                    <Comment comment={reply} handleReply={handleReply} />
                </div>
            ))} */}
        </div>
    );
};

export default Comment;
