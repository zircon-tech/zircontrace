document.addEventListener("DOMContentLoaded", function () {
  if (typeof mermaid === "undefined") return;
  mermaid.initialize({
    startOnLoad: false,
    theme: "dark",
    flowchart: {
      padding: 18,
      nodeSpacing: 45,
      rankSpacing: 55,
      htmlLabels: true
    },
    themeVariables: {
      background: "#061326",
      primaryColor: "#0C2444",
      primaryTextColor: "#E8EEF5",
      primaryBorderColor: "#1767BF",
      lineColor: "#75B9FF",
      secondaryColor: "#102D56",
      tertiaryColor: "#082247",
      fontFamily: "Inter, sans-serif"
    }
  });

  var blocks = document.querySelectorAll("pre.mermaid-diagram");
  var nodes = [];
  blocks.forEach(function (pre) {
    var div = document.createElement("div");
    div.className = "mermaid-diagram";
    div.textContent = pre.textContent;
    pre.replaceWith(div);
    nodes.push(div);
  });
  if (nodes.length) {
    mermaid.run({ nodes: nodes });
  }
});
