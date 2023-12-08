import Navbar from './components/Navbar';

function App() {
	const handleFileUpload = () => {
		console.log('attempt file upload');
	};
	return (
		<div className="d-flex flex-column vh-100">
			<Navbar />
			<div className="d-flex flex-column flex-fill align-items-center justify-content-center">
				<div>
					<input
						type="file"
						name="file"
						placeholder="Select a file to upload"
					/>
					<button className="btn btn-dark" onClick={handleFileUpload}>
						Upload
					</button>
				</div>
			</div>
		</div>
	);
}

export default App;
