//@ts-nocheck

// CodeDisplay.js
import React from 'react';
import '../app/globals.css';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const CodeDisplay = ({ code }: { code: string }) => {
  return (
    <SyntaxHighlighter language="python" style={docco} className="bg-black">
      {code}
    </SyntaxHighlighter>
  );
};

export default CodeDisplay;
