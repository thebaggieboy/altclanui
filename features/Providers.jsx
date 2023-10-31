import React from "react";
import { Provider } from "react-redux";
import store, { peristor } from "./store";
import { PersistGate } from "redux-persist/integration/react";

const Providers = ({ children }) => {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={peristor}>
				{children}
			</PersistGate>
		</Provider>
	);
};

export default Providers;
