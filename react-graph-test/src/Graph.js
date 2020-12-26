import Stack from "./Stack"

class Node {
  constructor(id, data, label = "", info = "") {
    this.id = id;
    this.data = data;
    this.neighbours = [];
    this.label = label;
    this.info = info;
  }

  addNeighbour(node, weight, label = "") {
    this.neighbours.push({
      node,
      weight,
      label
    });
  }

  getNeighbours() {
      return this.neighbours;
  }
}

class Graph {
  constructor() {
    this.nodes = [];
  }

  addNode(node) {
    this.nodes.push(node);
  }

  // return the depth first traversal of the graph
  depthFirstSearch() {
      let stack = new Stack();
      let visited= [];
      // assume the first node is the root node
      stack.push(this.nodes[0]);  
    
 
      while (stack.peek()) {
        let top = stack.pop();
        // if the node has not been visited before
        if (!visited.some(n => n.id === top.id)) {
            // not in the visited array means not visited before
            visited.push(top);
            // add the neighbours of n to the top of the stack in reverse order
            for (let neighbour of top.getNeighbours().slice().reverse()) {
                stack.push(neighbour.node);
            }
        }
      }

      return visited;

  }

  convertFromJSON(json) {}

  convertToVisGraph() {
    // create the nodes array
    let nodes = this.nodes.map(function(n) {
      return {
        id: n.id,
        label: n.data,
        title: n.info
      };
    });
    let arrayOfNodeEdges = this.nodes.map(function(node) {
      let nodeID = node.id;
      return node.neighbours.map(function(neighbour) {
        return {
          from: nodeID,
          to: neighbour.node.id,
          label: neighbour.weight + "",
          title: neighbour.label
        };
      });
    });
    let edges = arrayOfNodeEdges.flat();

    return {
      nodes,
      edges
    };
  }
}

export { Node, Graph };
