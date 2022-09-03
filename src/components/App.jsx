import './App.css';

import { useState } from 'react';

import { searchArtworks } from '../utils/api';
import { SearchForm } from './SearchForm';
import { Footer } from './Footer';

export function App() {
	const [data, setData] = useState([]);

	async function onSearchSubmit(query) {
		const { data } = await searchArtworks(query);
		setData(data);
	}

	return (
		<div className="App">
			<h1>TCL Career Lab Art Finder</h1>
			<SearchForm onSearchSubmit={onSearchSubmit} />
			<ul>
				{data.map((artwork) => (
					<li key={artwork.id}>
						<a href={`#${artwork.id}`}>
							{artwork.title} by {artwork.artist_title}
						</a>
					</li>
				))}
			</ul>

			<Footer />
		</div>
	);
}
