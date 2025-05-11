import { SearchBar } from "./SearchBar/SearchBar";

export const HomePage = () => {
	return (
		<>
			<SearchBar
				onSearch={(query) => {
					dispatch({ type: "SET_SEARCH_QUERY", payload: query });
				}}
			/>

			{/* <div className="books-grid"
        {filteredBoook.lenght > 0 ? (
          filteredBooks.map((book) => {

          }))
        )}
      </div> */}
		</>
	);
};
