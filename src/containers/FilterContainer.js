import { connect } from "react-redux";
import FilterComponent from "../components/SearchComponent";
import { fetchUsers } from "../actions/actions";

function mapStateToProps(state) {
  return {
    users: state.users
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterComponent);
