import React, { useState, useEffect } from 'react';
import { Offcanvas, Button, Form } from 'react-bootstrap';
import Comment from './Comment';
import axios from 'axios';

const CommentSection = ({ postId, currentUser, commentsData }) => {
    const [comments, setComments] = useState([]);
    const [show, setShow] = useState(false);
    const [commentText, setCommentText] = useState('');
    const [parentId, setParentId] = useState(null);

    // Simulate fetching comments
    useEffect(() => {

        console.log('comments', commentsData);

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
        event.preventDefault(); // Prevent the default form submission behavior

        const newComment = {
            username: currentUser, // Assuming 'currentUser' holds the username
            text: commentText,
            parentId: parentId,   // This will be null for new top-level comments
        };

        // Submit to backend
        axios.post(`/api/v1/blogs/${postId}/comments`, newComment)
            .then(response => {
                console.log('Success:', response.data);
                // Optionally, update local state or trigger a re-fetch of comments
                setComments(prevComments => [...prevComments, response.data.comment]); // If you want to update the UI immediately
                setCommentText(''); // Clear the comment text area
                setParentId(null); // Reset the parentId, important if you are using the same form for replies
                handleClose(); // Close the form
            })
            .catch(error => {
                console.error('Error adding comment:', error);
                // Optionally, inform the user of the failure to add a comment
            });
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
