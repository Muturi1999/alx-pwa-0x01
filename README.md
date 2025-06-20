# alx-project-0x14
This is API documentation task

## API Overview
**MoviesDatabase** is a RESTful service on RapidAPI that exposes rich, up‑to‑date metadata for more than **9 million** titles (movies, series, episodes) and **11 million** people (actors, directors, writers, crew).  
Key capabilities:

* Search by keyword, title text, or AKA names.  
* Fetch complete title objects with trailers, images, ratings, awards, budget/revenue, full cast & crew, and more.  
* Navigate series → seasons → episodes, or retrieve upcoming releases.  
* Query predefined “top” lists (popular, top‑rated, box‑office, etc.).  
* Pull actor biographies, filmographies, and images.  
* Utility endpoints return valid genres, title types, and list names for client‑side filtering. :contentReference[oaicite:0]{index=0}

---

## Version
**v1** (current) :contentReference[oaicite:1]{index=1}

---

## Available Endpoints

| Group                | Method & Path                                   | Description (high‑level) |
|----------------------|-------------------------------------------------|---------------------------|
| **Titles**           | `GET /titles`                                   | List titles with optional filters (`year`, `genre`, `limit`, `sort`, etc.). |
|                      | `GET /titles/{id}`                              | Full details for one title (IMDb ID). |
|                      | `GET /titles/x/titles-by-ids`                   | Batch‑fetch titles by an array of IDs (`idsList[]`). |
|                      | `GET /titles/{id}/ratings`                      | Ratings object (average + vote count). |
|                      | `GET /titles/x/upcoming`                        | Upcoming theatrical / streaming releases. |
| **Series & Episodes**| `GET /titles/series/{seriesId}`                 | All episodes (IDs + season/episode numbers). |
|                      | `GET /titles/seasons/{seriesId}`                | How many seasons a series has. |
|                      | `GET /titles/series/{seriesId}/{season}`        | Episodes in one season. |
|                      | `GET /titles/episode/{id}`                      | Detailed data for a single episode. |
| **Search**           | `GET /titles/search/keyword/{keyword}`          | Free‑text keyword search. |
|                      | `GET /titles/search/title/{title}`              | Search by title text (`exact=true` for exact match). |
|                      | `GET /titles/search/akas/{aka}`                 | Search by alternate title (case‑sensitive). |
| **Actors**           | `GET /actors`                                   | Paged list of actors (`limit`, `page`). |
|                      | `GET /actors/{id}`                              | Full actor profile (IMDb ID). |
| **Utils**            | `GET /title/utils/titleType`                    | All valid title types. |
|                      | `GET /title/utils/genres`                       | All supported genres. |
|                      | `GET /title/utils/lists`                        | Predefined “top” lists for the `list=` parameter. |

*(All endpoints accept the `info` query parameter to down‑select fields — e.g. `mini_info`, `image`, `extendedCast`, etc.)* :contentReference[oaicite:2]{index=2}

---

## Request and Response Format

### Example request (cURL)

```bash
curl --request GET \
  --url https://moviesdatabase.p.rapidapi.com/titles/tt0133093 \
  --header 'X-RapidAPI-Key: <YOUR_API_KEY>' \
  --header 'X-RapidAPI-Host: moviesdatabase.p.rapidapi.com'
