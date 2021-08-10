import {bindActionCreators} from "redux";
import {useDispatch} from "react-redux";
import * as ActionCreators from "../redux/action-creators"

export const useAction = () => {
    const dispatch = useDispatch()
    return bindActionCreators(ActionCreators, dispatch)
}