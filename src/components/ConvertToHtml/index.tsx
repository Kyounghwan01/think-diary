import { convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import styled from 'styled-components';

// 생략..
// 변환시켜준 editorState 값을 넣기 위한 div 태그 css
const IntroduceContent = styled.div`
  position: relative;
  border: 0.0625rem solid #d7e2eb;
  border-radius: 0.75rem;
  overflow: hidden;
  padding: 1.5rem;
  width: 50%;
  margin: 0 auto;
  margin-bottom: 4rem;
`;

const TestEditorForm = ({ editorState }: any) => {
  // 생략..
  // editorState의 현재 contentState 값을 원시 JS 구조로 변환시킨뒤, HTML 태그로 변환시켜준다.
  const editorToHtml = draftToHtml(convertToRaw(editorState.getCurrentContent()));

  return (
    <>
      {/* // 생략.. // dangerouslySetInnerHTML: https://ko.reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml */}
      <IntroduceContent dangerouslySetInnerHTML={{ __html: editorToHtml }} />
    </>
  );
};

export default TestEditorForm;
