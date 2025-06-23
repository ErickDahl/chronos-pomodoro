export default (plop) => {
  // create your generators here
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/index.tsx',
        templateFile: 'templates/component.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/styles.module.css',
        templateFile: 'templates/styles.hbs'
      },
    ]
  })
}
