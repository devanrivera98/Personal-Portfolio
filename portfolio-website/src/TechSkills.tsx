import EachSkill from "./components/EachSkill"

export default function TechSkills() {
  return (
    <>
    <div className="bg-lightBlue py-5">
        <div id="skills" className="flex justify-center text-3xl">
          <h2 className="underline underline-offset-4">Technical Skills</h2>
        </div>
        <div className="w-4/5 sm:w-2/3 flex flex-wrap justify-center mx-auto pt-5">
          <EachSkill image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" doc="https://react.dev/" title="React" />
          <EachSkill image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" title="JavaScript" doc="https://developer.mozilla.org/en-US/docs/Web/JavaScript" />
          <EachSkill image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" title="TypeScript" doc="https://www.typescriptlang.org/docs/"/>
          <EachSkill image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" title="Node.js" doc="https://nodejs.org/docs/latest/api/"/>
          <EachSkill image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" title="Express" doc="https://expressjs.com/" />
          <EachSkill image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" title="PostgreSQL" doc="https://www.postgresql.org/docs/" />
          <EachSkill image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" title="Tailwind" doc="https://tailwindcss.com/docs/installation"/>
          <EachSkill image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" title="Bootstrap" doc="https://getbootstrap.com/docs/4.1/getting-started/introduction/"/>
          <EachSkill image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg" title="CSS3" doc="https://developer.mozilla.org/en-US/docs/Web/CSS"/>
          <EachSkill image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg" title="HTML5" doc="https://developer.mozilla.org/en-US/docs/Glossary/HTML5"/>
          <EachSkill image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg" title="Jest" doc="https://jestjs.io/docs/getting-started"/>
          <EachSkill image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" title="Vite" doc="https://vitejs.dev/guide/" />
          <EachSkill image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" title="Git" doc="https://git-scm.com/doc"/>
          <EachSkill image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" title="Github" doc="https://docs.github.com/en"/>
          <EachSkill image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" title="VS Code" doc="https://code.visualstudio.com/docs"/>
        </div>
    </div>
    </>
  )
}
