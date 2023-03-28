import React from "react";
import "./style.css";

const index = () => {
  return (
    <>
      <div className="main">
        <div className="main__container">
          <ul>
            <li className="main__container__list">
              <h2>Недавно прослушано</h2>
              <div className="card">
                <div className="card__header">
                  <img src="https://picsum.photos/id/5/200/200" alt="" />
                </div>
                <div className="card__body">
                  <h3>Песня</h3>
                  <p>Исполнитель</p>
                </div>
              </div>
            </li>
            <li className="main__container__list">
                <h2>Популярные</h2>
                <div className="card">
                <div className="card__header">
                    <img src="https://picsum.photos/id/5/200/200" alt="" />
                </div>
                <div className="card__body">
                    <h3>Песня</h3>
                    <p>Исполнитель</p>
                </div>
                </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default index;
