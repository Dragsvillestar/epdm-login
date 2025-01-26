const dialog = document.getElementById('loginDialog');
const loginLink = document.getElementById('loginLink');
const closeButton = document.getElementById('closeLogin');
const loginForm = document.getElementById('loginForm');
const signUpLink = document.getElementById('signUpLink');
const projectDiv = document.querySelector(".project-list");

const openDialog = () => {
    dialog.showModal();
}
const closeDialog = () => {
    dialog.close();
}

const signUp = () => {
    dialog.innerHTML = `
        <form id="signUpForm">
            <div class="mb-3">
                <label for="signUpName" class="form-label">Name (Company/Person)</label>
                <input type="text" class="form-control" id="signUpName" placeholder="Enter your name" required>
            </div>
            <div class="mb-3">
                <label for="signUpPosition" class="form-label">Position</label>
                <input type="text" class="form-control" id="signUpPosition" placeholder="Enter your position" required>
            </div>
            <div class="mb-3">
                <label for="signUpEmail" class="form-label">Email Address</label>
                <input type="email" class="form-control" id="signUpEmail" placeholder="Enter your email" required>
            </div>
            <div class="mb-3">
                <label for="signUpPhone" class="form-label">Phone Number</label>
                <input type="tel" class="form-control" id="signUpPhone" placeholder="Enter your phone number" required>
            </div>
            <div class="mb-3">
                <label for="signUpAddress" class="form-label">Business Address</label>
                <input type="text" class="form-control" id="signUpAddress" placeholder="Enter your business address" required>
            </div>
            <div class="mb-3">
                <label for="signUpNature" class="form-label">Nature of Business</label>
                <input type="text" class="form-control" id="signUpNature" placeholder="Enter the nature of your business" required>
            </div>
            <div class="d-flex justify-content-between">
                <button type="submit" id="submitSignUp" class="btn btn-primary">Sign Up</button>
                <button type="button" id="closeSignUp" class="btn btn-secondary">Cancel</button>
            </div>
        </form>
    `;

    document.getElementById("closeSignUp").addEventListener("click", () => {
        dialog.close();
        resetModal();
    });

    document.getElementById("signUpForm").addEventListener("submit", (e) => {
        dialog.close();
        resetModal();
    });
};

const resetModal = () => {
    const originalDialogContent = `
    <h2>LOGIN</h2>
    <form id="loginForm">
      <div class="input-group mb-3">
        <span class="input-group-text" id="usernameSpan">Username</span>
        <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
      </div>
      <div class="input-group mb-3">
        <span class="input-group-text" id="passwordSpan">Password</span>
        <input type="password" class="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1">
      </div>
      <button type="submit" id="submitLogin">Login</button>
      <button type="button" id="closeLogin" onclick = "closeDialog()">Cancel</button>
    </form>
    <h6 class="m-3">Not a member? <a id = "signUpLink" class="text-danger" onclick = "signUp()">Sign Up</a></h6>
`;
    dialog.innerHTML = originalDialogContent
}

const aboutUs = () => {
    projectDiv.innerHTML = `<!-- Element where the document will be displayed -->
    <div class="container mt-0">
      <div id="documentContainer" class="document-display">
        <button id="closeAboutUs" class="close-btn">
          <i class="bi bi-chevron-double-left"></i> Back
        </button>
        <div class="card">
          <div class="card-header">
            <h5>About EPDM Energy</h5>
          </div>
          <div class="card-body">
            <h6>Our Vision</h6>
            <p>EPDM is committed to being a global leader in energy solutions. We aim to provide sustainable, innovative, and efficient energy systems to meet the growing demands of industries worldwide.</p>
            <h6>Our Mission</h6>
            <p>Our mission is to deliver clean, reliable, and affordable energy solutions to our clients, ensuring that we contribute positively to the development of the energy sector globally.</p>
            <h6>What We Do</h6>
            <p>EPDM Energy specializes in providing energy solutions across multiple sectors, including renewable energy, oil and gas, and power generation. We focus on maximizing energy efficiency and reducing environmental impact.</p>
          </div>
        </div>
      </div>
    </div>`;

    const originalContent = `
<div class="projectUl">
    <ul style="list-style-position: inside;">
        <h5 class="fw-bold mb-3" id="project-head">OIL AND GAS PROJECTS</h5>
        <li class="fw-bold m-2">NLNG Train project</li>
        <li class="fw-bold m-2">AKK Gas pipeline project</li>
        <li class="fw-bold m-2">Dangote refinery plant project</li>
        <li class="fw-bold m-2">NLNG Train project</li>
        <li class="fw-bold m-2">AKK Gas pipeline project</li>
        <li class="fw-bold m-2">Dangote refinery plant project</li>
    </ul>
</div>

<div class="row mb-4 moreDiv">
    <div class="col-4"></div>
    <div class="col-4"></div>
    <div class="col-4">
        <p class="text-end fw-bold more d-flex">more <i class="bi bi-chevron-double-right"></i></p>
    </div>
</div>

<div class="input-group input-group-sm mb-3 d-flex justify-content-end">
    <span class="input-group-text" id="searchSpan">Search</span>
    <input type="text" class="form-control" id="searchInput">
</div>`;

    document.getElementById('closeAboutUs').addEventListener('click', () => {
        projectDiv.innerHTML = originalContent;
    });
};