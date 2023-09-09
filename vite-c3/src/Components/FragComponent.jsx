import React from 'react';

const FragComponent = () => {
  const nombres = ['Carlos', 'Pepe', 'Samuel',"Fulano"];

  return (
    <React.Fragment>
      {nombres.map((nombre) => (
        
        <p>{nombre}</p>
      ))}
    </React.Fragment>
  );
};

export default FragComponent;