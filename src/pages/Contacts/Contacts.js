import { useEffect } from "react";
import { fetchContacts } from "redux/contacts/operations";
import { getIsLoading } from "redux/contacts/selectors";
import { useDispatch, useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import { Filter } from "components/Filter/Filter";
import { Loader } from "components/Loader/Loader";
import { ContactForm } from "components/ContactForm/ContactForm";
import { ContactList } from "components/ContactList/ContactList";

export default function Contacts() {
    const dispatch = useDispatch();
    const isLoading = useSelector(getIsLoading);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <>
            <Helmet>
                <title>Phonebook</title>
            </Helmet>
            <ContactForm />
            <Filter />
            <div>
                {isLoading && <Loader />}
            </div>
            <ContactList />
        </>
    );
};