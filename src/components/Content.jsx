import React from 'react';

const Content = ({ data }) => {
  if (data.loading)
    return (
      <section className='messages'>
        <p className='message-text'>Loading...</p>
      </section>
    );
  if (data.error)
    return (
      <section className='messages'>
        <p className='message-text'>
          Opps something went wrong. Please contact Wojciech Urbanski, your
          class Tutor.
        </p>
      </section>
    );

  return (
    <section className='content'>
      {data.results &&
        data.results.results.map((image) => (
          <img key={image.id} src={image.urls.thumb} alt='' />
        ))}
    </section>
  );
};

export default Content;
