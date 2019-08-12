const initialState = {
    venueName: '',
    latitude: '',
    longitude: '',
    phone: '',
    address: '',
    imageUrl:'',
    url:'',
    rating:'',
    review:''
  }
  export const VenueDetailReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_VENUE_NAME':
        return {
          ...state,
          venueName: action.payload,
        }
      case 'SET_LATITUDE':
        return {
          ...state,
          latitude: action.payload,
        }
      case 'SET_LONGITUDE':
        return {
          ...state,
          longitude: action.payload,
        } 
      case 'SET_PHONE':
      return {
        ...state,
        phone: action.payload,
      } 
      case 'SET_ADDRESS':
      return {
        ...state,
        address: action.payload,
      } 
      case 'SET_IMAGE_URL':
      return {
        ...state,
        imageUrl: action.payload,
      } 
      case 'SET_URL':
      return {
        ...state,
        url: action.payload,
      }
      case 'SET_REVIEW':
        return {
          ...state,
          review: action.payload,
      }
      case 'SET_RATING':
        return {
          ...state,
          rating: action.payload,
        }
      case 'CLEAR_VENUE_DETAILS':
        return {
          ...state,
          venueName: '',
          latitude: '',
          longitude: '',
          phone: '',
          address: '',
          imageUrl:'',
          url:'',
          rating:'',
          review:''
        }
        
      default:
        return state
    }
  }