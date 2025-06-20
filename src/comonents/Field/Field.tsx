import { Component } from 'react';
import { RootState } from '../../redux/store.ts';
import { connect, ConnectedProps } from 'react-redux';
import { PLAYER } from '../../common/constants.ts';
import { calcWinner, hasEmptySquare } from '../../common/utils.ts';
import {
  setIsGameEnded,
  setIsDraw,
  setCurrentPlayer,
  setField,
} from '../../redux/actions.ts';

class FieldContainer extends Component<PropsFromRedux> {
  handleMove = (squareIndex: number): void => {
    if (this.props.field[squareIndex] || this.props.isGameEnded) return;

    const newField = this.props.field.slice();
    newField[squareIndex] = this.props.currentPlayer;

    if (calcWinner(newField)) {
      this.props.setIsGameEnded(true);
    } else if (!hasEmptySquare(newField) && !this.props.isGameEnded) {
      this.props.setIsDraw(true);
      this.props.setIsGameEnded(true);
    } else {
      this.props.setCurrentPlayer(
        this.props.currentPlayer === PLAYER.CROSS ? PLAYER.NOUGHT : PLAYER.CROSS
      );
    }

    this.props.setField(newField);
  };
  render() {
    return (
      <div className="grid grid-cols-3 w-max mt-7.5 mb-8.5 mx-auto">
        {this.props.field.map((value, index) => (
          <button
            className="text-5xl font-bold h-[75px] w-[75px] mr-[-1px] mt-[-1px] text-[darkslateblue] bg-white border-[1px] border-gray-500 cursor-pointer"
            key={index}
            onClick={() => {
              this.handleMove(index);
            }}
          >
            {value}
          </button>
        ))}
      </div>
    );
  }
}

const mapState = (state: RootState) => ({
  field: state.field,
  isGameEnded: state.isGameEnded,
  currentPlayer: state.currentPlayer,
});

const mapDispatch = {
  setIsGameEnded,
  setIsDraw,
  setCurrentPlayer,
  setField,
};

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

export const Field = connector(FieldContainer);
