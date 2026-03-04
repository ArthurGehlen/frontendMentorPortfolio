const CACHE_DURATION = 5 * 60 * 1000; // 5 minutos

/*
 * Busca dados do cache do sessionStorage
 * Retorna null se não houver cache ou se ele estiver expirado garantindo que dados desatualizados nunca sejam utilizados
 */
function get_cache(key) {
  const cached = sessionStorage.getItem(key);
  if (!cached) return null;

  const { data, timestamp } = JSON.parse(cached);
  const isExpired = Date.now() - timestamp > CACHE_DURATION;

  return isExpired ? null : data;
}

/*
 * Salva dados no sessionStorage junto com um timestamp
 * O timestamp é usado posteriormente para verificar
 * se o cache ainda está dentro do período de validade
 */
function set_cache(key, data) {
  sessionStorage.setItem(key, JSON.stringify({ data, timestamp: Date.now() }));
}

async function github_fetch(url) {
  const res = await fetch(url);

  if (res.status === 403)
    throw new Error(
      "Limite de requisições do GitHub atingido. Tente novamente em alguns minutos.",
    );
  if (!res.ok) throw new Error(`Erro na requisição: ${res.status}`);

  return res.json();
}

export async function get_user_profile_picture() {
  const CACHE_KEY = "github_user_profile";
  const cached = get_cache(CACHE_KEY);
  if (cached) return cached;

  const data = await github_fetch("https://api.github.com/users/ArthurGehlen");
  set_cache(CACHE_KEY, data.avatar_url);

  return data.avatar_url || null;
}

export async function fetch_frontendmentor_projects() {
  const CACHE_KEY = "github_frontendmentor_projects";
  const cached = get_cache(CACHE_KEY);
  if (cached) return cached;

  const data = await github_fetch(
    "https://api.github.com/search/repositories?q=user:ArthurGehlen+topic:frontend-mentor&sort=stars&order=desc",
  );
  set_cache(CACHE_KEY, data.items);

  return data.items || [];
}
