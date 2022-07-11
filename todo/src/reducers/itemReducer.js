export const getAllItemsReducer=(state={items : []} , action)=>{

    switch(action.type)
    {
        case 'GET_ITEMS_REQUEST' : return{
            loading : true,
            ...state
        }
        case 'GET_ITEMS_SUCCESS' : return{
            loading : false,
            items : action.payload
        }
        case 'GET_ITEMS_FAILED' : return{
            error : action.payload,
            loading : false
        }
        default : return state
    }

}

export const addItemReducer = (state={}, action)=>{

    switch(action.type)
    {
        case 'ADD_ITEM_REQUEST' : return{
            loading : true
        }
        case 'ADD_ITEM_SUCCESS' : return{
            loading : false,
            success: true
        }
        case 'ADD_ITEM_FAILED' : return{
            loading : false,
            error:action.payload
        }
        default : return state
    }


}


export const editItemReducer = (state={}, action)=>{

    switch(action.type)
    {
        case 'EDIT_ITEM_REQUEST' : return{
            loading : true
        }
        case 'EDIT_ITEM_SUCCESS' : return{
            loading : false,
            success: true
        }
        case 'EDIT_ITEM_FAILED' : return{
            loading : false,
            error:action.payload
        }
        default : return state
    }


}

export const deleteItemReducer = (state={}, action)=>{

    switch(action.type)
    {
        case 'EDIT_ITEM_REQUEST' : return{
            loading : true
        }
        case 'EDIT_ITEM_SUCCESS' : return{
            loading : false,
            success: true
        }
        case 'EDIT_ITEM_FAILED' : return{
            loading : false,
            error:action.payload
        }
        default : return state
    }


}