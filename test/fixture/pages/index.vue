<template>
<div>
  <h1>Nuxt-Config Test Page</h1>

  <p>For each of the values below:</p>
  <ul>
    <li>Ensure the value shown here is correct</li>
    <li>Ensure the server-rendered value in the HTML here is correct</li>
  </ul>

  <h2>Shared Config Value</h2>
  <p>
    This value is set in the global config and then shared with the client using <code>defer()</code>. Both values
    should be the same.
  </p>
  <p><strong>Expected Client</strong>: simple config value</p>
  <p><strong>Expected Server</strong>: simple config value</p>
  <p><strong>Rendered Value</strong>: {{ $config.simpleValue }}</p>

  <hr>

  <h2>Overridden on Client</h2>
  <p>
    This value is different on server and client. For example, this could be useful for specifying a public URL for an
    API server in the browser and a private, internal URL for the server.
  </p>
  <p><strong>Expected Client</strong>: isomorphic CLIENT</p>
  <p><strong>Expected Server</strong>: isomorphic SERVER</p>
  <p><strong>Rendered Value</strong>: {{ $config.isoValue }}</p>

  <hr>

  <h2>Shared Environment Override</h2>
  <p>
    This value is overridden in the run-time environment and shared between client and server. Both values should be
    the same
  </p>
  <p><strong>Expected Client</strong>: environment OVERRIDE</p>
  <p><strong>Expected Server</strong>: environment OVERRIDE</p>
  <p><strong>Rendered Value</strong>: {{ $config.sharedEnvValue }}</p>

  <hr>

  <h2>Unique Environment Override</h2>
  <p>
    This value is overridden in the run-time environment using different variables for client and server.
  </p>
  <p><strong>Expected Client</strong>: env CLIENT</p>
  <p><strong>Expected Server</strong>: env SERVER</p>
  <p><strong>Rendered Value</strong>: {{ $config.envValue }}</p>

  <hr>

  <h2>Global Access</h2>
  <p>
    This is the same as "Overridden on Client" except that the value is read using the global config access instead of
    the component $config plugin.
  </p>
  <p><strong>Expected Client</strong>: isomorphic CLIENT</p>
  <p><strong>Expected Server</strong>: isomorphic SERVER</p>
  <p><strong>Rendered Value</strong>: {{ globalIsoValue }}</p>

  <hr>

  <p>
    The END.
  </p>
</div>
</template>

<script>
import { config } from 'nuxt-config'

export default {
  name: 'nuxt-config-test',
  computed: {
    globalIsoValue() {
      return config.isoValue
    }
  }
}
</script>

<style>
  pre {
    display: inline;
  }
</style>
