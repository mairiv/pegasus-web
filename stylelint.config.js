module.exports = {
  extends: 'stylelint-config-standard',
  indentation: [
    2,
    {
      except: ['block'],
      message:
        'Please use 2 spaces for indentation. Tabs make The Architect grumpy.',
      severity: 'warning'
    }
  ]
}
