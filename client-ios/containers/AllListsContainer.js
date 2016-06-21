import { connect } from 'react-redux';
import * as actions from '../actions/index.js';
import AllListsScreen from '../components/allListsScreen.js';

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserLists: () => {
      console.log('hit it');
      dispatch(actions.fetchUserLists());
    }
  };
};

const mapStateToProps = (state, ownProps) => {
  console.log('the state from the container ', state);
  return {
    user: "test",
    products: [1,2,3],
    lists: state.lists
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AllListsScreen);
