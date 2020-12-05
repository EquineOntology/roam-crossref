import { crossrefCache } from "../libs/crossrefCache";
import { extractReferenceType, extractTitle } from "./citationUtils";

export async function fetchDoi(doi) {
  let res;
  try {
    res = await fetch(`https://api.crossref.org/works/${doi}?mailto=christian.fratta@gmail.com`);
    res = await res.json();
  } catch (e) {
    console.error(e);
    return { DOI: doi };
  }
  const data = res.message;
  const title = extractTitle(data, extractReferenceType(data));
  crossrefCache.add(doi, data, title);
  return data;
}
