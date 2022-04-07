import React from 'react';
import { useEffect, useState } from 'react';
import { Button } from '@material-ui/core';

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
        <Button variant='contained' className='pre toggle' onClick={prev}>
          pre
        </Button>
        <div className='word'>
          <div className='wordString'>{!open ? word.ua : word.eng}</div>
        </div>
        <Button variant='contained' className='next toggle' onClick={next}>
          next
        </Button>
      </div>
      <Button variant='contained' className='open' onClick={() => setOpen(!open)}>
        open
      </Button>
    </div>
  );
};

export default Trainer;
