// Hooks
import { useEffect, useState } from "react";

// Utils
import { fetch_frontendmentor_projects } from "../api/github";

export function useProjects() {
  /* LEMBRAR DE NÃO DEIXAR CONSOLE.LOG() NO CÓDIGO :) */

  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function load() {
      try {
        const data = await fetch_frontendmentor_projects();
        setProjects(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  return { projects, loading, error };
}
