// Living Architecture Visualizer
// Powered by D3.js

document.addEventListener("DOMContentLoaded", function () {
    const width = document.getElementById('architecture-map').clientWidth;
    const height = 600;

    const svg = d3.select("#architecture-map")
        .append("svg")
        .attr("width", "100%")
        .attr("height", height)
        .attr("viewBox", [0, 0, width, height])
        .attr("style", "max-width: 100%; height: auto;");

    // Simulation Setup
    const simulation = d3.forceSimulation()
        .force("link", d3.forceLink().id(d => d.id).distance(100))
        .force("charge", d3.forceManyBody().strength(-300))
        .force("center", d3.forceCenter(width / 2, height / 2))
        .force("collide", d3.forceCollide().radius(d => d.radius + 5));

    // Load Data
    d3.json("assets/anatomy.json").then(function (graph) {

        // Links (Connective Tissue)
        const link = svg.append("g")
            .attr("stroke", "#999")
            .attr("stroke-opacity", 0.6)
            .selectAll("line")
            .data(graph.links)
            .join("line")
            .attr("stroke-width", d => Math.sqrt(d.value))
            .attr("stroke-dasharray", d => d.dashed ? "5,5" : "none");

        // Nodes (Organs)
        const node = svg.append("g")
            .attr("stroke", "#fff")
            .attr("stroke-width", 1.5)
            .selectAll("circle")
            .data(graph.nodes)
            .join("circle")
            .attr("r", d => d.radius)
            .attr("fill", d => getNodeColor(d.group))
            .call(drag(simulation));

        // Labels
        const label = svg.append("g")
            .selectAll("text")
            .data(graph.nodes)
            .join("text")
            .text(d => d.label)
            .attr("x", 12)
            .attr("y", 3)
            .style("font-family", "Inter, sans-serif")
            .style("font-size", "12px")
            .style("fill", "#e2e8f0")
            .style("pointer-events", "none");

        // Tooltip interaction
        node.append("title")
            .text(d => d.label + "\n" + d.group);

        simulation.on("tick", () => {
            link
                .attr("x1", d => d.source.x)
                .attr("y1", d => d.source.y)
                .attr("x2", d => d.target.x)
                .attr("y2", d => d.target.y);

            node
                .attr("cx", d => d.x)
                .attr("cy", d => d.y);

            label
                .attr("x", d => d.x + 15)
                .attr("y", d => d.y + 5);
        });

        function drag(simulation) {
            function dragstarted(event) {
                if (!event.active) simulation.alphaTarget(0.3).restart();
                event.subject.fx = event.subject.x;
                event.subject.fy = event.subject.y;
            }

            function dragged(event) {
                event.subject.fx = event.x;
                event.subject.fy = event.y;
            }

            function dragended(event) {
                if (!event.active) simulation.alphaTarget(0);
                event.subject.fx = null;
                event.subject.fy = null;
            }

            return d3.drag()
                .on("start", dragstarted)
                .on("drag", dragged)
                .on("end", dragended);
        }

        function getNodeColor(group) {
            const colors = {
                "core": "#ef4444",      // Red (Pantheon)
                "system": "#3b82f6",    // Blue (Organs)
                "agent": "#10b981",     // Emerald (Agents)
                "council": "#8b5cf6",   // Violet (Council)
                "station": "#f59e0b",   // Amber (Stations)
                "memory": "#ec4899",    // Pink (Memory)
                "spark": "#eab308"      // Yellow (Spark)
            };
            return colors[group] || "#94a3b8";
        }
    });
});
