import React, { useState, useEffect } from 'react';
import { Offcanvas, Button, Form } from 'react-bootstrap';
import Comment from './Comment';
import axios from 'axios';

const CommentSection = ({ postId, currentUserId, commentsData }) => {
    const [comments, setComments] = useState([]);
    const [refresh, setRefresh] = useState(false);
    const [show, setShow] = useState(false);
    const [commentText, setCommentText] = useState('');
    const [parentId, setParentId] = useState(null);

    // Fetch comments when the component mounts or postId changes
    useEffect(() => {
        const fetchComments = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/v1/comments/${postId}`);
                console.log('comments', response.data.data)
                setComments(response.data.data);
            } catch (error) {
                console.error('Error fetching comments:', error);
            }
        };

        fetchComments();
    }, [postId, refresh]);

    const handleShow = (parentId = null) => {
        setParentId(parentId);
        setShow(true);
    };

    const handleClose = () => {
        setShow(false);
        setCommentText('');
        setParentId(null);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const newComment = {
            blog: postId,
            user: currentUserId && currentUserId._id,
            commentText: commentText,
            parentId: parentId,  // Include parentId if this is a reply
        };

        try {
            const response = await axios.post(`http://localhost:5000/api/v1/comments/${postId}`, newComment);
            console.log('Success:', response.data);
            setRefresh(true);
            setCommentText('');
            setParentId(null);
            handleClose();
        } catch (error) {
            console.error('Error adding comment:', error);
        }
    };

    return (
        <div>
            {comments.map((comment) => (
                <Comment key={comment._id} comment={comment} handleReply={handleShow} />
            ))}
            <Button variant="primary" onClick={() => handleShow()}>
                Add Comment
            </Button>
            <Offcanvas show={show} onHide={handleClose} placement="end">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>{parentId ? 'Reply to Comment' : 'New Comment'}</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="commentForm.ControlTextarea1">
                            <Form.Label>Comment</Form.Label>
                            <Form.Control as="textarea" rows={3} value={commentText} onChange={(e) => setCommentText(e.target.value)} required />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    );
};

export default CommentSection;
