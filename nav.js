const openMenu = () => {
  console.log("dsdsdsds");

  document.querySelector(".backdrop").className = "backdrop active";
  document.querySelector(".aside").className = "active";
};

const closeMenu = () => {
  console.log("open menu");
  document.querySelector(".backdrop").className = "backdrop";
  document.querySelector(".aside").className = "";
};

document.getElementById("menuBtn").onclick = (e) => {
  console.log("close menu");
  e.preventDefault();
  e.stopPropagation();
  openMenu();
};
