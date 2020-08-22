import Piece from './Piece';
import * as utils from '../utils';

export default class Knight extends Piece {
  constructor(square, player) {
    super(square, player);
  }

  getAttackedSquares(allSquares) {
    const currentSquare = this.getSquare(allSquares).id;
    const currentLetter = currentSquare.charAt(0);
    const currentDigit = parseInt(currentSquare.charAt(1));

    const attackedSquares = [`${String.fromCharCode(currentLetter.charCodeAt(0) + 2)}${currentDigit + 1}`, `${String.fromCharCode(currentLetter.charCodeAt(0) + 2)}${currentDigit - 1}`, `${String.fromCharCode(currentLetter.charCodeAt(0) + 1)}${currentDigit + 2}`, `${String.fromCharCode(currentLetter.charCodeAt(0) + 1)}${currentDigit - 2}`, `${String.fromCharCode(currentLetter.charCodeAt(0) - 1)}${currentDigit + 2}`, `${String.fromCharCode(currentLetter.charCodeAt(0) - 1)}${currentDigit - 2}`, `${String.fromCharCode(currentLetter.charCodeAt(0) - 2)}${currentDigit + 1}`, `${String.fromCharCode(currentLetter.charCodeAt(0) - 2)}${currentDigit - 1}`];

    return attackedSquares.filter((id) => !!utils.getSquare(id, allSquares));
  }
}
