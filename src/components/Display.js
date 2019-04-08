import * as React from "react";

export default function Display(props) {
  return (
    <div className="container">
      <h2
        className="font-weight-bold text-left"
        style={{ marginLeft: "-1rem" }}
      >
        Friends
      </h2>
      <ul className="list-unstyled person text-left my-3">
        <li className="position-relative mb-4">
          <div className="icon rounded-circle position-absolute bg-secondary p-3">
            GM
          </div>
          <div className="name pl-4 ml-5">
            <a href="#">
              <ins>Glenda Meadows</ins>
            </a>
          </div>
          <div className="info text-muted pl-4 ml-5">
            <span className="specifed mr-1 small">female,</span>
            <span className="specifed mr-1 small">39 y.o.,</span>
            <span className="specifed mr-1 small">works for Grok</span>
          </div>
        </li>
        <li className="position-relative">
          <div className="icon rounded-circle position-absolute bg-secondary p-3">
            GM
          </div>
          <div className="name pl-4 ml-5">
            <a href="#">
              <ins>Glenda Meadows</ins>
            </a>
          </div>
          <div className="info text-muted pl-4 ml-5">
            <span className="specifed mr-1 small">female,</span>
            <span className="specifed mr-1 small">39 y.o.,</span>
            <span className="specifed mr-1 small">works for Grok</span>
          </div>
        </li>
      </ul>
    </div>
  );
}
