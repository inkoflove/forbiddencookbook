const pages = [
  { name: "Low Explosives", url: "index.html#1" },
  { name: "Homemade Naplam", url: "index.html#2" },
  { name: "Molotov Cocktail", url: "index.html#3" },
  { name: "Pipe Bomb", url: "index.html#4" },
  { name: "Pressure Cooker Bomb", url: "index.html#5" },
  { name: "Homemade RC Igniter", url: "index.html#6" },
  { name: "Bottle Bomb", url: "index.html#7" },
  { name: "Chlorine Bomb", url: "index.html#8" },
  { name: "Alkali-Oil Bomb", url: "index.html#9" },
  { name: "Deodorant Box Bomb", url: "index.html#10" },

  { name: "Nitroglycerin", url: "page2.html#11" },
  { name: "Mercury Fulminate", url: "page2.html#12" },
  { name: "Picric Acid", url: "page2.html#13" },
  { name: "Handmade Grenade", url: "page2.html#14" },
  { name: "Wired RC Igniter", url: "page2.html#15" },
  { name: "Dry Ice Bomb", url: "page2.html#16" },
  { name: "Tear Gas Grenade", url: "page2.html#17" }
];

function searchSite() {
  const input = document.getElementsByClassName("searchInput").value.toLowerCase();
  const results = document.getElementsByClassName("searchResults");

  results.innerHTML = "";

  if (input.trim() === "") return;

  let matchCount = 0;

  pages.forEach(item => {
    if (item.name.toLowerCase().includes(input)) {
      const li = document.createElement("li");
      const a = document.createElement("a");

      a.href = item.url;
      a.textContent = item.name;

      li.appendChild(a);
      results.appendChild(li);
      matchCount++;
    }
  });

  // optional: show "no results"
  if (matchCount === 0) {
    const li = document.createElement("li");
    li.textContent = "No results found";
    results.appendChild(li);
  }
}

