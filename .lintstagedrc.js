import { relative } from "path"

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => relative(process.cwd(), f))
    .join(" --file ")}`

const prettierCommand = "prettier --write"

const lintStagedConfig = {
  "*.{js,jsx,ts,tsx}": [prettierCommand, buildEslintCommand],
  "*.{json,css,md}": [prettierCommand],
}
export default lintStagedConfig
