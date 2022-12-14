
import {ContactForm} from "./Form";
import {ContactList} from "./ContactList";
import { FilterContact } from './ContactFilter';
import  { Title, SubTitle } from "./App.styles";


export const App = () => {
  
  return (
    <>
      <Title>Phonebook</Title>
      <ContactForm />
      
        <>
          <SubTitle>Contacts</SubTitle>
          <FilterContact />
          <ContactList />
        </>
      
    </>
  );
};
