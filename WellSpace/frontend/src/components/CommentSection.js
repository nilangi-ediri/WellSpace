import React, { useState, useEffect } from 'react';
import { Offcanvas, Button, Form } from 'react-bootstrap';
import Comment from './Comment';

const CommentSection = ({ postId, currentUser }) => {
    const [comments, setComments] = useState([]);
    const [show, setShow] = useState(false);
    const [commentText, setCommentText] = useState('');
    const [parentId, setParentId] = useState(null);

    // Simulate fetching comments
    useEffect(() => {
        // Simulating fetching comments from your backend
        setComments([
            {
                id: 1,
                username: "JohnDoe",
                text: "This is an insightful post, thanks for sharing!",
                replies: [
                    {
                        id: 2,
                        username: "JaneSmith",
                        text: "I totally agree, especially about the innovative approach mentioned.",
                        replies: [
                            {
                                id: 5,
                                username: "EmilyRoe",
                                text: "That part was indeed fascinating. Do you think it could be applied to other fields?"
                            }
                        ]
                    },
                    {
                        id: 3,
                        username: "MichaelLee",
                        text: "Interesting take. However, I think more data is needed to conclude."
                    }
                ]
            },
            {
                id: 4,
                username: "SarahConnor",
                text: "Could someone elaborate on the implications of this research?",
                replies: []
            }
        ]);
    }, [postId]);

    const handleShow = (parentId = null) => {
        setParentId(parentId);
        setShow(true);
    };

    const handleClose = () => {
        setShow(false);
        setCommentText('');
        setParentId(null);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const newComment = {
            text: commentText,
            parentId: parentId,
            username: currentUser
        };
        // Submit to backend
        console.log(newComment);
        handleClose();
    };

    return (
        <div>
            {comments.map((comment) => (
                <Comment key={comment.id} comment={comment} handleReply={handleShow} />
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
