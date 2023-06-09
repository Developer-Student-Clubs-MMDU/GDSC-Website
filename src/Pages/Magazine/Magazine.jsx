import React from "react";
import "./Magazine.css";

function Magazine() {
  return (
    <div className="pdf-container">
      <h1 className="title">The Developer's Notebook</h1>
      <div className="pdf-wrapper">
        <div className="pdf-item">
          <h1>The Developer's Notebook 2019 - 20</h1>
          <object
            data="https://viamtechnologies.com/wp-content/uploads/2023/06/Test.pdf"
            type="application/pdf"
            width="100%"
            height="100%"
          />
        </div>
        <div className="pdf-item">
          <h1>The Developer's Notebook 2020 - 21</h1>
          <object
            data="https://viamtechnologies.com/wp-content/uploads/2023/06/test2.pdf"
            type="application/pdf"
            width="100%"
            height="100%"
          />
        </div>
        <div className="pdf-item">
          <h1>The Developer's Notebook 2021 - 22</h1>
          <object
            data="https://viamtechnologies.com/wp-content/uploads/2023/06/test2.pdf"
            type="application/pdf"
            width="100%"
            height="100%"
          />
        </div>

        <div className="pdf-item">
        <h1>The Developer's Notebook 2022 - 23</h1>

          <object
            data="https://viamtechnologies.com/wp-content/uploads/2023/06/Test.pdf"
            type="application/pdf"
            width="100%"
            height="100%"
          />
        </div>
      </div>
    </div>
  );
}

export default Magazine;
