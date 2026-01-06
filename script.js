function run() {
  const steps = ["extract", "transform", "load"];
  steps.forEach((id, i) => {
    setTimeout(() => {
      document.getElementById(id).style.background = "#22c55e";
    }, i * 1000);
  });
}
