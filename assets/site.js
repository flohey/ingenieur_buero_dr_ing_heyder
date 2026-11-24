// Ingenieurbüro Dr.-Ing. Florian Heyder – kleine Helfer, keine externen Abhängigkeiten.
(function () {
  "use strict";

  // Mobiles Menü
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.textContent = open ? "Schließen" : "Menü";
    });
    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A" && nav.classList.contains("is-open")) {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.textContent = "Menü";
      }
    });
  }

  // Anfrageformular: erzeugt eine E-Mail im eigenen Mailprogramm (mailto),
  // es werden keine Daten an einen Server geschickt.
  var form = document.getElementById("mailform");
  if (!form) return;
  var errorBox = document.getElementById("mailform-error");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var f = form.elements;
    var name = f.name.value.trim();
    var ort = f.ort.value.trim();

    if (!name || !ort) {
      errorBox.textContent = "Bitte geben Sie Ihren Namen sowie PLZ und Ort des Gebäudes an.";
      errorBox.hidden = false;
      (name ? f.ort : f.name).focus();
      return;
    }
    errorBox.hidden = true;

    var anliegen = Array.prototype.slice
      .call(form.querySelectorAll('input[name="anliegen"]:checked'))
      .map(function (el) { return el.value; });

    var lines = [
      "Guten Tag Herr Dr. Heyder,",
      "",
      "ich interessiere mich für eine Energieberatung.",
      "",
      "Name: " + name,
      "Gebäude: " + f.typ.value + " in " + ort,
      "Baujahr: " + (f.baujahr.value.trim() || "–"),
      "Anliegen: " + (anliegen.length ? anliegen.join(", ") : "–"),
      "Telefon: " + (f.telefon.value.trim() || "–")
    ];
    var msg = f.nachricht.value.trim();
    if (msg) { lines.push("", msg); }
    lines.push("", "Viele Grüße", name);

    var subject = "Anfrage Energieberatung – " + ort;
    var href = "mailto:" + form.getAttribute("data-email") +
      "?subject=" + encodeURIComponent(subject) +
      "&body=" + encodeURIComponent(lines.join("\r\n"));
    window.location.href = href;
  });
})();
