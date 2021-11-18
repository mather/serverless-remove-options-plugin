# Serverless Remove OPTIONS Plugin

[![npm version](https://badge.fury.io/js/serverless-remove-options-plugin.svg)](https://badge.fury.io/js/serverless-remove-options-plugin)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A Serverless Framework plugin for remove OPTIONS method from API Gateway resources.

## Use Case

Serverless Framework will add OPTIONS method in API Gateway resources automatically for [CORS (preflight request)](https://developer.mozilla.org/en-US/docs/Glossary/Preflight_request), but it increases number of resources in CloudFormation stack.
 
When your API doesn't assume CORS, you can remove OPTIONS method and reduce number of resources with this plugin.

----

Serverless Framework は CORS への対応のために API Gateway のリソースに OPTIONS メソッドを自動的に追加しますが、これによって生成されるCloudFormationスタックのリソース数も増えることになります。

もしAPIがCORSへの対策を必要としない場合は、プラグインを使うことでOPTIONSメソッドの削除を行いリソース数を削減できます。

## Usage

Add dev dependency to `package.json`:

```
$ npm install --save-dev serverless-remove-options-plugin
```

or

```
$ yarn add --dev serverless-remove-options-plugin
```

Then, add plugin to your `serverless.yml`:

```yaml
plugins:
  - serverless-remove-options-plugin
```

