import React, { useState }  from 'react';

const DynamicImage = ({
  src,
  alt = '',
}) => {
  const [display, setDisplay] = useState("none");

  return (
    <img 
    src={src} 
    alt={alt} 
    style={{display: display}} 
    onLoad={()=>{setDisplay("block")}} />
  );
}

export default DynamicImage;