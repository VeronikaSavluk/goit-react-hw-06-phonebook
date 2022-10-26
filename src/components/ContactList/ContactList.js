import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "redux/contactsSlice";
import { getContacts, getFilter } from "redux/selectors";
import { List, ContactItem, DataContact, Delete } from "./ContactList.styled";

const ContactList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);
    const visibleContacts = filter
        ? contacts.filter(contact => contact.name.toLowerCase().includes(filter))
        : contacts;

    return (
        <List>
            {visibleContacts.map(({ id, name, number }) => (
                <ContactItem key={id}>
                    <DataContact>{name}:</DataContact>
                    <DataContact>{number}</DataContact>
                    <Delete onClick={() => dispatch(deleteContact(id))}>Delete</Delete>
                </ContactItem>
            ))}
        </List>
    );
};

ContactList.propTypes = {
    visibleContacts: PropTypes.arrayOf(
        PropTypes.exact({
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
            id: PropTypes.string,
        }),
    ),
};

export default ContactList;