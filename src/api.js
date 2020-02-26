import Axios from "axios";

export const patchArticleVotes = (article_id, voteChange) => {
  return Axios.patch(
    `https://steph-nc-news-app.herokuapp.com/api/articles/${article_id}`,
    { inc_votes: voteChange }
  );
};
