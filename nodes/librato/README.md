librato-helium
==============

Description
-----------

Deploy librato-helium as a custom metrics node in your [Helium Fusion](https://www.helium.co) dataflow. Metrics sent to the Librato node will be posted to the [Librato Metrics](https://metrics.librato.com) service.

Install
-------

Run this in the root directory of your Helium Fusion install:

```
npm install librato-helium
```

Setup
-----

1. If you haven't already created a free Librato Metrics account, [do that first](https://metrics.librato.com).
2. In your Librato Metrics account, click the square in the upper right navigation to expose the dropdown menu. Select "account settings."
3. Click the key icon on the left to show your API Access Tokens.
4. Add a new "Record Only" token with a memorable name and save it.
5. In the Helium UI, drag a Librato node from the "output" category of the left menu onto your canvas.
6. Double click the Librato node to edit it. Add your Librato Metrics email address and the token that you created in step 4 above.
7. Wire an output from your data flow into the input of the Librato node.

Detailed Usage
--------------

The Librato node expects to receive a ```msg``` object with this structure:

```
{
  name: '',          // metric name, optional, defaults to 'helium.default.metric.name'
  value: '',         // measurement value, optional but recommended, defaults to 0
  measure_time: '',  // unix timestamp, optional but recommended, defaults to current time
  source: ''         // metric source name, optional, defaults to 'helium-host'
}
```

Each ```msg``` object with these properites will be pushed to the [Librato Metrics](https://metrics.librato.com) service.

Testing
-------

1. Wire up three nodes: inject -> function -> librato.
2. Double click the "function" node and replace the function content with:

        msg = {
          name: 'helium.fn.test.name',
          value: Math.floor(Math.random()*10).toString(),
          measure_time: parseInt(new Date() / 1000),
          source: 'helium.fn.test.source'
        };
        return msg;
3. Click "Ok."
4. Configure the "librato" node as described above in "Setup."
5. Click "Deploy."
6. Click the button on the left of the "inject" node to send a measurement.
7. View your measurements in the [Librato Metrics](https://metrics.librato.com) service.
