import React from "react";
import { useDispatch } from "react-redux";
import classes from './Form.module.css';
import { counterActions } from "../store/store";

const Form = () => {

    const dispatchAction = useDispatch();

    const formSubmitHandler = (event) => {
        event.preventDefault();
        console.log(event.target.elements.customCounter.value);
        dispatchAction(counterActions.custom_increment( parseInt(event.target.elements.customCounter.value)));
    }
  return (
    <form className={classes['custom-counter']} onSubmit={formSubmitHandler}>
      <label htmlFor={"customCounter"}>--Increment Value--</label>
      <input id="customCounter" type='number' />
      <button type="submit">Increment</button>
    </form>
  );
};

export default Form;
