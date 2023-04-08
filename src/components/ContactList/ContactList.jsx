import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/API/getContacts';
import { useEffect } from 'react';
import { deleteContact } from 'redux/API/deleteContact';
import Loader from 'components/Loader/Loader';
import css from "./ContactList.module.css";


export default function ContactList() {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter);
  const error = useSelector(state => state.contacts.error);
  const isLoading = useSelector(state => state.contacts.isLoading);

  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(fetchContacts())
  },[dispatch])

  const normalizedName =  filter.toLowerCase();
  const visibleContacts = contacts.filter(contact =>
  contact.name.toLowerCase().includes(normalizedName));


  if (error === "rejected") {
    return (<div>Not found contacts</div>)
  } 
   
  if (isLoading) {
    return (<div><Loader/></div>)
  }        
  
  if (contacts.length === 0) {
    return (<div>Add your contacts</div>)
  }

  if (!isLoading) {
    return (
          <ul className={css.phonebook__list}>
            {visibleContacts.map(contact => (
          <li
          className={css.phonebook__item}  
          key={contact.id}>
          <span
          className={css.phonebook__name}        
          >{contact.name}</span>
          <span>{contact.phone}</span>
                <button
          className={css.phonebook__deleteBtn}        
          onClick={() => dispatch((deleteContact(contact.id)))}>Delete</button>      
            </li>
          ))}
          </ul>
      )
  }
}




