// Scroll animation for sections
document.addEventListener("scroll", function () {
    document.querySelectorAll(".section").forEach((el) => {
      if (el.getBoundingClientRect().top < window.innerHeight) {
        el.classList.add("visible");
      }
    });
  });
  
  // Update the preview with entered values
  function updatePreview() {
    const name = document.getElementById("name").value;
    const bio = document.getElementById("bio").value;
    const valueProposition = document.getElementById("valueProposition").value;
    const skills = document.getElementById("skills").value;
    const story = document.getElementById("story").value;
    const cta = document.getElementById("cta").value;
    const contactLink = document.getElementById("contactLink").value;
    const profilePic = document.getElementById("profilePic").value;
    const socialLinks = document.getElementById("socialLinks").value;
  
    document.getElementById("previewName").innerText = name || "Your Name";
    document.getElementById("previewBio").innerText =
      bio || "Your bio will appear here.";
    document.getElementById("previewValueProposition").innerText =
      valueProposition || "Your unique value proposition will appear here.";
    document.getElementById("previewSkills").innerText =
      skills || "Your skills and experience will appear here.";
    document.getElementById("previewStory").innerText =
      story || "Your personal story or anecdote will appear here.";
    document.getElementById("previewPic").src =
      profilePic || "https://via.placeholder.com/120";
  
    // Update the Contact button link
    document.getElementById("previewCTA").innerHTML =
      `<a href="${contactLink || "#"}" class="button" onclick="triggerConfetti()">Contact Me</a>`;
  
    // Update social media links
    const links = socialLinks
      .split(",")
      .map((link) => link.trim())
      .filter((link) => link);
    const socialLinksContainer = document.getElementById("previewSocialLinks");
    socialLinksContainer.innerHTML = "";
    links.forEach((link) => {
      const anchor = document.createElement("a");
      anchor.href = link;
      anchor.textContent = link;
      anchor.target = "_blank";
      socialLinksContainer.appendChild(anchor);
    });
  }
  
  // Confetti effect
  function triggerConfetti() {
    const count = 200,
      defaults = {
        origin: { y: 0.7 },
      };
  
    function fire(particleRatio, opts) {
      confetti(
        Object.assign({}, defaults, opts, {
          particleCount: Math.floor(count * particleRatio),
        }),
      );
    }
  
    fire(0.25, {
      spread: 26,
      startVelocity: 55,
    });
  
    fire(0.2, {
      spread: 60,
    });
  
    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });
  
    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });
  
    fire(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  
    const defaults1 = {
      spread: 360,
      ticks: 50,
      gravity: 0,
      decay: 0.94,
      startVelocity: 30,
      shapes: ["star"],
      colors: ["FFE400", "FFBD00", "E89400", "FFCA6C", "FDFFB8"],
    };
  
    function shoot() {
      confetti({
        ...defaults1,
        particleCount: 40,
        scalar: 1.2,
        shapes: ["star"],
      });
  
      confetti({
        ...defaults1,
        particleCount: 10,
        scalar: 0.75,
        shapes: ["circle"],
      });
    }
  
    setTimeout(shoot, 0);
    setTimeout(shoot, 100);
    setTimeout(shoot, 200);
  }
  
  // Download profile as HTML file
  async function downloadHTML() {
    //I'm sorry
    const css = `body {
      font-family: Arial, sans-serif;
      background-color: #f9f9fb;
      color: #333;
      margin: 0;
      padding: 20px;
  }
  h1, h2 {
      color: #2c3e50;
  }
  
  .preview-section {
      margin-top: 20px;
      padding: 20px;
      background-color: #fff;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  .preview-section {
      position: relative;
      margin-top: 30px;
  }
  .preview-section img {
      border-radius: 50%;
      width: 120px;
      height: 120px;
      object-fit: cover;
      margin-bottom: 10px;
  }
  .section {
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 1s ease, transform 1s ease;
  }
  .section.visible {
      opacity: 1;
      transform: translateY(0);
  }
  .button {
      display: inline-block;
      padding: 10px 20px;
      margin-top: 10px;
      background-color: #2c3e50;
      color: #fff;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      text-align: center;
      font-size: 16px;
  }
  .social-links a {
      margin-right: 10px;
      color: #2c3e50;
      text-decoration: none;
  }`;
    const js = `document.addEventListener("scroll", function () {
      document.querySelectorAll('.section').forEach((el) => {
          if (el.getBoundingClientRect().top < window.innerHeight) {
              el.classList.add('visible');
          }
      });
  });
  function triggerConfetti() {
      const count = 200,
          defaults = {
              origin: { y: 0.7 },
          };
  
      function fire(particleRatio, opts) {
          confetti(
              Object.assign({}, defaults, opts, {
                  particleCount: Math.floor(count * particleRatio),
              })
          );
      }
  
      fire(0.25, {
          spread: 26,
          startVelocity: 55,
      });
  
      fire(0.2, {
          spread: 60,
      });
  
      fire(0.35, {
          spread: 100,
          decay: 0.91,
          scalar: 0.8,
      });
  
      fire(0.1, {
          spread: 120,
          startVelocity: 25,
          decay: 0.92,
          scalar: 1.2,
      });
  
      fire(0.1, {
          spread: 120,
          startVelocity: 45,
      });
  
      const defaults1 = {
          spread: 360,
          ticks: 50,
          gravity: 0,
          decay: 0.94,
          startVelocity: 30,
          shapes: ["star"],
          colors: ["FFE400", "FFBD00", "E89400", "FFCA6C", "FDFFB8"],
      };
  
      function shoot() {
          confetti({
              ...defaults1,
              particleCount: 40,
              scalar: 1.2,
              shapes: ["star"],
          });
  
          confetti({
              ...defaults1,
              particleCount: 10,
              scalar: 0.75,
              shapes: ["circle"],
          });
      }
  
      setTimeout(shoot, 0);
      setTimeout(shoot, 100);
      setTimeout(shoot, 200);
  
  };
  `;
  
    // Get the HTML content
    const htmlContent = document.querySelector("#downloadsec").innerHTML;
  
    // Create an HTML template that includes references to sc.js and ns.css
    const fullHTML = `
          <!DOCTYPE html>
          <html lang="en">
          <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Profile</title>
              <link rel="stylesheet" href="ns.css">
          </head>
          <body>
              <div id="downloadsec">${htmlContent}</div>
              <script src="sc.js"></script>
          </body>
          </html>
          `;
  
    // Create blobs for HTML, CSS, and JS files
    const htmlBlob = new Blob([fullHTML], { type: "text/html" });
    const cssBlob = new Blob([css], { type: "text/css" });
    const jsBlob = new Blob([js], { type: "application/javascript" });
  
    // Create a ZIP file and add the blobs
    const zip = new JSZip();
    zip.file("Profile.html", htmlBlob);
    zip.file("ns.css", cssBlob);
    zip.file("sc.js", jsBlob);
  
    // Generate and download the ZIP file
    zip.generateAsync({ type: "blob" }).then((blob) => {
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "Profile.zip";
      link.click();
    });
  }
  