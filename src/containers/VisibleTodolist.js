import { connect } from 'react-redux';
import VisibleTodolist from '../components/VisibleTodolist';
import { deleteTodoState, toggleTodoState } from '../redux/actions';

const mapStateToProps = (state) => state;
const mapDispatchToProps = { deleteTodoState, toggleTodoState };

export default connect(mapStateToProps, mapDispatchToProps)(VisibleTodolist);
