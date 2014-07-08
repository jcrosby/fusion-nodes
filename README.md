# Helium Fusion Nodes 

This is the home for Helium Fusion nodes contributed by platform partners and community members. 


### Contributing a Node 

All nodes should be contributed with a [pull request against this repository](https://github.com/pharkmillups/fusion-nodes/pulls).

Your node should contain four files, all in one directory:

1. A JavaScript file that defines what your node does;  
2. An HTML file that handles the help/usage text for the node and it appearance in Fusion; 
3. A `package.json` file that lists your depencies; 
4. Any icons needed for your node; 

For example, if your node is named `Sharkfed`, here's what you would contribute:

* `sharkfed.js`
* `sharkfed.html`
* `package.json` 
* `sharkfed.png`

All of these would be included in the `/sharkfed` directory that would itself live in the `/nodes` directory of this repo. 

### Creating a Node 

* If you're just getting started, check out the [Node-RED docs on creating nodes](http://nodered.org/docs/creating-nodes/node-js.html).
* In addition to the examples in this repository, there are also [some example nodes](https://github.com/node-red/node-red-nodes) you can take look at in Node-RED proper for inspiration. 

### Support 

If you're having trouble with any part of the node creation process, please head over the [Helium Forum](https://forum.helium.co). Tag your new thread as `Fusion` and we'll take a look at your question. 




