import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/store';

const Counter = () => {

    const counter = useSelector(state => state.counter);
    const dispatchAction = useDispatch();

    const incrHandler = () => {
        dispatchAction(counterActions.increment());
    }

    const decrHandler = () => {
        dispatchAction(counterActions.decrement());
    }

    return ( 
        <main className={classes.counter}>
            <h1>React Redux Counter</h1>
            <div className={classes.counterval}>{counter}</div>
            <button onClick={incrHandler}>Increment</button>
            <button onClick={decrHandler}>Decrement</button>
        </main>
     );
}

export default Counter;