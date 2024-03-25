import { useState } from 'react';
import CustomCalrndar from './components/CustomCalendar';
import TextEditor from './components/TextEditor';

function MyApp() {
  return (
    <div style={{ height: '300vh' }}>
      <CustomCalrndar />
      {/* <div style={{ background: 'red' }}>
        <TextEditor />
      </div>
      <div style={{ marginTop: '100px', background: '#eeeeee' }}>안녕하쇼ㅔ요</div> */}
    </div>
  );
}

export default MyApp;
