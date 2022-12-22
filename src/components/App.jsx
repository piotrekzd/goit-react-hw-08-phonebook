import React, { useEffect, lazy } from 'react';


export const App = () => {

  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch])

  return (
    <div>
      <h1 className={style.header}>Phonebook</h1>
      <ContactForm />
      <h2 className={style.header}>Contacts</h2>
      <Filter />
      {isLoading && !error ? <Loader /> : <ContactList />}
    </div>
  );
};