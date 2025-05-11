import { useState, useEffect, KeyboardEvent } from "react";

interface SearchBarProps {
	onSearch: (query: string) => void;
	debounceTime?: number;
}

export const SearchBar = ({ onSearch, debounceTime = 300 }: SearchBarProps) => {
	const [query, setQuery] = useState("");

	const handleSearch = () => {
		const normalizedQuery = query
			.normalize("NFD")
			.replace(/[\u0300-\u036f]/g, "")
			.toLowerCase();

		onSearch(normalizedQuery);
	};

	const handleKeyPress = (e: KeyboardEvent) => {
		if (e.key === "Enter") {
			console.log("Opa, pressionou o enter!");
			handleSearch();
		}
	};

	useEffect(() => {
		const debounceTimer = setTimeout(() => {
			handleSearch();
		}, debounceTime);

		return () => clearTimeout(debounceTimer);
	}, [query, debounceTime]);

	return (
		<div>
			<input
				type="text"
				placeholder="Pesquisar por título, autor ou categoria..."
				value={query}
				onChange={(e) => {
					setQuery(e.target.value);
				}}
				onKeyDown={handleKeyPress}
			/>

			<button onClick={handleSearch} aria-label="Executar pesquisa">
				🔍
			</button>

			{query && (
				<button
					onClick={() => {
						setQuery("");
						onSearch("");
					}}
					aria-label="Limpar pesquisa"
				>
					×
				</button>
			)}
		</div>
	);
};
