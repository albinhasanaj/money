//@ts-nocheck

// CodeDisplay.js
import React from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const CodeDisplay = ({ code }: { code: string }) => {
  return (
    <SyntaxHighlighter language="python" style={docco}>
      {code}
    </SyntaxHighlighter>
  );
};

export default CodeDisplay;
