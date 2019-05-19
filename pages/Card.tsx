import React from 'react';
import {connect, DispatchProp} from 'react-redux';
import UsersAction from '../src/stores/users/UsersAction';
import IStore from '../src/models/IStore';
import IAction from '../src/models/IAction';
import Card from '../src/views/components/Card';

interface IProps {}
interface IState {}
interface IStateToProps {
  readonly users: any;
}

const mapStateToProps = (state: IStore, ownProps: IProps): IStateToProps => ({
  users: state.users.users[0],
});

class CardPage extends React.Component<IProps & IStateToProps & DispatchProp<IAction<any>>, IState> {
  public static async getInitialProps(props) {
    const {store, isServer} = props.ctx;

    if (isServer) {
      store.dispatch(UsersAction.loadUsers());
    }

    return {isServer};
  }

  public render(): JSX.Element {
    return (
      <Card />
    );
  }

}

export {CardPage as Unconnected};
export default connect(mapStateToProps)(CardPage);
