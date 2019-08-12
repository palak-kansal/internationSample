import {createStackNavigator, createAppContainer} from 'react-navigation';
import Venue from './Venue'
import VenueDetails from './VenueDetails'
import VenueReview from './VenueReview'
 
const RootNavigator = createStackNavigator({
    Venue: {
        screen: Venue
        },
    VenueDetails: {
        screen: VenueDetails
        },
    VenueReview: {
        screen: VenueReview
    }
    
});

export default createAppContainer(RootNavigator);

