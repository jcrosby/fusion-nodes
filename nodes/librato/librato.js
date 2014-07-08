var request = require('request');

module.exports = function(RED) {
  function Librato(config) {
    RED.nodes.createNode(this, config);

    this.metric = config.metric || 'helium.default.metric.name';
    this.source = config.source || 'helium-host';
    this.email = config.email;
    this.key = config.key;

    var node = this;

    this.on("input", function(msg) {
      var requestOptions = {
        method: 'POST',
        uri: 'https://metrics-api.librato.com/v1/metrics',
        json: {
          gauges:[{
            name: msg.name || node.metric,
            value: msg.value || 0,
            measure_time: msg.measure_time || parseInt(new Date() / 1000),
            source: msg.source || node.source
          }]
        },
        auth: {
          user: node.email,
          pass: node.key
        }
      };

      request(requestOptions, function(error, response, body) {
        if (response.statusCode == 401) {
          node.error('Incorrect Librato credentials. Check your Librato node configuration and try again.');
        }

        if (error) {
          node.error('A client error occurred ' + error);
        }
      });

      node.send(msg);
    });
  }

  RED.nodes.registerType("librato", Librato);
};

