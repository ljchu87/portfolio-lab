import { Link } from "react-router-dom"
import hyphenateWords from "../utilities/hyphenateWords"

const ProjectPreview = ({title, image}) => {
  const path = hyphenateWords(title)
  return (
    <Link to={path} >
      <div>
          <img src={image} alt={title} />
          <h3>{title}</h3>
      </div>
    </Link>
  )
}

export default ProjectPreview