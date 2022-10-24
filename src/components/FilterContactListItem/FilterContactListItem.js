import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { setFilter } from "../../redux/filterSlice";
import { nanoid } from "nanoid";

import { ContactBook, NameInput } from "./FilterContactListItem.styled";
import { NameLable } from "../ContactForm/ContactForm.styled";

const FilterContactList = () => {
    const QueryInputId = nanoid();
    const dispatch = useDispatch();

    const handleChange = e => {
        e.preventDefault();
        const form = e.target;
        dispatch(setFilter(form.value.toLowerCase()));
    };

    return (
        <ContactBook>
            <NameLable htmlFor={QueryInputId}>Find contacts by name</NameLable>
            <NameInput
                type="text"
                name="value"
                id={QueryInputId}
                onChange={handleChange}
        />
        </ContactBook>
    )
}

FilterContactList.propTypes = {
    handleChange: PropTypes.func,
    QueryInputId: PropTypes.func,
}

export default FilterContactList;