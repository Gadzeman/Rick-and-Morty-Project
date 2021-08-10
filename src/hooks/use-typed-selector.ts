import {TypedUseSelectorHook, useSelector} from "react-redux";
import {combinedReducers} from "../redux/reducers";

export const useTypedSelector: TypedUseSelectorHook<combinedReducers> = useSelector;