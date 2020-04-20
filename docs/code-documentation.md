## Classes

<dl>
<dt><a href="#DanDirectedGraph">DanDirectedGraph</a></dt>
<dd></dd>
<dt><a href="#DanDirectedGraphBreadthFirstIterator">DanDirectedGraphBreadthFirstIterator</a></dt>
<dd><p>The class DanDirectedGraphBreadthFirstIterator implements GraphIterator interface</p></dd>
<dt><a href="#DanDirectedGraphDepthFirstIterator">DanDirectedGraphDepthFirstIterator</a></dt>
<dd><p>The class DanDirectedGraphDepthFirstIterator implements GraphIterator interface</p></dd>
<dt><a href="#DanUndirectedGraph">DanUndirectedGraph</a></dt>
<dd><p>The DanUndirectedGraph class handles undirected graphs</p></dd>
<dt><a href="#DanStack">DanStack</a></dt>
<dd><p>DanStack is a simple class implementing Stackable interface</p></dd>
</dl>

## Members

<dl>
<dt><a href="#ArcType">ArcType</a></dt>
<dd><p>The directed arc type: incoming or outgoing</p></dd>
<dt><a href="#ArcType">ArcType</a></dt>
<dd><p>The class DanDirectedGraph handles directed graphs</p></dd>
</dl>

## Functions

<dl>
<dt><a href="#randomIntFromInterval">randomIntFromInterval(min, max)</a> ⇒ <code>number</code></dt>
<dd><p>Get a random integer number between min and max (included)</p></dd>
</dl>

<a name="DanDirectedGraph"></a>

## DanDirectedGraph
**Kind**: global class  

