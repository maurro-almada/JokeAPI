 import React, { useState } from 'react';

export const ChisteContainer = () => {
  const [chiste, setChiste] = useState(null);

  const fetchData = async (lang) => {
    try {
      const response = await fetch(`https://v2.jokeapi.dev/joke/Any?lang=${lang}&blacklistFlags=nsfw,religious,political,racist,sexist,explicit&idRange=1-6`);
      const data = await response.json();

      let setup = `${data.setup}`;
      let delivery = `${data.delivery}`;

      if (setup === "undefined" || delivery === "undefined") {
        fetchData(lang);
      } else {
        setChiste(data);
      }
    } catch (error) {
      console.error('Error al obtener el chiste:', error);
    }
  };

  return (
    <div className="sectionE">
      <button onClick={() => fetchData('es')} className='btnChiste'>Obtener Chiste</button>
      <button onClick={() => fetchData('en')} className='btnChiste'>Chiste en Ingles</button>
      
      <div className='sectionChiste'>
        {chiste && (
          <p>
            {chiste.setup} {chiste.delivery}
          </p>
        )}
      </div>
    </div>
  );
};


