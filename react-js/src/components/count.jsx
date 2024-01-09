
import { useSelector, useDispatch } from "react-redux";
import "../App.css";
import { custom } from "../redux/slices/counterSlice";
import { useContext } from "react";
import { ThemeContext } from './../context/context';

function Count() {
  const dispatch = useDispatch();

  const mycount = useSelector((state) => state.count.value);

  const value = useContext(ThemeContext);

  return (
    <>
      <div className="card">
        <button
          onClick={() => {
            // dispatch(incremented());
            dispatch(custom(10));
            value.setTheme("bolo");
          }}
        >
          count is mycount {mycount} &{value.theme}
        </button>
        <p>
          Edit <code>src/Count.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default Count;
