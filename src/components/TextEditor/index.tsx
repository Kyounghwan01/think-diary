import { useState, useEffect } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import ConvertToHtml from '../ConvertToHtml';

const TextEditor = () => {
  const [text, setText] = useState(EditorState.createEmpty());
  useEffect(() => {
    let isMounted = true;

    if (isMounted) {
      console.log(text.getCurrentContent().getPlainText());
    }

    // cleanup 함수를 통해 isMounted 값을 false로 설정
    return () => {
      isMounted = false;
    };
  }, [text]);

  const onEditorStateChange = (editorState: any) => {
    if (!editorState) return;
    // editorState에 값 설정
    setText(editorState);
  };
  return (
    <div>
      <Editor
        editorState={text}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        onEditorStateChange={onEditorStateChange}
        toolbar={{
          // inDropdown: 해당 항목과 관련된 항목을 드롭다운으로 나타낼것인지
          list: { inDropdown: true },
          textAlign: { inDropdown: true },
          link: { inDropdown: true },
          history: { inDropdown: false },
        }}
        placeholder="내용을 작성해주세요."
        // 한국어 설정
        localization={{
          locale: 'ko',
        }}
      />
      <div style={{ background: '#dddddd', marginTop: '30px' }}>{/* <ConvertToHtml editorState={text} /> */}</div>
    </div>
  );
};

export default TextEditor;
