import { useSelector,useDispatch } from 'react-redux';
import { remove } from 'redux/slice';
import css from "./ContactList.module.css"


export default function ContactList() {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const normalizedName =  filter.toLowerCase();
  const visibleContacts = contacts.filter(contact =>
  contact.name.toLowerCase().includes(normalizedName));
  
  

    return (
        <ul className={css.phonebook__list}>
          {visibleContacts.map(contact => (
        <li
        className={css.phonebook__item}  
        key={contact.id}>
        <span
        className={css.phonebook__name}        
        >{contact.name}</span>
        <span>{contact.number}</span>
              <button
        className={css.phonebook__deleteBtn}        
        onClick={() => dispatch(remove(contact.id))}>Delete</button>      
          </li>
        ))}
        </ul>
    )
}




