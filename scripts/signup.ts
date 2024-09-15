import { signup } from "../apis/services/auth.service";
// import { errorHandler } from "../libs/error-handler";
import { setSessionToken } from "../libs/session-manager";
// import { toast } from "../libs/toast";

const arrowSign = document.getElementById("arrowSignupId")  as HTMLDivElement;
const signupForm = document.getElementById("signup-form")  as HTMLFormElement;
const passwordInput = document.getElementById('password-input')as HTMLInputElement;
const passwordToggle = document.getElementById('password-toggle')  as HTMLDivElement;

//======================= form function ================================
signupForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  //=======================username & password ==========================
  const target = event.target as HTMLFormElement
  const userNameInput= target.username as HTMLInputElement;
  const passwordInput = target.password as HTMLInputElement;
  console.log("username", userNameInput.value);
  console.log("password", passwordInput.value);
  try {
    const response = await signup({
      username: userNameInput.value,
      password: passwordInput.value,
    });
    setSessionToken(response.token);
    // toast("welcome,You Signed In","success");

    setTimeout(() => {
      window.location.href = "/home";
    }, 1000);
  } catch (error) {
    // errorHandler(error);
    console.log(error);

  }
  // toast("welcome");
  // toast("welcome");
});

arrowSign.addEventListener("click",function(){
  window.location.href="/onboarding"
})
passwordToggle.addEventListener('click', togglePasswordVisibility);

function togglePasswordVisibility() {
  const inputType = passwordInput.getAttribute('type');
  if (inputType === 'password') {
    passwordInput.setAttribute('type', 'text');
    passwordToggle.innerHTML = `
      <path
        d="M12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5ZM12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17ZM2.28 12C4.05 9.78 7.2 8 12 8C16.8 8 19.95 9.78 21.72 12C19.95 14.22 16.8 16 12 16C7.2 16 4.05 14.22 2.28 12Z"
        fill="#6C757D"
      />
    `;
  } else {
    passwordInput.setAttribute("type", "password");
    passwordToggle.innerHTML = `
              <path
              d="M12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5ZM12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17ZM12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12C15 10.34 13.66 9 12 9Z"
              fill="#6C757D"
            />
    `;
  }
}
