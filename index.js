'use strict';

class ServerlessRemoveOptionsPlugin {
  constructor(serverless, options) {
    this.serverless = serverless;
    this.options = options;
    this.provider = 'aws';

    this.hooks = {
      'after:deploy:compileEvents': this.removeOptionsMethod.bind(this),
    };
  }

  removeOptionsMethod() {
    let resources = this.serverless.service.provider.compiledCloudFormationTemplate.Resources
    for (let key in resources) {
      let resource = resources[key];
      if (resource.Type === 'AWS::ApiGateway::Method' ) {
        if (resource.Properties.HttpMethod === 'OPTIONS') {
          this.serverless.cli.log(`[serverless-remove-options-plugin] Removing resource OPTIONS method from ${resource.Properties.ResourceId.Ref} resource.`)
          delete resources[key];
        }
      }
    }
  }

}

module.exports = ServerlessRemoveOptionsPlugin;
