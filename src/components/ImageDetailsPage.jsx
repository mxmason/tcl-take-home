export function ImageDetailsPage({ selectedPiece, handleBackButtonClick }) {
	const { artist_title, id, title } = selectedPiece;
	return (
		<div>
			<button onClick={handleBackButtonClick}>Back</button>
			<h2>{title}</h2>
		</div>
	);
}
