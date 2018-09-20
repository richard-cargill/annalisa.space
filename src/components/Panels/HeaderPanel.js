import React from 'react';

const HeaderPanel = ({ text, media }) => {
  const url = !mediand
    ? 'none'
    : `no-repeat url(${media.file.url}) center center`;
  return (
    <section className='panel headerPanel' style={{
      background: url
    }}>
      <div className='container'>
        <h1>{text}</h1>
      </div>
    </section>
  );
};

export default HeaderPanel;
