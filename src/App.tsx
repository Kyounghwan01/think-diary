import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import TextEditor from './components/TextEditor';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

function MyApp() {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div style={{ height: '300vh' }}>
      <Calendar onChange={onChange} value={value} />
      <div style={{ background: 'red' }}>
        <TextEditor />
      </div>
      <div style={{ marginTop: '100px', background: '#eeeeee' }}>안녕하쇼ㅔ요</div>
    </div>
  );
}

export default MyApp;
