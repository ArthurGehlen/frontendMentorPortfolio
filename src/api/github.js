export async function fetch_frontendmentor_projects() {
  const res = await fetch(
    "https://api.github.com/search/repositories?q=user:ArthurGehlen+topic:frontend-mentor&sort=stars&order=desc",
  );

  const data = await res.json();
  return data.items || [];
}
