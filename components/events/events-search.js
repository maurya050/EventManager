import Button from "../ui/button";
import classes from "./events-search.module.css";
import { useRef } from "react";


function EventSearch(props) {

    const yearInput = useRef();
    const monthInput = useRef();
    const submitHandler = (e) => {
        e.preventDefault();
        const selectedyear = yearInput.current.value;
        const selectedmonth = monthInput.current.value;

        props.onSearch(selectedyear, selectedmonth);
        
    }
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor="year">Year</label>
          <select id="year" ref={yearInput}>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor="month">Month</label>
          <select id="month" ref={monthInput}>
            <option value="1">January</option>
            <option value="2">Febuary</option>
            <option value="1">March</option>
            <option value="1">April</option>
            <option value="1">May</option>
            <option value="1">June</option>
            <option value="1">July</option>
            <option value="1">August</option>
            <option value="1">September</option>
            <option value="1">October</option>
            <option value="1">November</option>
            <option value="1">December</option>
          </select>
        </div>
      </div>
      <Button>Find Events</Button>
    </form>
  );
}

export default EventSearch;
