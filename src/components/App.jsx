import ContactForm from "./ContactForm/ContactForm";
import Filter from "./Filter/Filter";
import ContactList from "./ContactList/ContactList";
import css from "./App.module.css"

export function App() { 
 
  return (
      <div className={css.phonebook}>
         <div className={css.phonebook__inform}>
         <h1 className={css.phonebook__titel}>Phonebook</h1>
         <ContactForm/>
         </div>
         <h2>Contacts</h2>
         <Filter/>
         <ContactList/>
      </div>
   )
}
