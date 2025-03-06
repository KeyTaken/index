document.addEventListener("DOMContentLoaded", function () {
  emailjs.init("qfpc-5i4XV2p3Dp3S");
  console.log("✅ EmailJS initialisé");

  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      console.log("📩 Formulaire soumis");

      let templateParams = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
      };

      console.log("📝 Données du formulaire :", templateParams);

      emailjs.send("service_fubhqug", "template_vvy2dma", templateParams).then(
        function (response) {
          console.log("✅ Succès :", response);
          alert("Message envoyé avec succès !");
          document.getElementById("contact-form").reset();
        },
        function (error) {
          console.error("❌ Erreur :", error);
          alert("Une erreur s'est produite : " + error.text);
        }
      );
    });
});
