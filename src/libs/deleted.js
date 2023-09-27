import userArray from "./user";

const deleteCard = (card) => {
  const newCard = this.state.card.filter(
    (userArray) => userArray.card !== card.id
  );

  this.setState({
    userArray: newCardList,
  });
  console.log("user", userArray);
};

export default deleteCard;
