import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from 'redux/slice';
import { nanoid } from 'nanoid'
import css from "./Filter.module.css"



export default function Filter() {
    const InputIdFilter = nanoid();
    const filter = useSelector(state => state.filter);
    const dispatch = useDispatch();
    const onChange = (e) => {
        dispatch(changeFilter(e.target.value));
    }
        
    

    return (
        <div className={css.phonebook__filter}>
            <label
            className={css.phonebook__label}
            htmlFor={InputIdFilter}>Find contacts by name</label>
            <input
            className={css.phonebook__input}
            onChange={onChange}
            type="text"
            name="filter"     
            value={filter}
            id={InputIdFilter}
            >
            </input>
        </div>    
  )   
}

