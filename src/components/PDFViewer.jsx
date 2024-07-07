import React from 'react';

const PDFViewer = () => {
  return (
    <div className="w-full h-screen">
      <iframe
        src="/test.pdf"
        width="100%"
        height="100%"
        style={{ border: 'none' }}
        title="PDF Viewer"
      />
    </div>
  );
};

export default PDFViewer;