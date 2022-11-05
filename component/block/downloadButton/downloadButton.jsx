import React from "react";
import { DownloadButtonContainer } from "./downloadButton.style";

const DownloadButton = ({ children, onClick }) => {
  return (
    <DownloadButtonContainer className="playsee-download" onClick={onClick}>
      {children}
    </DownloadButtonContainer>
  );
};

export default DownloadButton;
