import * as React from "react";
import * as ReactDOM from "react-dom";
import {NavBar} from './facebook/NavBar';
import {Content} from './facebook/Content';
import {createStore} from 'redux';
import {Provider} from "react-redux";
import {action} from './ts/Actions/WallAction';
import {RootReducer} from "./ts/Reducers/RootReducer";

let store = createStore(RootReducer);

let Facebook = (props)=> {
	return <div>
		<NavBar logo="Facebook"/>
		<Content/>
	</div>
}

ReactDOM.render(
	<Provider store={store}>
		<Facebook/>
	</Provider>,
	document.getElementById("app"));