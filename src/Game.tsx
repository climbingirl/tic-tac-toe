import { connect, ConnectedProps } from 'react-redux';
import { Field } from './comonents/Field/Field.tsx';
import { Information } from './comonents/Information/Information.tsx';
import { resetGame } from './redux/actions.ts';
import { Component } from 'react';

class GameContainer extends Component<PropsFromRedux> {
  render() {
    return (
      <div className="max-w-[1280px] w-full mx-auto p-[20px] text-center">
        <Information />
        <Field />
        <button
          className="btn text-amber-800 border-amber-800 hover:bg-amber-50"
          onClick={this.props.resetGame}
        >
          Начать заново
        </button>
      </div>
    );
  }
}

const mapDispatch = {
  resetGame,
};

const connector = connect(null, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

export const Game = connector(GameContainer);
