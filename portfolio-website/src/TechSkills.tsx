import EachSkill from "./components/EachSkill"

export default function TechSkills() {
  return (
    <>
    <div className="bg-lightBlue">
        <div className="flex justify-center text-3xl">
          <h2>Technical Skills</h2>
        </div>
        <div className="w-2/3 flex flex-wrap justify-center mx-auto pt-5">
          <EachSkill image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" title="React" />
          <EachSkill image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" title="JavaScript" />
          <EachSkill image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" title="TypeScript" />
          <EachSkill image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" title="Node.js" />
          <EachSkill image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" title="Express" />
          <EachSkill image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" title="PostgreSQL" />
          <EachSkill image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" title="Tailwind" />
          <EachSkill image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" title="Bootstrap" />
          <EachSkill image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg" title="CSS3" />
          <EachSkill image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg" title="HTML5" />
          <EachSkill image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg" title="Jest" />
          <EachSkill image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" title="Vite" />
          <EachSkill image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" title="Git" />
          <EachSkill image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" title="Github" />
          <EachSkill image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" title="VS Code" />
        </div>
    </div>
    </>
  )
}
