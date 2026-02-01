// Hooks
import { useEffect, useState } from "react";

// Utils
import { fetch_frontendmentor_projects } from "../api/github";

export function useProjects() {
  /* LEMBRAR DE NÃO DEIXAR CONSOLE.LOG() NO CÓDIGO :) */

  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const data = await fetch_frontendmentor_projects();
      setProjects(data);
      setLoading(false);
    }

    load();
  }, []);

  return { projects, loading };
}
