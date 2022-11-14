import axios from 'axios'

export async function fetchSearchedItems(
  searchedQuerySring,
  searchedScope,
  categoryIdOrArticleType
) {
  try {
    const queryParams = { query_str: searchedQuerySring, scope: searchedScope }

    if (searchedScope === 'catalog' && categoryIdOrArticleType) {
      queryParams.category_id = categoryIdOrArticleType
    }

    if (searchedScope === 'article' && categoryIdOrArticleType) {
      queryParams.article_type = categoryIdOrArticleType
    }

    const { data } = await axios.get(
      `http://auvix-back.bikdev.ru/api/v1/main/search`,
      {
        params: queryParams,
      }
    )
    return [null, data]
  } catch (err) {
    return [err, null]
  }
}
