import React from 'react';
import { useEffect, useState } from 'react';

const Trainer = ({ words }) => {
  let numWordStor = localStorage.getItem('numWord');

  if (!numWordStor) {
    numWordStor = 0;
    localStorage.setItem('numWord', numWordStor);
  }

  const [open, setOpen] = useState(false);
  const [numWord, setNumWord] = useState(+numWordStor);

  useEffect(() => {}, [numWord]);

  const prev = () => {
    if (numWord <= 0) {
      return;
    }
    setNumWord(numWord - 1);
    setOpen(false);
    localStorage.setItem('numWord', numWord - 1);
  };

  const next = () => {
    if (numWord >= words.length) {
      return;
    }
    setNumWord(numWord + 1);
    setOpen(false);
    localStorage.setItem('numWord', numWord + 1);
  };
  let word = words[numWordStor];

  return (
    <div className='App'>
      <div className='wordContainer'>
        <button className='pre toggle' onClick={prev}>
          pre
        </button>
        <div className='word'>
          <div className='wordString'>{!open ? word.ua : word.eng}</div>
        </div>
        <button className='next toggle' onClick={next}>
          next
        </button>
      </div>
      <button className='open' onClick={() => setOpen(!open)}>
        open
      </button>
    </div>
  );
};

export default Trainer;
