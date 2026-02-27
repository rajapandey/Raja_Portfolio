import React, { useEffect } from "react";
import resume from "../../assets/images/Raja_Pandey_Resume.pdf";

const DownloadCV = () => {
  useEffect(() => {
    const link = document.createElement('a');
    link.href = resume;
    link.download = 'Raja_Pandey_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.history.back();
  }, []);

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <div className="text-center">
        <h2>Downloading Resume...</h2>
        <p>Your download will start automatically.</p>
      </div>
    </div>
  );
};

export default DownloadCV;
