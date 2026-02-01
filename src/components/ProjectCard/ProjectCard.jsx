// Utils
import "./ProjectCard.css";

// Components
import Badge from "../Badge/Badge";

const ProjectCard = ({ project_obj }) => {
  const is_popular = project_obj.stars >= 30;

  const split_by_uppercase = (text) => {
    return text.replace(/([a-z])([A-Z])/g, "$1 $2");
  };

  return (
    <article className="project_card">
      <div className="project_thumbnail">
        <img src={project_obj.thumbnail} alt={`Projeto ${project_obj.title}`} />
      </div>

      <div className="project_content">
        <div className="project_content_header">
          <h3>{split_by_uppercase(project_obj.title)}</h3>

          <div className="project_badges">
            <Badge
              label={project_obj.level}
              variant={project_obj.level.toLowerCase()}
            />
            {project_obj.stack.map((tag) => (
              <Badge
                key={tag}
                label={tag.toUpperCase()}
                variant={tag.toLowerCase()}
              />
            ))}

            {is_popular && <Badge label="Popular" variant="popular" />}
          </div>
        </div>

        <div className="project_actions">
          {project_obj.liveUrl && (
            <a href={project_obj.liveUrl} target="_blank" className="live_btn">
              Live
            </a>
          )}

          <a href={project_obj.repoUrl} target="_blank" className="repo_btn">
            Repo
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
