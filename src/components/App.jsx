import './App.css';

import { useState } from 'react';

import { searchArtworks } from '../utils/api';
import { SearchForm } from './SearchForm';
import { Footer } from './Footer';
import { ImageDetailsPage } from './ImageDetailsPage';

export function App() {
	const [data, setData] = useState([]);
	const [selectedPiece, setSelectedPiece] = useState(null);

	async function onSearchSubmit(query) {
		const { data } = await searchArtworks(query);
		setData(data);
	}

	function handleArtworkClick(id, event) {
		setSelectedPiece(data.find((piece) => piece.id === id));
		event.preventDefault();
	}

	function handleBackButtonClick() {
		setSelectedPiece(null);
	}

	return (
		<div className="App">
			<h1>TCL Career Lab Art Finder</h1>
			{selectedPiece === null && (
				<>
					<SearchForm onSearchSubmit={onSearchSubmit} />
					<ul>
						{data.map((artwork) => (
							<li key={artwork.id}>
								<a
									href={`#${artwork.id}`}
									onClick={(event) => handleArtworkClick(artwork.id, event)}
								>
									{artwork.title} by {artwork.artist_title}
								</a>
							</li>
						))}
					</ul>
				</>
			)}
			{selectedPiece !== null && (
				<ImageDetailsPage
					handleBackButtonClick={handleBackButtonClick}
					selectedPiece={selectedPiece}
				/>
			)}

			<Footer />
		</div>
	);
}
