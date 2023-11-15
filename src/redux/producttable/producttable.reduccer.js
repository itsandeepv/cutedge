import { AddERROR, AddLOADING, AddSUCCESS, updateProduct } from "./Producttable.Type";

const initialState = {
    loading: false,
    productData: [
        {
            id:1,
            productName: "Checken breast fillests 6 ouns row ",
            image_url: require("../../assests/images/Avocado.jpg"),
            brand: "Hormal Black six",
            price: 60,
            quantity: 1,
            total: 60,
            status: "Approved",
        }
    ],
    error: false,
}

export const Product_Reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case AddLOADING: {
            return { ...state, loading: true, error: false };
        }
        case AddSUCCESS: {
            return { ...state, error: false, loading: false,
                 productData: [...state.productData ,
                    {
                        id: state.productData.length + 1 ,...payload
                    }
                ]  };
        }
        case updateProduct: {
            // return { ...state, error: false, loading: false,
                
            // }
            return {
                ...state,
                productData: state.productData.map(item =>
                  item.id === payload.id
                    ? { ...item, ...payload }
                    : item
                ),
              };
        }
        default: {
            return state;
        }
    }

}