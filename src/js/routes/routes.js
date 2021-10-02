const QuestionsRoute = '/questions';

export default {
  Home: '/',
  Questions: {
    Root: QuestionsRoute,
    Name: `${QuestionsRoute}/name`,
    FavoriteColor: `${QuestionsRoute}/favorite-color`,
    ColorReason: `${QuestionsRoute}/color-reason`,
    ColorLoveScale: `${QuestionsRoute}/color-love-scale`,
  },
  Result: '/result',
};
