import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  // ref
  const ref = useRef(null);

  //   useState
  const [width, setWidth] = useState(0);
  const [left, setLeft] = useState(0);
  const [closeBtn, setCloseBtn] = useState("d-none");
  const [openBtn, setOpenBtn] = useState("d-block");
  const [slide, setSlide] = useState("animate__bounceOutLeft");
  const [delay, setDelay] = useState("");
  //   layoutEfeect
  useLayoutEffect(() => {
    setWidth(ref.current.offsetWidth);
    setLeft(-ref.current.offsetWidth);
  }, []);
  const hiden = () => {
    setLeft(-width);
    setOpenBtn("d-block");
    setCloseBtn("d-none");
  };
  const test = () => {
    if (left === 0) {
      setLeft(-width);
      setOpenBtn("d-block");
      setCloseBtn("d-none");
      setSlide("animate__bounceOutLeft");
      setDelay("");
    } else {
      setLeft(0);
      setOpenBtn("d-none");
      setCloseBtn("d-block");
      setSlide("animate__fadeInUp");
      setDelay("animate__delay-1s");
    }
  };
  return (
    <>
      <div
        className="position-fixed top-0 bottom-0 d-flex sidebar"
        style={{ left: left }}
      >
        <div ref={ref} className="inner bg-dark text-white p-2">
          <div className="h-100 d-flex flex-column justify-content-between p-2">
            <ul className="list-unstyled">
              <Link
                to="/Search"
                onClick={() => hiden()}
                className={`p-2 text-decoration-none text-white d-block animate__animated animate__faster ${delay} ${slide}`}
              >
                Search
              </Link>
              <Link
                to="/Categories"
                onClick={() => hiden()}
                className={`p-2 text-decoration-none text-white d-block animate__animated animate__faster ${delay} ${slide}`}
              >
                Categories
              </Link>
              <Link
                to="/Areas"
                onClick={() => hiden()}
                className={`p-2 text-decoration-none text-white d-block animate__animated animate__faster ${delay} ${slide}`}
              >
                Area
              </Link>
              <Link
                to="/Ingredients"
                onClick={() => hiden()}
                className={`p-2 text-decoration-none text-white d-block animate__animated animate__faster ${delay} ${slide}`}
              >
                Ingredient
              </Link>
            </ul>
            <div>
              <div className="icons d-flex gap-2">
                <i className="fab fa-facebook"></i>
                <i className="fab fa-twitter"></i>
                <i className="fas fa-globe"></i>
              </div>
              <p>Copyright Â© 2019 All Rights Reserved.</p>
            </div>
          </div>
        </div>
        <div className="outer bg-white p-2">
          <div className="h-100 p-2 d-flex flex-column justify-content-between align-items-center">
            <div>
              <i className="fa-regular fa-face-smile-beam fa-2x"></i>
            </div>
            <div>
              <i
                onClick={() => {
                  test();
                }}
                className={`${openBtn} fas fa-bars fa-2x`}
              ></i>
              <i
                onClick={() => {
                  test();
                }}
                className={`${closeBtn} fas fa-x fa-2x`}
              ></i>
            </div>
            <div className="icons d-flex flex-column gap-1">
              <i className="fas fa-globe"></i>
              <i className="fas fa-share-nodes"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Sidebar;
