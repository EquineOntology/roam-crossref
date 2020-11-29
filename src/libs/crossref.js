export async function fetchDoi(doi) {
  const res = await fetch(`https://api.crossref.org/works/${doi}?mailto=christian.fratta@gmail.com`);
  const jsonRes = await res.json();
  return jsonRes.message;
}
