import React, { useCallback, useEffect } from 'react';
import * as monaco from 'monaco-editor-core';

interface Props {
  language: string;
}

const Editor: React.FC<Props> = ({ language }: Props) => {
  let divNode;

  const assignRef = useCallback(node => {
    divNode = node;
  }, []);

  useEffect(() => {
    if (divNode) {
      const editor = monaco.editor.create(divNode, {
        language,
        minimap: { enabled: false },
        autoIndent: 'full',
      });
    }
  }, [assignRef]);

  return <div ref={assignRef} style={{ height: '90vh' }}></div>;
};

export default Editor;
