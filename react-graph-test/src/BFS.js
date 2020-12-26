import React from "react";
import Graph from "react-graph-vis";

import "vis-network/dist/dist/vis-network.css";
import { Graph as CompScienceGraph, Node } from "./Graph";

export default class BFS extends React.Component {
  options = {
    layout: {
      hierarchical: true
    },
    edges: {
      color: "#000000"
    },
    height: "500px"
  };

  events = {
    select: function(event) {
      var { nodes, edges } = event;
    }
  };
  constructor(props) {
    super(props);

    let n1 = new Node(1, "A1", "A1", "A1", "A1 info");
    let n2 = new Node(2, "B2", "B2", "B2", "B2 info");
    let n3 = new Node(3, "C3", "C3", "C3", "C3 info");
    let n4 = new Node(4, "D4", "D4", "D4", "D4 info");
    let n5 = new Node(5, "E5", "E5", "E5", "E5 info");

    n1.addNeighbour(n2, 5, "A1 to B2");
    n2.addNeighbour(n3, 10, "B2 to C3");
    n2.addNeighbour(n4, 15, "B2 to D4");
    n3.addNeighbour(n5, 20, "C3 to E5");

    this.g = new CompScienceGraph();
    this.g.addNode(n1);
    this.g.addNode(n2);
    this.g.addNode(n3);
    this.g.addNode(n4);
    this.g.addNode(n5);

    this.visGraph = this.g.convertToVisGraph();
  }

  componentDidMount() {
    this.setState(
      {
        visited: this.g.depthFirstSearch(),
        nextIndex: 0
      },
      () => this.showNextNode()
    );
  }

  showNextNode = () => {
    if (this.state.nextIndex < this.state.visited.length) {
      let next = this.state.visited[this.state.nextIndex];
      this.state.network.selectNodes([next.id], [false]);
      setTimeout(() => {
        this.setState(
          {
            nextIndex: this.state.nextIndex + 1
          },
          () => this.showNextNode()
        );
      }, 2000);
    }
  };

  render() {
    return (
      <Graph
        graph={this.visGraph}
        options={this.options}
        events={this.events}
        getNetwork={network => {
          //  if you want access to vis.js network api you can set the state in a parent component using this property
          this.setState({
            network
          });
        }}
      />
    );
  }
}
