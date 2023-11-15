
import { AddLOADING  ,AddSUCCESS ,AddERROR, updateProduct} from "./Producttable.Type";


export const Additem = (itemData) => (dispatch) => {
  console.log(itemData , "<<<<itemData");
  dispatch({ type: AddSUCCESS, payload: itemData });

};

export const updateitem = (itemData) => (dispatch) => {
  console.log(itemData , "<<<<itemData");
  dispatch({ type: updateProduct, payload: itemData });

};