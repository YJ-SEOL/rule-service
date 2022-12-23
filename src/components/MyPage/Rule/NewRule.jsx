import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import '../../../scss/MyPage/Rule/NewRule.scss';

// const modules = {
//   toolbar: [
//     [{ header: [1, 2, false] }],
//     ['bold', 'italic', 'underline', 'strike', 'blockquote'],
//     [
//       { list: 'ordered' },
//       { list: 'bullet' },
//       { indent: '-1' },
//       { indent: '+1' },
//     ],
//     ['link', 'image'],
//     [{ align: [] }, { color: [] }, { background: [] }], // dropdown with defaults from theme
//     ['clean'],
//   ],
// };

// const formats = [
//   'header',
//   'bold',
//   'italic',
//   'underline',
//   'strike',
//   'blockquote',
//   'list',
//   'bullet',
//   'indent',
//   'link',
//   'image',
//   'align',
//   'color',
//   'background',
// ];

const NewRule = () => {
  const [convertedText, setConvertedText] = useState('Some default content');

  const handleChange = (content, delta, source, editor) => {
    console.log(editor.getHTML()); // html 사용시
    // console.log(JSON.stringify(editor.getContents())); // delta 사용시
    setConvertedText(editor.getHTML());
  };

  const ruleSubmit = () => {
    console.log(convertedText);
  };

  return (
    <>
      <div>규정 </div>
      <div className='editor__container'>
        <ReactQuill
          className='editor__body'
          theme='snow'
          value={convertedText}
          onChange={handleChange}
          // formats={formats}
        />
      </div>
      <div className='editor__footer'>
        <Button type='submit' onClick={() => ruleSubmit()}>
          등록
        </Button>
      </div>
    </>
  );
};

export default NewRule;
