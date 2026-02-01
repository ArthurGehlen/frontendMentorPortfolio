export function format_project(repo) {
  return {
    id: repo.id,
    title: format_title(repo.name),
    thumbnail: get_thumbnail(repo.name),
    stack: extract_stack(repo.topics),
    level: extract_level(repo.topics),
    stars: repo.stargazers_count,
    liveUrl: repo.homepage || null,
    repoUrl: repo.html_url,
  };
}

function format_title(name) {
  return name
    .replace(/_/g, " ")
    .replace(/-/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());
}

function camel_to_snake(str) {
  return str.replace(/([a-z0-9])([A-Z])/g, "$1_$2").toLowerCase();
}

function get_thumbnail(repoName) {
  return `/projects/${camel_to_snake(repoName)}.png`;
}

function extract_level(topics = []) {
  if (topics.includes("advanced-challenge")) return "Advanced";
  if (topics.includes("intermediate-challenge")) return "Intermediate";
  if (topics.includes("junior-challenge")) return "Junior";
  return "Newbie";
}

function extract_stack(topics = []) {
  const allowed = ["html", "css", "scss", "javascript", "react", "api", "json"];

  return topics.filter((t) => allowed.includes(t));
}
