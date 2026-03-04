// Utils
import { useProjects } from "../hooks/useProjects";
import { format_project } from "../utils/formatProject";
import "./Home.css";

// Components
import ProjectCard from "../components/ProjectCard/ProjectCard";
import Loading from "../components/Loading/Loading";
import Header from "../components/Header/Header";

const Home = () => {
  const { projects, loading, error } = useProjects();

  /* LEMBRAR DE NÃO DEIXAR CONSOLE.LOG() NO CÓDIGO :) */

  if (loading) return <Loading />;
  if (error) return <p className="error_message">{error}</p>;

  return (
    <div className="home_page">
      <Header />

      <p className="page_description">
        Todos os meus projetos do Frontend Mentor <br />
        <i>Em um só lugar :)</i>
      </p>

      <main className="projects_grid">
        {projects.map((repo) => {
          const project = format_project(repo);
          return <ProjectCard key={project.id} project_obj={project} />;
        })}
      </main>
    </div>
  );
};

export default Home;
