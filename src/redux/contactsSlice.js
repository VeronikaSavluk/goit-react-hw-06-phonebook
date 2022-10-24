import { createSlice, nanoid } from "@reduxjs/toolkit";

const contactsInitialState = [];

const contactsSlice = createSlice({
    name: "contacts",
    initialState: contactsInitialState,
    reducers: {
        addContact: {
            reducer(state, action) {
                if (state.find(contact => contact.name === action.payload.name)) {
                    alert(`${action.payload.name} is already in contacts`);
                    return;
                }
                state.push(action.payload);
            },
            prepare({ name, number }) {
                return {
                    payload: {
                        id: nanoid(),
                        name,
                        number,
                    },
                };
            },
        },
        deleteContact: {
            reducer(state, action) {
                const index = state.findIndex(contact => contact.id === action.payload);
                state.splice(index, 1);
            },
            prepare(contactId) {
                return {
                    payload: contactId,
                };
            },
        },
    },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;