* [DanDirectedGraph](#DanDirectedGraph)
    * [new DanDirectedGraph()](#new_DanDirectedGraph_new)
    * _instance_
        * [._getCopyOfInnerGraph()](#DanDirectedGraph+_getCopyOfInnerGraph) ⇒ <code>Map.&lt;I, DanNodeAndDirectedArcs.&lt;I, D&gt;&gt;</code>
        * [.getNodeAndDirectedArcsFromNodeId(idNode)](#DanDirectedGraph+getNodeAndDirectedArcsFromNodeId) ⇒ <code>DanNodeAndDirectedArcs.&lt;I, D&gt;</code> \| <code>undefined</code>
        * [.addNode(node)](#DanDirectedGraph+addNode) ⇒ <code>boolean</code>
        * [.addArcToNodeId(idNode, arcToAdd, arcType)](#DanDirectedGraph+addArcToNodeId) ⇒ <code>boolean</code>
        * [.addArcToNode(node, arcToAdd, arcType)](#DanDirectedGraph+addArcToNode) ⇒ <code>boolean</code>
        * [.removeNode(idNode)](#DanDirectedGraph+removeNode) ⇒ <code>boolean</code>
        * [.isNodeALeaf(idNode)](#DanDirectedGraph+isNodeALeaf) ⇒ <code>boolean</code>
        * [._getALeaf()](#DanDirectedGraph+_getALeaf) ⇒ <code>DanNode.&lt;I, D&gt;</code> \| <code>undefined</code>
        * [.toString(showDetails)](#DanDirectedGraph+toString) ⇒ <code>string</code>
        * [.countNodes()](#DanDirectedGraph+countNodes) ⇒ <code>number</code>
        * [.isEmpty()](#DanDirectedGraph+isEmpty) ⇒ <code>boolean</code>
        * [._getOutgoingNodesList(idNode)](#DanDirectedGraph+_getOutgoingNodesList) ⇒ <code>Array.&lt;DanNode&gt;</code>
        * [._isAcyclic()](#DanDirectedGraph+_isAcyclic) ⇒ <code>boolean</code>
        * [.isAcyclic()](#DanDirectedGraph+isAcyclic) ⇒ <code>boolean</code>
        * [._visitNodes(visitedNodes, nextNode)](#DanDirectedGraph+_visitNodes)
        * [.sourceConnectedToAllNodes(idNode)](#DanDirectedGraph+sourceConnectedToAllNodes) ⇒ <code>boolean</code>
        * [.getDepthFirstIterator(startingNodeId)](#DanDirectedGraph+getDepthFirstIterator) ⇒ <code>GraphIterator.&lt;DanNode.&lt;I, D&gt;&gt;</code>
        * [.getBreadthFirstIterator(startingNodeId)](#DanDirectedGraph+getBreadthFirstIterator) ⇒ <code>GraphIterator.&lt;DanNode.&lt;I, D&gt;&gt;</code>
    * _static_
        * [.generateConsecutiveNodeGraph(numOfNodes)](#DanDirectedGraph.generateConsecutiveNodeGraph) ⇒ <code>DanDirectedGraph.&lt;number, undefined&gt;</code>
        * [.generateRandomNodeGraph(numOfNodes)](#DanDirectedGraph.generateRandomNodeGraph) ⇒ <code>DanDirectedGraph.&lt;number, undefined&gt;</code>

<a name="new_DanDirectedGraph_new"></a>

### new DanDirectedGraph()
<p>the public class constructor</p>

<a name="DanDirectedGraph+_getCopyOfInnerGraph"></a>

### danDirectedGraph.\_getCopyOfInnerGraph() ⇒ <code>Map.&lt;I, DanNodeAndDirectedArcs.&lt;I, D&gt;&gt;</code>
<p>Clone the inner graph structure</p>

**Kind**: instance method of [<code>DanDirectedGraph</code>](#DanDirectedGraph)  
**Returns**: <code>Map.&lt;I, DanNodeAndDirectedArcs.&lt;I, D&gt;&gt;</code> - <p>a copy of the inner graph structure</p>  
<a name="DanDirectedGraph+getNodeAndDirectedArcsFromNodeId"></a>

### danDirectedGraph.getNodeAndDirectedArcsFromNodeId(idNode) ⇒ <code>DanNodeAndDirectedArcs.&lt;I, D&gt;</code> \| <code>undefined</code>
<p>Get node and directed arcs structure (as DanNodeAndDirectedArcs) from nodeId</p>

**Kind**: instance method of [<code>DanDirectedGraph</code>](#DanDirectedGraph)  
**Returns**: <code>DanNodeAndDirectedArcs.&lt;I, D&gt;</code> \| <code>undefined</code> - <p>node and directed arcs structure or undefined if nodeId is not present in the graph</p>  

| Param | Type | Description |
| --- | --- | --- |
| idNode | <code>I</code> | <p>the node identifier</p> |

<a name="DanDirectedGraph+addNode"></a>

### danDirectedGraph.addNode(node) ⇒ <code>boolean</code>
<p>Add a node to the graph</p>

**Kind**: instance method of [<code>DanDirectedGraph</code>](#DanDirectedGraph)  
**Returns**: <code>boolean</code> - <p>true if the node was correctly added to the graph; false if the node is already present</p>  

| Param | Type | Description |
| --- | --- | --- |
| node | <code>DanNode.&lt;I, D&gt;</code> | <p>the node to add</p> |

<a name="DanDirectedGraph+addArcToNodeId"></a>

### danDirectedGraph.addArcToNodeId(idNode, arcToAdd, arcType) ⇒ <code>boolean</code>
<p>Add arc to node given a node id</p>

**Kind**: instance method of [<code>DanDirectedGraph</code>](#DanDirectedGraph)  
**Returns**: <code>boolean</code> - <p>true if <em>arcToAdd</em> was correctly added to the icoming/ougoing arcs of idNode; false if the idNode does not exist or if <em>arcToAdd</em> was already present</p>  

| Param | Type | Description |
| --- | --- | --- |
| idNode | <code>I</code> | <p>the id of the node receiving <em>arcToAdd</em></p> |
| arcToAdd | <code>DanArc.&lt;I, D&gt;</code> | <p>the arc being added</p> |
| arcType | [<code>ArcType</code>](#ArcType) | <p><em>arcToAdd</em> will be added among the incoming or outgoing arcs of idNode, based on the value of arcType</p> |

<a name="DanDirectedGraph+addArcToNode"></a>

### danDirectedGraph.addArcToNode(node, arcToAdd, arcType) ⇒ <code>boolean</code>
<p>Add arc to node given a node structure</p>

**Kind**: instance method of [<code>DanDirectedGraph</code>](#DanDirectedGraph)  
**Returns**: <code>boolean</code> - <p>true if <em>arcToAdd</em> was correctly added to the icoming/ougoing arcs of node; false if <em>arcToAdd</em> was already present</p>  

| Param | Type | Description |
| --- | --- | --- |
| node | <code>DanNode.&lt;I, D&gt;</code> | <p>the node receiving <em>arcToAdd</em></p> |
| arcToAdd | <code>DanArc.&lt;I, D&gt;</code> | <p>the arc being added</p> |
| arcType | [<code>ArcType</code>](#ArcType) | <p><em>arcToAdd</em> will be added among the incoming or outgoing arcs of node, based on the value of arcType</p> |

<a name="DanDirectedGraph+removeNode"></a>

### danDirectedGraph.removeNode(idNode) ⇒ <code>boolean</code>
<p>Remove a node given in input from the graph</p>

**Kind**: instance method of [<code>DanDirectedGraph</code>](#DanDirectedGraph)  
**Returns**: <code>boolean</code> - <p>true if the node is correctly removed</p>  

| Param | Type | Description |
| --- | --- | --- |
| idNode | <code>I</code> | <p>the id of the node to remove</p> |

<a name="DanDirectedGraph+isNodeALeaf"></a>

### danDirectedGraph.isNodeALeaf(idNode) ⇒ <code>boolean</code>
<p>Check if node is a leaf</p>

**Kind**: instance method of [<code>DanDirectedGraph</code>](#DanDirectedGraph)  
**Returns**: <code>boolean</code> - <p>true if the node is a leaf (no outgoing arcs)</p>  

| Param | Type | Description |
| --- | --- | --- |
| idNode | <code>I</code> | <p>the id of the node to check</p> |

<a name="DanDirectedGraph+_getALeaf"></a>

### danDirectedGraph.\_getALeaf() ⇒ <code>DanNode.&lt;I, D&gt;</code> \| <code>undefined</code>
<p>Get a leaf in the graph or return undefined.</p>

**Kind**: instance method of [<code>DanDirectedGraph</code>](#DanDirectedGraph)  
**Returns**: <code>DanNode.&lt;I, D&gt;</code> \| <code>undefined</code> - <p>the first leaf found, or undefined if no leaf is found</p>  
<a name="DanDirectedGraph+toString"></a>

### danDirectedGraph.toString(showDetails) ⇒ <code>string</code>
<p>The string representation of the directed graph</p>

**Kind**: instance method of [<code>DanDirectedGraph</code>](#DanDirectedGraph)  
**Returns**: <code>string</code> - <p>the string representation of the directed graph</p>  

| Param | Type | Description |
| --- | --- | --- |
| showDetails | <code>boolean</code> | <p>if this option is true, all the node and arc details will be included in the output string (default: false)</p> |

<a name="DanDirectedGraph+countNodes"></a>

### danDirectedGraph.countNodes() ⇒ <code>number</code>
<p>Public method to retrieve the number of nodes in the graph</p>

**Kind**: instance method of [<code>DanDirectedGraph</code>](#DanDirectedGraph)  
**Returns**: <code>number</code> - <p>the number of nodes in the graph</p>  
<a name="DanDirectedGraph+isEmpty"></a>

### danDirectedGraph.isEmpty() ⇒ <code>boolean</code>
<p>Check if the graph is empty</p>

**Kind**: instance method of [<code>DanDirectedGraph</code>](#DanDirectedGraph)  
**Returns**: <code>boolean</code> - <p>true if the graph does not contain any node</p>  
<a name="DanDirectedGraph+_getOutgoingNodesList"></a>

### danDirectedGraph.\_getOutgoingNodesList(idNode) ⇒ <code>Array.&lt;DanNode&gt;</code>
<p>Get all the outgoing nodes from a node identifier</p>

**Kind**: instance method of [<code>DanDirectedGraph</code>](#DanDirectedGraph)  
**Returns**: <code>Array.&lt;DanNode&gt;</code> - <p>the list of outgoing nodes of idNode as array of DanNode&lt;I, D&gt;</p>  

| Param | Type | Description |
| --- | --- | --- |
| idNode | <code>I</code> | <p>the id of the node to check</p> |

<a name="DanDirectedGraph+_isAcyclic"></a>

### danDirectedGraph.\_isAcyclic() ⇒ <code>boolean</code>
<p>Protected method to check if the graph is acyclic.
Remove leaves iteratively from the graph: stop if the graph gets empty (acyclic graph),
or if there are no more leaves to remove (cyclic graph).</p>

**Kind**: instance method of [<code>DanDirectedGraph</code>](#DanDirectedGraph)  
**Returns**: <code>boolean</code> - <p>true if the graph does not contain cycles, otherwise false</p>  
<a name="DanDirectedGraph+isAcyclic"></a>

### danDirectedGraph.isAcyclic() ⇒ <code>boolean</code>
<p>Public method to check if the graph is acyclic.
First we keep a copy of the current inner graph.
Then we invoke the protected [this._isAcyclic](#DanDirectedGraph&lt;I, D&gt;+_isAcyclic) method to check if the graph is acyclic.
Then we restore the inner state (memento pattern).</p>

**Kind**: instance method of [<code>DanDirectedGraph</code>](#DanDirectedGraph)  
**Returns**: <code>boolean</code> - <p>true if the graph does not contain cycles</p>  
<a name="DanDirectedGraph+_visitNodes"></a>

### danDirectedGraph.\_visitNodes(visitedNodes, nextNode)
<p>Protected method to visit all the neighbours of a node, given in input the node id and a previous set of visitedNodes</p>

**Kind**: instance method of [<code>DanDirectedGraph</code>](#DanDirectedGraph)  

| Param | Type | Description |
| --- | --- | --- |
| visitedNodes | <code>Set.&lt;I&gt;</code> | <p>the nodes already visited</p> |
| nextNode | <code>I</code> | <p>the next node to visit</p> |

<a name="DanDirectedGraph+sourceConnectedToAllNodes"></a>

### danDirectedGraph.sourceConnectedToAllNodes(idNode) ⇒ <code>boolean</code>
<p>Public method to check if all nodes are connected to the source node in input</p>

**Kind**: instance method of [<code>DanDirectedGraph</code>](#DanDirectedGraph)  
**Returns**: <code>boolean</code> - <p>true if source can reach all of the nodes in the graph</p>  

| Param | Type | Description |
| --- | --- | --- |
| idNode | <code>I</code> | <p>source node to be checked</p> |

<a name="DanDirectedGraph+getDepthFirstIterator"></a>

### danDirectedGraph.getDepthFirstIterator(startingNodeId) ⇒ <code>GraphIterator.&lt;DanNode.&lt;I, D&gt;&gt;</code>
<p>Get depth-first iterator</p>

**Kind**: instance method of [<code>DanDirectedGraph</code>](#DanDirectedGraph)  
**Returns**: <code>GraphIterator.&lt;DanNode.&lt;I, D&gt;&gt;</code> - <p>the depth-first iterator</p>  

| Param | Type | Description |
| --- | --- | --- |
| startingNodeId | <code>I</code> | <p>the starting node identifier for the iterator</p> |

<a name="DanDirectedGraph+getBreadthFirstIterator"></a>

### danDirectedGraph.getBreadthFirstIterator(startingNodeId) ⇒ <code>GraphIterator.&lt;DanNode.&lt;I, D&gt;&gt;</code>
<p>Get breadth-first iterator</p>

**Kind**: instance method of [<code>DanDirectedGraph</code>](#DanDirectedGraph)  
**Returns**: <code>GraphIterator.&lt;DanNode.&lt;I, D&gt;&gt;</code> - <p>the breadth-first iterator</p>  

| Param | Type | Description |
| --- | --- | --- |
| startingNodeId | <code>I</code> | <p>the starting node identifier for the iterator</p> |

<a name="DanDirectedGraph.generateConsecutiveNodeGraph"></a>

### DanDirectedGraph.generateConsecutiveNodeGraph(numOfNodes) ⇒ <code>DanDirectedGraph.&lt;number, undefined&gt;</code>
<p>A utility public static method to generate a directed graph with a number of <em>numOfNodes</em> consecutive nodes</p>

**Kind**: static method of [<code>DanDirectedGraph</code>](#DanDirectedGraph)  
**Returns**: <code>DanDirectedGraph.&lt;number, undefined&gt;</code> - <p>a directed graph witn <em>numOfNodes</em> nodes</p>  

| Param | Type | Description |
| --- | --- | --- |
| numOfNodes | <code>number</code> | <p>the number of nodes of the output graph</p> |

<a name="DanDirectedGraph.generateRandomNodeGraph"></a>

### DanDirectedGraph.generateRandomNodeGraph(numOfNodes) ⇒ <code>DanDirectedGraph.&lt;number, undefined&gt;</code>
<p>A utility public static method to generate a directed graph with a number of <em>numOfNodes</em> random nodes</p>

**Kind**: static method of [<code>DanDirectedGraph</code>](#DanDirectedGraph)  
**Returns**: <code>DanDirectedGraph.&lt;number, undefined&gt;</code> - <p>a directed graph witn <em>numOfNodes</em> nodes</p>  

| Param | Type | Description |
| --- | --- | --- |
| numOfNodes | <code>number</code> | <p>the number of nodes of the output graph</p> |

<a name="DanDirectedGraphBreadthFirstIterator"></a>

## DanDirectedGraphBreadthFirstIterator
<p>The class DanDirectedGraphBreadthFirstIterator implements GraphIterator interface</p>

**Kind**: global class  

* [DanDirectedGraphBreadthFirstIterator](#DanDirectedGraphBreadthFirstIterator)
    * [new DanDirectedGraphBreadthFirstIterator(collection, startingNodeId)](#new_DanDirectedGraphBreadthFirstIterator_new)
    * [._getNodeAndDirectedArcsFromNodeId(nodeId)](#DanDirectedGraphBreadthFirstIterator+_getNodeAndDirectedArcsFromNodeId) ⇒ <code>DanNodeAndDirectedArcs.&lt;I, D&gt;</code>
    * [._initFields(startingNodeId)](#DanDirectedGraphBreadthFirstIterator+_initFields)
    * [.current()](#DanDirectedGraphBreadthFirstIterator+current) ⇒ <code>DanNode.&lt;I, D&gt;</code> \| <code>undefined</code>
    * [.next()](#DanDirectedGraphBreadthFirstIterator+next) ⇒ <code>DanNode.&lt;I, D&gt;</code> \| <code>undefined</code>
    * [._addNextNodeOutgoingsToNextLevelQueueIfNotAlreadyVisitedOrQueued()](#DanDirectedGraphBreadthFirstIterator+_addNextNodeOutgoingsToNextLevelQueueIfNotAlreadyVisitedOrQueued) ⇒ <code>boolean</code>
    * [._advance()](#DanDirectedGraphBreadthFirstIterator+_advance)
    * [.hasNext()](#DanDirectedGraphBreadthFirstIterator+hasNext) ⇒ <code>boolean</code>
    * [.rewind()](#DanDirectedGraphBreadthFirstIterator+rewind)

<a name="new_DanDirectedGraphBreadthFirstIterator_new"></a>

### new DanDirectedGraphBreadthFirstIterator(collection, startingNodeId)
<p>The public class constructor</p>

**Throws**:

- <code>Error</code> <p>exception if startingNodeId was not found in graph</p>


| Param | Type | Description |
| --- | --- | --- |
| collection | <code>DanDirectedGraph.&lt;I, D&gt;</code> | <p>the directed graph</p> |
| startingNodeId | <code>I</code> | <p>the starting node identifier</p> |

<a name="DanDirectedGraphBreadthFirstIterator+_getNodeAndDirectedArcsFromNodeId"></a>

### danDirectedGraphBreadthFirstIterator.\_getNodeAndDirectedArcsFromNodeId(nodeId) ⇒ <code>DanNodeAndDirectedArcs.&lt;I, D&gt;</code>
<p>Retrieve node and directed arcs structure from node identifier</p>

**Kind**: instance method of [<code>DanDirectedGraphBreadthFirstIterator</code>](#DanDirectedGraphBreadthFirstIterator)  
**Returns**: <code>DanNodeAndDirectedArcs.&lt;I, D&gt;</code> - <p>the node and directed arcs structure DanNodeAndDirectedArcs</p>  
**Throws**:

- <code>Error</code> <p>exception if nodeId was not found in graph</p>


| Param | Type | Description |
| --- | --- | --- |
| nodeId | <code>I</code> | <p>the node identifier</p> |

<a name="DanDirectedGraphBreadthFirstIterator+_initFields"></a>

### danDirectedGraphBreadthFirstIterator.\_initFields(startingNodeId)
<p>Init the class fields with the starting node identifier passed in input</p>

**Kind**: instance method of [<code>DanDirectedGraphBreadthFirstIterator</code>](#DanDirectedGraphBreadthFirstIterator)  
**Throws**:

- <code>Error</code> <p>exception if startingNodeId was not found in graph</p>


| Param | Type | Description |
| --- | --- | --- |
| startingNodeId | <code>I</code> | <p>the starting node identifier</p> |

<a name="DanDirectedGraphBreadthFirstIterator+current"></a>

### danDirectedGraphBreadthFirstIterator.current() ⇒ <code>DanNode.&lt;I, D&gt;</code> \| <code>undefined</code>
<p>Get the current node, or return undefined if iterator was not yet started</p>

**Kind**: instance method of [<code>DanDirectedGraphBreadthFirstIterator</code>](#DanDirectedGraphBreadthFirstIterator)  
**Throws**:

- <code>Error</code> <p>exception if this._currentNodeId was not found in graph</p>

<a name="DanDirectedGraphBreadthFirstIterator+next"></a>

### danDirectedGraphBreadthFirstIterator.next() ⇒ <code>DanNode.&lt;I, D&gt;</code> \| <code>undefined</code>
<p>Get the next node, or return undefined if the iterator's end was reached</p>

**Kind**: instance method of [<code>DanDirectedGraphBreadthFirstIterator</code>](#DanDirectedGraphBreadthFirstIterator)  
**Throws**:

- <code>Error</code> <p>exception if this._nextNodeId was not found in graph</p>

<a name="DanDirectedGraphBreadthFirstIterator+_addNextNodeOutgoingsToNextLevelQueueIfNotAlreadyVisitedOrQueued"></a>

### danDirectedGraphBreadthFirstIterator.\_addNextNodeOutgoingsToNextLevelQueueIfNotAlreadyVisitedOrQueued() ⇒ <code>boolean</code>
<p>Add the outgoing nodes of this._nextNodeId to the next-level-queue, if the node was not already visited, and if it's not already present inside the queue</p>

**Kind**: instance method of [<code>DanDirectedGraphBreadthFirstIterator</code>](#DanDirectedGraphBreadthFirstIterator)  
**Returns**: <code>boolean</code> - <p>true if this._nextNodeId is not null, otherwise false</p>  
**Throws**:

- <code>Error</code> <p>exception if this._nextNodeId was not found in graph</p>

<a name="DanDirectedGraphBreadthFirstIterator+_advance"></a>

### danDirectedGraphBreadthFirstIterator.\_advance()
<p>Advance to the next node in a breadth first fashion</p>

**Kind**: instance method of [<code>DanDirectedGraphBreadthFirstIterator</code>](#DanDirectedGraphBreadthFirstIterator)  
<a name="DanDirectedGraphBreadthFirstIterator+hasNext"></a>

### danDirectedGraphBreadthFirstIterator.hasNext() ⇒ <code>boolean</code>
<p>Check if the iterator can step to a next node</p>

**Kind**: instance method of [<code>DanDirectedGraphBreadthFirstIterator</code>](#DanDirectedGraphBreadthFirstIterator)  
**Returns**: <code>boolean</code> - <p>true if the iterator can step to a next node, false if there are no more nodes left to visit in the iterator</p>  
<a name="DanDirectedGraphBreadthFirstIterator+rewind"></a>

### danDirectedGraphBreadthFirstIterator.rewind()
<p>Restart the iterator</p>

**Kind**: instance method of [<code>DanDirectedGraphBreadthFirstIterator</code>](#DanDirectedGraphBreadthFirstIterator)  
<a name="DanDirectedGraphDepthFirstIterator"></a>

## DanDirectedGraphDepthFirstIterator
<p>The class DanDirectedGraphDepthFirstIterator implements GraphIterator interface</p>

**Kind**: global class  

* [DanDirectedGraphDepthFirstIterator](#DanDirectedGraphDepthFirstIterator)
    * [new DanDirectedGraphDepthFirstIterator(collection, startingNodeId)](#new_DanDirectedGraphDepthFirstIterator_new)
    * [._getNodeAndDirectedArcsFromNodeId(nodeId)](#DanDirectedGraphDepthFirstIterator+_getNodeAndDirectedArcsFromNodeId) ⇒ <code>DanNodeAndDirectedArcs.&lt;I, D&gt;</code>
    * [._initFields(startingNodeId)](#DanDirectedGraphDepthFirstIterator+_initFields)
    * [.current()](#DanDirectedGraphDepthFirstIterator+current) ⇒ <code>DanNode.&lt;I, D&gt;</code> \| <code>undefined</code>
    * [.next()](#DanDirectedGraphDepthFirstIterator+next) ⇒ <code>DanNode.&lt;I, D&gt;</code> \| <code>undefined</code>
    * [._advance()](#DanDirectedGraphDepthFirstIterator+_advance)
    * [.hasNext()](#DanDirectedGraphDepthFirstIterator+hasNext) ⇒ <code>boolean</code>
    * [.rewind()](#DanDirectedGraphDepthFirstIterator+rewind)

<a name="new_DanDirectedGraphDepthFirstIterator_new"></a>

### new DanDirectedGraphDepthFirstIterator(collection, startingNodeId)
<p>The public class constructor</p>

**Throws**:

- <code>Error</code> <p>exception if startingNodeId was not found in graph</p>


| Param | Type | Description |
| --- | --- | --- |
| collection | <code>DanDirectedGraph.&lt;I, D&gt;</code> | <p>the directed graph</p> |
| startingNodeId | <code>I</code> | <p>the starting node identifier</p> |

<a name="DanDirectedGraphDepthFirstIterator+_getNodeAndDirectedArcsFromNodeId"></a>

### danDirectedGraphDepthFirstIterator.\_getNodeAndDirectedArcsFromNodeId(nodeId) ⇒ <code>DanNodeAndDirectedArcs.&lt;I, D&gt;</code>
<p>Retrieve node and directed arcs structure from node identifier</p>

**Kind**: instance method of [<code>DanDirectedGraphDepthFirstIterator</code>](#DanDirectedGraphDepthFirstIterator)  
**Returns**: <code>DanNodeAndDirectedArcs.&lt;I, D&gt;</code> - <p>the node and directed arcs structure DanNodeAndDirectedArcs</p>  
**Throws**:

- <code>Error</code> <p>exception if nodeId was not found in graph</p>


| Param | Type | Description |
| --- | --- | --- |
| nodeId | <code>I</code> | <p>the node identifier</p> |

<a name="DanDirectedGraphDepthFirstIterator+_initFields"></a>

### danDirectedGraphDepthFirstIterator.\_initFields(startingNodeId)
<p>Init the class fields with the starting node identifier passed in input</p>

**Kind**: instance method of [<code>DanDirectedGraphDepthFirstIterator</code>](#DanDirectedGraphDepthFirstIterator)  
**Throws**:

- <code>Error</code> <p>exception if startingNodeId was not found in graph</p>


| Param | Type | Description |
| --- | --- | --- |
| startingNodeId | <code>I</code> | <p>the starting node identifier</p> |

<a name="DanDirectedGraphDepthFirstIterator+current"></a>

### danDirectedGraphDepthFirstIterator.current() ⇒ <code>DanNode.&lt;I, D&gt;</code> \| <code>undefined</code>
<p>Get the current node, or return undefined if iterator was not yet started</p>

**Kind**: instance method of [<code>DanDirectedGraphDepthFirstIterator</code>](#DanDirectedGraphDepthFirstIterator)  
**Throws**:

- <code>Error</code> <p>exception if this._currentNodeId was not found in graph</p>

<a name="DanDirectedGraphDepthFirstIterator+next"></a>

### danDirectedGraphDepthFirstIterator.next() ⇒ <code>DanNode.&lt;I, D&gt;</code> \| <code>undefined</code>
<p>Get the next node, or return undefined if the iterator's end was reached</p>

**Kind**: instance method of [<code>DanDirectedGraphDepthFirstIterator</code>](#DanDirectedGraphDepthFirstIterator)  
**Throws**:

- <code>Error</code> <p>exception if this._nextNodeId was not found in graph</p>

<a name="DanDirectedGraphDepthFirstIterator+_advance"></a>

### danDirectedGraphDepthFirstIterator.\_advance()
<p>Advance to the next node in a depth first fashion</p>

**Kind**: instance method of [<code>DanDirectedGraphDepthFirstIterator</code>](#DanDirectedGraphDepthFirstIterator)  
<a name="DanDirectedGraphDepthFirstIterator+hasNext"></a>

### danDirectedGraphDepthFirstIterator.hasNext() ⇒ <code>boolean</code>
<p>Check if the iterator can step to a next node</p>

**Kind**: instance method of [<code>DanDirectedGraphDepthFirstIterator</code>](#DanDirectedGraphDepthFirstIterator)  
**Returns**: <code>boolean</code> - <p>true if the iterator can step to a next node, false if there are no more nodes left to visit in the iterator</p>  
<a name="DanDirectedGraphDepthFirstIterator+rewind"></a>

### danDirectedGraphDepthFirstIterator.rewind()
<p>Restart the iterator</p>

**Kind**: instance method of [<code>DanDirectedGraphDepthFirstIterator</code>](#DanDirectedGraphDepthFirstIterator)  
<a name="DanUndirectedGraph"></a>

## DanUndirectedGraph
<p>The DanUndirectedGraph class handles undirected graphs</p>

**Kind**: global class  

* [DanUndirectedGraph](#DanUndirectedGraph)
    * [new DanUndirectedGraph()](#new_DanUndirectedGraph_new)
    * _instance_
        * [.addNode(node)](#DanUndirectedGraph+addNode) ⇒ <code>boolean</code>
        * [.addArcToNodeId(idNode, arcToAdd)](#DanUndirectedGraph+addArcToNodeId) ⇒ <code>boolean</code>
        * [.addArcToNode(node, nodeToAdd)](#DanUndirectedGraph+addArcToNode) ⇒ <code>boolean</code>
        * [.removeNode(idNode)](#DanUndirectedGraph+removeNode) ⇒ <code>boolean</code>
        * [._getAdjacentNodesList(idNode)](#DanUndirectedGraph+_getAdjacentNodesList) ⇒ <code>Array.&lt;DanNode&gt;</code>
        * [._getANode()](#DanUndirectedGraph+_getANode) ⇒ <code>DanNode.&lt;I, D&gt;</code> \| <code>undefined</code>
        * [._visitNodes(visitedNodes, nextNode)](#DanUndirectedGraph+_visitNodes)
        * [._checkForCycle(visitedNodes, nextNode, fromNode)](#DanUndirectedGraph+_checkForCycle) ⇒ <code>boolean</code>
        * [.isConnected()](#DanUndirectedGraph+isConnected) ⇒ <code>boolean</code>
        * [.isAcyclic()](#DanUndirectedGraph+isAcyclic) ⇒ <code>boolean</code>
        * [.countNodes()](#DanUndirectedGraph+countNodes) ⇒ <code>number</code>
        * [.isEmpty()](#DanUndirectedGraph+isEmpty) ⇒ <code>boolean</code>
        * [.toString(showDetails)](#DanUndirectedGraph+toString) ⇒ <code>string</code>
        * [.getInnerGraph()](#DanUndirectedGraph+getInnerGraph) ⇒ <code>Map.&lt;I, DanNodeAndUndirectedArcs.&lt;I, D&gt;&gt;</code>
    * _static_
        * [.generateConsecutiveNodeGraph(numOfNodes)](#DanUndirectedGraph.generateConsecutiveNodeGraph) ⇒ <code>DanUndirectedGraph.&lt;number, undefined&gt;</code>
        * [.generateRandomNodeGraph(numOfNodes)](#DanUndirectedGraph.generateRandomNodeGraph) ⇒ <code>DanUndirectedGraph.&lt;number, undefined&gt;</code>

<a name="new_DanUndirectedGraph_new"></a>

### new DanUndirectedGraph()
<p>the public class constructor</p>

<a name="DanUndirectedGraph+addNode"></a>

### danUndirectedGraph.addNode(node) ⇒ <code>boolean</code>
<p>Add a node to the graph</p>

**Kind**: instance method of [<code>DanUndirectedGraph</code>](#DanUndirectedGraph)  
**Returns**: <code>boolean</code> - <p>true if the node was correctly added to the graph; false if the node is already present</p>  

| Param | Type | Description |
| --- | --- | --- |
| node | <code>DanNode.&lt;I, D&gt;</code> | <p>the node to add</p> |

<a name="DanUndirectedGraph+addArcToNodeId"></a>

### danUndirectedGraph.addArcToNodeId(idNode, arcToAdd) ⇒ <code>boolean</code>
<p>Add an arc to a node, given the node identifier</p>

**Kind**: instance method of [<code>DanUndirectedGraph</code>](#DanUndirectedGraph)  
**Returns**: <code>boolean</code> - <p>true if <em>arcToAdd</em> was correctly added to the adjacent arcs of idNode; false if the idNode does not exist or if <em>arcToAdd</em> was already present</p>  

| Param | Type | Description |
| --- | --- | --- |
| idNode | <code>I</code> | <p>the id of the node receiving <em>arcToAdd</em></p> |
| arcToAdd | <code>DanArc.&lt;I, D&gt;</code> | <p>the arc being added</p> |

<a name="DanUndirectedGraph+addArcToNode"></a>

### danUndirectedGraph.addArcToNode(node, nodeToAdd) ⇒ <code>boolean</code>
<p>Add arc to node, given the node interface structure</p>

**Kind**: instance method of [<code>DanUndirectedGraph</code>](#DanUndirectedGraph)  
**Returns**: <code>boolean</code> - <p>true if <em>arcToAdd</em> was correctly added to the adjacent arcs of node; false if <em>arcToAdd</em> was already present</p>  

| Param | Type | Description |
| --- | --- | --- |
| node | <code>DanNode.&lt;I, D&gt;</code> | <p>the node receiving <em>arcToAdd</em></p> |
| nodeToAdd | <code>DanArc.&lt;I, D&gt;</code> | <p>the node being added</p> |

<a name="DanUndirectedGraph+removeNode"></a>

### danUndirectedGraph.removeNode(idNode) ⇒ <code>boolean</code>
<p>Remove the node given in input from the graph</p>

**Kind**: instance method of [<code>DanUndirectedGraph</code>](#DanUndirectedGraph)  
**Returns**: <code>boolean</code> - <p>true if the node is correctly removed</p>  

| Param | Type | Description |
| --- | --- | --- |
| idNode | <code>I</code> | <p>the id of the node to remove</p> |

<a name="DanUndirectedGraph+_getAdjacentNodesList"></a>

### danUndirectedGraph.\_getAdjacentNodesList(idNode) ⇒ <code>Array.&lt;DanNode&gt;</code>
<p>Get the list of adjacent nodes of a given node identifier</p>

**Kind**: instance method of [<code>DanUndirectedGraph</code>](#DanUndirectedGraph)  
**Returns**: <code>Array.&lt;DanNode&gt;</code> - <p>the list of adjacent nodes of idNode as array of DanNode&lt;I, D&gt;</p>  

| Param | Type | Description |
| --- | --- | --- |
| idNode | <code>I</code> | <p>the id of the node to check</p> |

<a name="DanUndirectedGraph+_getANode"></a>

### danUndirectedGraph.\_getANode() ⇒ <code>DanNode.&lt;I, D&gt;</code> \| <code>undefined</code>
<p>Get a node in the graph</p>

**Kind**: instance method of [<code>DanUndirectedGraph</code>](#DanUndirectedGraph)  
**Returns**: <code>DanNode.&lt;I, D&gt;</code> \| <code>undefined</code> - <p>a node in the graph or undefined if the graph is empty</p>  
<a name="DanUndirectedGraph+_visitNodes"></a>

### danUndirectedGraph.\_visitNodes(visitedNodes, nextNode)
<p>Protected method to visit all the neighbours of a node, given in input the node id and a previous set of visitedNodes</p>

**Kind**: instance method of [<code>DanUndirectedGraph</code>](#DanUndirectedGraph)  

| Param | Type | Description |
| --- | --- | --- |
| visitedNodes | <code>Set.&lt;I&gt;</code> | <p>the nodes already visited</p> |
| nextNode | <code>I</code> | <p>the next node to visit</p> |

<a name="DanUndirectedGraph+_checkForCycle"></a>

### danUndirectedGraph.\_checkForCycle(visitedNodes, nextNode, fromNode) ⇒ <code>boolean</code>
<p>Recursively checks for the presence of a cycle starting from node id nextNode</p>

**Kind**: instance method of [<code>DanUndirectedGraph</code>](#DanUndirectedGraph)  
**Returns**: <code>boolean</code> - <p>true if a cycle is found, false if no cycle is found</p>  

| Param | Type | Description |
| --- | --- | --- |
| visitedNodes | <code>Set.&lt;I&gt;</code> | <p>the nodes already visited</p> |
| nextNode | <code>I</code> | <p>the next node to visit</p> |
| fromNode | <code>I</code> \| <code>undefined</code> | <p>the parent node (default: undefined)</p> |

<a name="DanUndirectedGraph+isConnected"></a>

### danUndirectedGraph.isConnected() ⇒ <code>boolean</code>
<p>Check if the graph is connected</p>

**Kind**: instance method of [<code>DanUndirectedGraph</code>](#DanUndirectedGraph)  
**Returns**: <code>boolean</code> - <p>true if the graph is connected</p>  
<a name="DanUndirectedGraph+isAcyclic"></a>

### danUndirectedGraph.isAcyclic() ⇒ <code>boolean</code>
<p>Public method to check if the graph is acyclic</p>

**Kind**: instance method of [<code>DanUndirectedGraph</code>](#DanUndirectedGraph)  
**Returns**: <code>boolean</code> - <p>true if the graph does not contain cycles</p>  
<a name="DanUndirectedGraph+countNodes"></a>

### danUndirectedGraph.countNodes() ⇒ <code>number</code>
<p>Public method to retrieve the number of nodes in the graph</p>

**Kind**: instance method of [<code>DanUndirectedGraph</code>](#DanUndirectedGraph)  
**Returns**: <code>number</code> - <p>the number of nodes in the graph</p>  
<a name="DanUndirectedGraph+isEmpty"></a>

### danUndirectedGraph.isEmpty() ⇒ <code>boolean</code>
<p>Check if the graph is empty</p>

**Kind**: instance method of [<code>DanUndirectedGraph</code>](#DanUndirectedGraph)  
**Returns**: <code>boolean</code> - <p>true if the graph does not contain any node</p>  
<a name="DanUndirectedGraph+toString"></a>

### danUndirectedGraph.toString(showDetails) ⇒ <code>string</code>
<p>The string representation of the undirected graph</p>

**Kind**: instance method of [<code>DanUndirectedGraph</code>](#DanUndirectedGraph)  
**Returns**: <code>string</code> - <p>the string representation of the undirected graph</p>  

| Param | Type | Description |
| --- | --- | --- |
| showDetails | <code>boolean</code> | <p>if this option is true, all the node and arc details will be included in the output string (default: false)</p> |

<a name="DanUndirectedGraph+getInnerGraph"></a>

### danUndirectedGraph.getInnerGraph() ⇒ <code>Map.&lt;I, DanNodeAndUndirectedArcs.&lt;I, D&gt;&gt;</code>
<p>Get the inner graph object</p>

**Kind**: instance method of [<code>DanUndirectedGraph</code>](#DanUndirectedGraph)  
**Returns**: <code>Map.&lt;I, DanNodeAndUndirectedArcs.&lt;I, D&gt;&gt;</code> - <p>the inner graph Map object</p>  
<a name="DanUndirectedGraph.generateConsecutiveNodeGraph"></a>

### DanUndirectedGraph.generateConsecutiveNodeGraph(numOfNodes) ⇒ <code>DanUndirectedGraph.&lt;number, undefined&gt;</code>
<p>A utility public static method to generate an undirected graph with a number of <em>numOfNodes</em> consecutive nodes</p>

**Kind**: static method of [<code>DanUndirectedGraph</code>](#DanUndirectedGraph)  
**Returns**: <code>DanUndirectedGraph.&lt;number, undefined&gt;</code> - <p>an undirected graph witn <em>numOfNodes</em> nodes</p>  

| Param | Type | Description |
| --- | --- | --- |
| numOfNodes | <code>number</code> | <p>the number of nodes of the output graph</p> |

<a name="DanUndirectedGraph.generateRandomNodeGraph"></a>

### DanUndirectedGraph.generateRandomNodeGraph(numOfNodes) ⇒ <code>DanUndirectedGraph.&lt;number, undefined&gt;</code>
<p>A utility public static method to generate an undirected graph with a number of <em>numOfNodes</em> random nodes</p>

**Kind**: static method of [<code>DanUndirectedGraph</code>](#DanUndirectedGraph)  
**Returns**: <code>DanUndirectedGraph.&lt;number, undefined&gt;</code> - <p>an undirected graph witn <em>numOfNodes</em> nodes</p>  

| Param | Type | Description |
| --- | --- | --- |
| numOfNodes | <code>number</code> | <p>the number of nodes of the output graph</p> |

<a name="DanStack"></a>

## DanStack
<p>DanStack is a simple class implementing Stackable interface</p>

**Kind**: global class  

* [DanStack](#DanStack)
    * [new DanStack()](#new_DanStack_new)
    * [.push(val)](#DanStack+push)
    * [.pop()](#DanStack+pop) ⇒ <code>T</code> \| <code>undefined</code>
    * [.peek()](#DanStack+peek) ⇒ <code>T</code> \| <code>undefined</code>
    * [.isEmpty()](#DanStack+isEmpty) ⇒ <code>boolean</code>
    * [.clear()](#DanStack+clear)

<a name="new_DanStack_new"></a>

### new DanStack()
<p>The public class constructor</p>

<a name="DanStack+push"></a>

### danStack.push(val)
<p>Insert a value to the top of the stack
We use the 'push' method of the private member '_list'</p>

**Kind**: instance method of [<code>DanStack</code>](#DanStack)  

| Param | Type | Description |
| --- | --- | --- |
| val | <code>T</code> | <p>the value to be pushed inside the stack</p> |

<a name="DanStack+pop"></a>

### danStack.pop() ⇒ <code>T</code> \| <code>undefined</code>
<p>Get the value from the top of the stack and remove it from the stack itself
We use the 'pop' method of the private member '_list'</p>

**Kind**: instance method of [<code>DanStack</code>](#DanStack)  
**Returns**: <code>T</code> \| <code>undefined</code> - <p>the element on top of the stack if the stack is not empty; conversely it returns undefined</p>  
<a name="DanStack+peek"></a>

### danStack.peek() ⇒ <code>T</code> \| <code>undefined</code>
<p>Get the value from the top of the stack but do not remove it from the stack itself</p>

**Kind**: instance method of [<code>DanStack</code>](#DanStack)  
**Returns**: <code>T</code> \| <code>undefined</code> - <p>the element on top of the stack if the stack is not empty; conversely it returns undefined</p>  
<a name="DanStack+isEmpty"></a>

### danStack.isEmpty() ⇒ <code>boolean</code>
<p>Check if the stack is empty
We use the 'length' method of the private member '_list' to check the number of elements present:
if the number is less than 1, the stack is empty</p>

**Kind**: instance method of [<code>DanStack</code>](#DanStack)  
**Returns**: <code>boolean</code> - <p>true if the stack is empty; it returns false is the stack is not empty</p>  
<a name="DanStack+clear"></a>

### danStack.clear()
<p>Clear all stack's elements
We use the 'splice' method of the private member '_list'</p>

**Kind**: instance method of [<code>DanStack</code>](#DanStack)  
<a name="ArcType"></a>

## ArcType
<p>The directed arc type: incoming or outgoing</p>

**Kind**: global variable  
<a name="ArcType"></a>

## ArcType
<p>The class DanDirectedGraph handles directed graphs</p>

**Kind**: global variable  
<a name="randomIntFromInterval"></a>

## randomIntFromInterval(min, max) ⇒ <code>number</code>
<p>Get a random integer number between min and max (included)</p>

**Kind**: global function  
**Returns**: <code>number</code> - <p>an integer between min and max (included)</p>  

| Param | Type | Description |
| --- | --- | --- |
| min | <code>number</code> | <p>minimum number</p> |
| max | <code>number</code> | <p>maximum number</p> |

