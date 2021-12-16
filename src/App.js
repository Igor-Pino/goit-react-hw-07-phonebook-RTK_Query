import ContactInput from './components/ContactInput';
import ContactsList from './components/ContactsList/ContactsList';
// import { useSelector } from 'react-redux';
// import Filter from './components/ContactFilter';
// import { getLoading } from './redux/PhoneBook-selectors';
import s from './styles/base.module.scss';

function App() {
  // const loader = useSelector(getLoading);

  return (
    <div className={s.main_container}>
      <h1 className={s.title}>Phonebook</h1>

      <ContactInput />
      {/* {loader ? <h2>loading...</h2> : <h2 className={s.title}>Contacts</h2>} */}

      {/* <Filter /> */}

      <ContactsList />
    </div>
  );
}

export default App;
