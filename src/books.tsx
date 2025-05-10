import { createContext, useContext, useReducer, useEffect } from "react"

import { Book } from "./types/book"

import { mockBooks } from "./mocks/books"

type State = {
  books: Book[]
  searchQuery: string
}

type Action =
  | { type: "ADD_BOOK", payload: Book | Book[] }
  | { type: "UPDATE_BOOK_STATUS", payload: { id: string; status: "available" | "borrowed" } }
  | { type: "SET_SEARCH_QUERY", payload: string }
  | { type: "CLEAR_SEARCH" }

type BooksContextType = {
  state: State
  dispatch: React.Dispatch<Action>
  filteredBooks: Book[]
}

const BooksContext = createContext<BooksContextType>({} as BooksContextType)