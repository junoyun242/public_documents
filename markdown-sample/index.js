const markdownElem = document.querySelector("github-md");

const fetchMarkdown = async () => {
  const res = await fetch("./markdown.md", {
    method: "GET",
  });
  const md = await res.text();
  markdownElem.innerHTML = md;
  renderMarkdown();
};

fetchMarkdown();
