import React, { useEffect } from 'react';

const JivoChatWidget = () => {
  useEffect(() => {
    // Create script element
    const script = document.createElement('script');
    script.src = '//code.jivosite.com/widget/QQqRQwAAQH';

    script.async = true;

    // Append script to the body of the document
    document.body.appendChild(script);

    // Clean up: remove the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null; // Since the script is appended dynamically, the component doesn't render anything
};

export default JivoChatWidget;
