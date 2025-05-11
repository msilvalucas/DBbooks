import { createContext, useContext, useReducer, useEffect } from "react";

import { Book } from "./types/book";

import { mockBooks } from "./mocks/books";
import localforage from "localforage";

type State = {
	books: Book[];
	searchQuery: string;
};

type Action =
	| { type: "ADD_BOOK"; payload: Book | Book[] }
	| {
			type: "UPDATE_BOOK_STATUS";
			payload: { id: string; status: "available" | "borrowed" };
	  }
	| { type: "SET_SEARCH_QUERY"; payload: string }
	| { type: "CLEAR_SEARCH" };

type BooksContextType = {
	state: State;
	dispatch: React.Dispatch<Action>;
	filteredBooks: Book[];
};

const BooksContext = createContext<BooksContextType>({} as BooksContextType);

const initialState: State = {
	books: [],
	searchQuery: "",
};

const normalizeString = (str: string) => {
	return str.normalize("NFD").replace("./[u0300-\u036f]/g", "").toLowerCase();
};

const reducer = (state: State, action: Action): State => {
	switch (action.type) {
		case "ADD_BOOK":
			return {
				...state,
				books: Array.isArray(action.payload)
					? action.payload
					: [...state.books, action.payload],
			};

		case "UPDATE_BOOK_STATUS":
			return {
				...state,
				books: state.books.map((book) =>
					book.id === action.payload.id
						? { ...book, status: action.payload.status }
						: book,
				),
			};

		case "SET_SEARCH_QUERY":
			return { ...state, searchQuery: action.payload };

		case "CLEAR_SEARCH":
			return { ...state, searchQuery: "" };

		default:
			return state;
	}
};
