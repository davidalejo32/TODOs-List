import React from "react";
import errorImg from '../../assets/img/error.svg';
import "./TodoError.scss";

function TodoError({ error }) {
  return (
    <div className="error">
      <img className="error__img" src={errorImg} alt="" />
      <p className="error__text">Oops, something went wrong. Please try again later.</p>
    </div>
  );
}

export {TodoError}