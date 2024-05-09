import { useState } from 'react';
import ReactDOM from 'react-dom';
import ModalWindow from './react/1';
import CensoredText from './react/2';

const SomeComponent = () => {
  const [open, setOpen] = useState(false);
  const badWords = ['test', 'someBadWord'];
  const someText = 'Very long text who containts someBadWord and testWord';

  return (
    <>
      <button onClick={() => setOpen(true)}>Open Modal</button>
      <ModalWindow open={open} disableGlobalScroll={true} onClose={() => setOpen(false)}>
        <div>
          <h1>Some content</h1>
          <button onClick={() => setOpen(false)}>Close</button>
        </div>
      </ModalWindow>
      <CensoredText badWords={badWords}>{someText}</CensoredText>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<SomeComponent />);
