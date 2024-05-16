// @todo: Темплейт карточки

// Клонируем содержимое тега template

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу

const CardTemplate = document.querySelector("#card-template").content;

for (let i = 0; i < initialCards.length; i++) {
  const mediaCard = createCard(
    initialCards[i].link,
    initialCards[i].name,
    removeCard
  );
  displayCards(mediaCard);
}

function createCard(image, title, deleteCard) {
  const mediaCard = CardTemplate.querySelector(".places__item").cloneNode(true);
  const deleteButton = mediaCard.querySelector(".card__delete-button");

  deleteButton.addEventListener("click", function () {
    deleteCard(mediaCard);
  });

  mediaCard.querySelector(".card__image").src = image;
  mediaCard.querySelector(".card__title").textContent = title;

  return mediaCard;
}

function displayCards(mediaCard) {
  const places = document.querySelector(".places__list");
  places.append(mediaCard);
}

function removeCard(card) {
  card.remove();
}
