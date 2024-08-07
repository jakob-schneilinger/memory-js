import './App.css';

/* 
 * @param {String} textValue, symbol for the backside
 * @param {boolean} cardFlipped, if the card is currently flipped
 * @param isMatchingPair, function called when card is flipped
 */
function Card({textValue, cardFlipped, isMatchingPair}) {
  const changeSide = () => {
    if (!cardFlipped) {
      isMatchingPair();
    }
  }

  return (
    <div
        id = {`${cardFlipped ? 'backSide' : 'frontSide'}`}
        className = 'gridItem'
        onClick = {changeSide}
    >
      <div id = 'text'>{textValue}</div>
    </div>
  );
}

export default Card;