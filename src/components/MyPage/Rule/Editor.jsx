import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' },
    ],
    ['link', 'image'],
    [{ align: [] }, { color: [] }, { background: [] }], // dropdown with defaults from theme
    ['clean'],
  ],
};

const formats = [
  'header',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'image',
  'align',
  'color',
  'background',
];

const Editor = () => {
  const [value, setValue] = useState('');

  const handleChange = (content, delta, source, editor) => {
    console.log(editor.getHTML()); // html 사용시
    // console.log(JSON.stringify(editor.getContents())); // delta 사용시
    setValue(editor.getHTML());
  };

  return (
    <div className='editor__container'>
      <ReactQuill
        className='editor__body'
        theme='snow'
        modules={modules}
        formats={formats}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default Editor;
