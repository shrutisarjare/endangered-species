import requests
from services.conservation_service import get_conservation_info


def get_species_info(name):

    conservation = get_conservation_info(name)

    try:

        # Try direct page first
        page = name.capitalize()
        url = f"https://en.wikipedia.org/api/rest_v1/page/summary/{page}"

        response = requests.get(url)

        if response.status_code == 200:
            data = response.json()

            return {
                "name": data.get("title"),
                "description": data.get("extract"),
                "image": data.get("thumbnail", {}).get("source"),
                **conservation
            }

        # If direct page fails → search Wikipedia
        search_url = "https://en.wikipedia.org/w/api.php"

        params = {
            "action": "query",
            "list": "search",
            "srsearch": name,
            "format": "json"
        }

        search_response = requests.get(search_url, params=params).json()

        results = search_response.get("query", {}).get("search", [])

        if not results:
            return {
                "name": name,
                "description": None,
                "image": None,
                **conservation
            }

        page_title = results[0]["title"]

        summary_url = f"https://en.wikipedia.org/api/rest_v1/page/summary/{page_title}"

        summary_response = requests.get(summary_url).json()

        return {
            "name": page_title,
            "description": summary_response.get("extract"),
            "image": summary_response.get("thumbnail", {}).get("source"),
            **conservation
        }

    except Exception:

        return {
            "name": name,
            "description": None,
            "image": None,
            **conservation
        }