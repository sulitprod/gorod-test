import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./Home";
import News from "./News";

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path='/:newsId' element={<News />} />
				<Route path='/' element={<Home />} />
			</Routes>
		</Router>
	);
}

export default App;
