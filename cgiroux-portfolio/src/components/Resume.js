import React from "react";
import { Document, Page, View } from "@react-pdf/renderer";
import pdf from "../images/Resume.pdf";
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function Resume() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: "50%",
        height: "100%",
        margin: "0 auto",
      }}
    >
      <iframe
        src="https://resume.creddle.io/embed/5hvxoir7ywo"
        width="850"
        height="1100"
        seamless
      ></iframe>
    </div>
  );
}
