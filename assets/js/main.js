// ============== NAV DROPDOWN SHOW ==============
document.addEventListener("DOMContentLoaded", function () {
  const navToggle = document.querySelector(".nav__toggle");
  const navToggleIcon = document.querySelector(".nav__toggle i");
  const navDropdown = document.querySelector(".nav__dropdown");

  // Fungsi untuk men-toggle dropdown
  navToggle.onclick = function (event) {
    event.stopPropagation(); // Hentikan event bubbling
    navDropdown.classList.toggle("open");
    const isOpen = navDropdown.classList.contains("open");

    navToggleIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
  };

  // Tambahkan event listener untuk mendeteksi klik di luar dropdown
  document.addEventListener("click", function (event) {
    const isClickInside =
      navDropdown.contains(event.target) || navToggle.contains(event.target);

    if (!isClickInside) {
      navDropdown.classList.remove("open");
      navToggleIcon.classList = "fa-solid fa-bars";
    }
  });
});

// ============== SUB NAV DROPDOWN SHOW ==============
document.addEventListener("DOMContentLoaded", function () {
  const collectionLink = document.getElementById("collection-link");
  const collectionIcon = document.getElementById("collection-icon");
  const collectionDropdown = document.getElementById("collection-dropdown");

  // Fungsi untuk men-toggle dropdown
  collectionLink.onclick = function (event) {
    event.preventDefault(); // Mencegah aksi default dari link
    event.stopPropagation(); // Hentikan event bubbling

    collectionDropdown.classList.toggle("open");
    const isOpen = collectionDropdown.classList.contains("open");

    collectionIcon.className = isOpen
      ? "fa-solid fa-grip-lines"
      : "fa-solid fa-caret-down";
  };

  // Tambahkan event listener untuk mendeteksi klik di luar dropdown
  document.addEventListener("click", function (event) {
    const isClickInside =
      collectionDropdown.contains(event.target) ||
      collectionLink.contains(event.target) ||
      collectionIcon.contains(event.target);

    if (!isClickInside) {
      collectionDropdown.classList.remove("open");
      collectionIcon.className = "fa-solid fa-caret-down";
    }
  });
});

// ============== SUB NAV DROPDOWN SHOW HANDPHONE ==============
document.addEventListener("DOMContentLoaded", function () {
  const collectionLink2 = document.getElementById("collection-link2");
  const collectionIcon2 = document.getElementById("collection-icon2");
  const collectionDropdown2 = document.getElementById("collection-dropdown2");

  // Fungsi untuk men-toggle dropdown
  collectionLink2.onclick = function (event) {
    event.preventDefault(); // Mencegah aksi default dari link
    event.stopPropagation(); // Hentikan event bubbling

    collectionDropdown2.classList.toggle("open");
    const isOpen = collectionDropdown2.classList.contains("open");

    collectionIcon2.className = isOpen
      ? "fa-solid fa-grip-lines"
      : "fa-solid fa-caret-down";
  };

  // Tambahkan event listener untuk mendeteksi klik di luar dropdown
  document.addEventListener("click", function (event) {
    const isClickInside =
      collectionDropdown2.contains(event.target) ||
      collectionLink2.contains(event.target) ||
      collectionIcon2.contains(event.target);

    if (!isClickInside) {
      collectionDropdown2.classList.remove("open");
      collectionIcon2.className = "fa-solid fa-caret-down";
    }
  });
});
