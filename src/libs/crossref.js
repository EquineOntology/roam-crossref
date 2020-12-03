import { crossrefCache } from "../libs/crossrefCache";
import { extractReferenceType, extractTitle } from "./citationUtils";

export async function fetchDoi(doi) {
  const res = await fetch(`https://api.crossref.org/works/${doi}?mailto=christian.fratta@gmail.com`);
  const jsonRes = await res.json();
  const data = jsonRes.message;
  const title = extractTitle(data, extractReferenceType(data));
  crossrefCache.add(doi, data, title);
  return data;
}
