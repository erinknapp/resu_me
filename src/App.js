import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import Home from "./pages/Home";
import Pro from "./pages/Pro";
import Light from "./pages/Light";
import LoginLite from "./pages/LoginLite";
import LoginPro from "./pages/LoginPro";

// ***************************//
const httpLink = createHttpLink({
	uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
	const token = localStorage.getItem("id_token");
	return {
		headers: {
			...headers,
			authorization: token ? `Bearer ${token}` : "",
		},
	};
});

const client = new ApolloClient({
	link: authLink.concat(httpLink),
	cache: new InMemoryCache(),
});
// ***************************//

function App() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/pro' element={<Pro />} />
					<Route path='/light' element={<Light />} />
					<Route path='/loginLite' element={<LoginLite />} />
					<Route path='/loginPro' element={<LoginPro />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
