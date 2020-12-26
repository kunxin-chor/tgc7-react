import React from "react";
import Graph from "react-graph-vis";

import "vis-network/dist/dist/vis-network.css";
import { Graph as CompScienceGraph, Node } from "./Graph";

export default function VisGraphFromNormalGraph() {
  const options = {
    layout: {
      hierarchical: true
    },
    edges: {
      color: "#000000"
    },
    height: "500px"
  };

  const events = {
    select: function(event) {
      var { nodes, edges } = event;
    }
  };

  let n1 = new Node(1, "A1", "A1", "A1", "A1 info");
  let n2 = new Node(2, "B2", "B2", "B2", "B2 info");
  let n3 = new Node(3, "C3", "C3", "C3", "C3 info");
  let n4 = new Node(4, "D4", "D4", "D4", "D4 info");

  n1.addNeighbour(n2, 5, "A1 to B2");
  n2.addNeighbour(n3, 10, "B2 to C3");
  n2.addNeighbour(n4, 15, "B2 to D4");

  let g = new CompScienceGraph();
  g.addNode(n1);
  g.addNode(n2);
  g.addNode(n3);
  g.addNode(n4);

  let visGraph = g.convertToVisGraph();

  return (
    <Graph
      graph={visGraph}
      options={options}
      events={events}
      getNetwork={network => {
        //  if you want access to vis.js network api you can set the state in a parent component using this property
      }}
    />
  );
}
