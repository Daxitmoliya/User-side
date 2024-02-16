import { ADD_DATA, REQUEST_DATA, RECEIVE_DATA, FAILURE_DATA,  SINGLE_ADMIN_REJECT, SINGLE_ADMIN_RECEIVE, SINGLE_ADMIN_REQUEST } from "../const";

const initialState = {
  admins: [],
  admin: null,
  loading: false,
  error: null,
};

export const thunkReduxReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_DATA:
      return {
        ...state,
        loading: true,
        error: null,
      };

      case RECEIVE_DATA:
        return {
          ...state,
          admins: action.payload,
          loading: false,
          error: null,
        };
      

    case FAILURE_DATA:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case ADD_DATA:
      return {
        ...state,
        admins: action.payload,
        loading: false,
        error: null,
      };

          case SINGLE_ADMIN_REQUEST:
            return{
              ...state,
              loading:true,
            }
    
          case SINGLE_ADMIN_RECEIVE:
            return{
              ...state,
              loading:false,
              error : null,
              admin : action.payload,
            }

            case SINGLE_ADMIN_REJECT:
              return{
                ...state,
                loading:false,
                error:"nodata",
              }

            
    default:
      return state;
  }
};
