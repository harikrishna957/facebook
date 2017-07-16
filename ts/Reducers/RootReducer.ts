import {WallReducer,IWallState} from "./WallReducer";
import {combineReducers} from "redux";

export interface IRootState{
	walls:IWallState[]
}

export let RootReducer=combineReducers({
	walls:WallReducer
});