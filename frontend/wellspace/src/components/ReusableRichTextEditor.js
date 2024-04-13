import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import styles

const ReusableRichTextEditor = ({ value, onChange }) => {
    return (
        <div className="text-editor">
            <ReactQuill theme="snow" value={value} onChange={onChange} />
        </div>
    );
};

export default ReusableRichTextEditor;
