import React from "react";
import { useContext } from "react";
import { EventContext } from "../../context";
import style from "./styles/EventsFilter.module.css"


//get all unique values
const getUnique = (items, value) =>{
    return [...new Set(items.map(item =>item[value]))]
}


export default function EventsFilter({events}) {
  const context = useContext(EventContext);
//   console.log(context);
  const { handleChange, resetState, type, month, name} = context;
//   console.log(name);
  
//   avoid refreshing page on enter
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
        event.preventDefault()
    }
  }
    
  
  
// get unique types
let types = getUnique(events, 'type');
// add all
types =['All',...types];
// map to jsx
types = types.map((item,index)=>{
    return <option value={item} key={index}>{item}</option>
})

let months = getUnique(events, "month");
months = ['All',...months];
months=months.map((item,index)=>{
    return <option value={item} key={index}>{item}</option>
})

// let names = getUnique(events, "name");
// names = [...names];
// names=names.map((item,index)=>{
//     return item
    
// })

  return <section className={style.filterContainer}>
    
    <form className={style.filterForm}>
       {/* search */}
       <div className={style.formGroup}>
            <label htmlFor="name">Search</label>
            <input type="text" name="name" id="name" value={name} className={style.formControl}  onChange={handleChange} onKeyDown={handleKeyDown} placeholder="Event name">
                {/* {name} */}
            </input>
        </div>
        {/* end of search */}
        {/* select type */}
        <div className={style.formGroup}>
            <label htmlFor="type">event type</label>
            <select name="type" id="type" value={type} className={style.formControl} onChange={handleChange}>
                {types}
            </select>
        </div>
        {/* end of select type */}
         {/* select month */}
         <div className={style.formGroup}>
            <label htmlFor="month">Select Month</label>
            <select name="month" id="month" value={month} className={style.formControl}  onChange={handleChange}>
                {months}
            </select>
        </div>
        {/* end of select month */}
       
       
        {/* reset */}
        
        <button onClick={resetState} className={style.btnPrimary}>Reset</button>
    </form>

  </section>;
}
