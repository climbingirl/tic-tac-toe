import { Component } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '../../redux/store';
class InformationContainer extends Component<PropsFromRedux> {
  render() {
    const { isDraw, isGameEnded, currentPlayer } = this.props;

    let information = '';
    if (isDraw) {
      information = 'Ничья';
    } else if (!isDraw && isGameEnded) {
      information = `Победа: ${currentPlayer}`;
    } else if (!isDraw && !isGameEnded) {
      information = `Ходит: ${currentPlayer}`;
    }

    return <div className="text-2xl italic">{information}</div>;
  }
}

const mapState = (state: RootState) => ({
  isDraw: state.isDraw,
  isGameEnded: state.isGameEnded,
  currentPlayer: state.currentPlayer,
});

const connector = connect(mapState);

type PropsFromRedux = ConnectedProps<typeof connector>;

export const Information = connector(InformationContainer);
