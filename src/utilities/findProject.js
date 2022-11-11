import { projects } from "../data/project";
import hyphenateWords from "./hyphenateWords";

const findProject = str => {
  const project = projects.filter (({title}) => {
    return hyphenateWords(title) === str
  })
  return project[0]
}

export default findProject