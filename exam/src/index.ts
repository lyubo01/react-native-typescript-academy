const logInButton = document.getElementById("loginButton") as HTMLButtonElement;
const usernameLoggedIn = document.getElementById("usernameLoggedIn") as HTMLElement;
const usernameRegister = document.getElementById("usernameRegister") as HTMLElement;
const passwordRegister = document.getElementById("passwordRegister") as HTMLElement;
const loggedInContent = document.getElementById("loggedInContent") as HTMLElement;
const article = document.getElementById("login") as HTMLElement;

 function loggedIn(){
loggedInContent.innerHTML =`
<div id="loggedInContent">
<span>Congratulations, ${usernameLoggedIn} you logged in successfully!</span>
</div>
`
}
 function addInnerHtml(){
  
  article.innerHTML = `
  <div class="section"></div>
  <main>
    <center>
      <img class="responsive-img" style="width: 250px;" src="https://i.imgur.com/ax0NCsK.gif" />
      <div class="section"></div>

      <h5 class="indigo-text">Please, login into your account</h5>
      <div class="section"></div>

      <div class="container">
        <div class="z-depth-1 grey lighten-4 row" style="display: inline-block; padding: 32px 48px 0px 48px; border: 1px solid #EEE;">

          <form class="col s12" method="post" id='usernameLoggedIn'>
            <div class='row'>
              <div class='col s12'>
              </div>
            </div>

            <div class='row'>
              <div class='input-field col s12'>
                <input class='validate' type='text' name='username'  />
                <label for='usernameLoggedIn'>Enter your username</label>
              </div>
            </div>

            <div class='row'>
              <div class='input-field col s12'>
                <input class='validate' type='password' name='password' id='password' />
                <label for='password'>Enter your password</label>
              </div>
              
            </div>

            <br />
            <center>
              <div class='row'>
                <button id="loginButton" type='submit' name='btn_login' class='col s12 btn btn-large waves-effect indigo'>Login</button>
              </div>
            </center>
          </form>
        </div>
      </div>
      <button id="buton">Create account</a>
    </center>

    <div class="section"></div>
    <div class="section"></div>
  </main>
  `
  article.querySelector("#buton")?.addEventListener("click", () => addRegisterForm())
  article.querySelector("#logInButton")?.addEventListener("click", () => loggedIn())
}

async function addRegisterForm(){
  const article1 = document.getElementById("index-banner") as HTMLElement;
  article1.innerHTML = `
  <div class="section no-pad-bot" id="banner">
        <div class="container">
            <h1 class="header center lighten-1  ">Admin Register</h1>

            <div class="row">
                <form id="add-post-form" class="col s12">
                    <div class="row">
                        <input id="id" name="id" hidden>
                    </div>
                    <div class="row">
                        <div class="input-field col s6">
                            <input id="title" name="title" type="text" class="validate" pattern="[A-Za-z]{2,15}" >
                            <label for="title">First name</label>
                            <span class="helper-text" data-error="First name must contain ONLY LETTERS between 2 and 15 characters" data-success="" id="blog-title" ></span>
                        </div>
                        <div class="input-field col s6">
                            <input id="authorId" name="authorId" type="text" class="validate" pattern="[A-Za-z]{2,15}">
                            <label for="authorId">Last name</label>
                            <span class="helper-text" data-error="Last name must contain LETTERS ONLY between 2 and 15 characters" data-success="" id="author-id" > </span>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12">
                        <input id="username" type="text" class="validate" pattern="^[a-zA-Z0-9]{5,15}">
                        <label for="username">Username</label>
                        <span class="helper-text" data-error="invalid username" data-success=""></span>
                        </div>
                    </div>   
                    <div class="row">
                        <div class="input-field col s12">
                        <input id="password" type="password" class="validate" pattern="^[a-zA-Z0-9]{8,}">
                        <label for="password">Password</label>
                        <span class="helper-text" data-error="invalid password" data-success=""></span>
                     </div>
                    <div class="row">
                        <div class="input-field col s12">
                            <textarea id="content" name="content" class="materialize-textarea validate" pattern="^[a-zA-Z0-9]{1,512}"></textarea>
                            <label for="content">Small description</label>
                            <span class="helper-text" data-error="Post text must contain max 512 characters" data-success="" id="post-text"></span>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12">
                            <input id="imageUrl" name="imageUrl" type="url" class="validate">
                            <label for="imageUrl"> Image URL</label>
                            <span class="helper-text" data-error="valid url needed" data-success="" id="url"></span>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12">
                           <select class="browser-default">
                             <option value="" disabled selected>Gender</option>
                             <option value="1">Male</option>
                             <option value="2">Female</option>
                             <option value="3">Other</option>
                           </select>
                         </div>
                       </div>
                       <div class="row">
                        <div class="input-field col s12">
                           <select class="browser-default">
                             <option value=""   selected="">User</option>
                             <option value="2" disabled >Administrator</option>
                           </select>
                         </div>
                       </div>
                       <div class="row">
                        <div class="input-field col s12">
                           <select class="browser-default">
                             <option value="" disabled selected>Status</option>
                             <option value="1"disabled >ACTIVE</option>
                             <option value="2"disabled >SUSPENDED</option>
                             <option value="1"disabled >DEACTIVATED</option>
                            
                           </select>
                         </div>
                       </div>
                    <button class="btn waves-effect waves-light" type="submit" name="submit" id="submit">Register
                        <i class="material-icons right">send</i>
                    </button>
                    <div id="personId">

                    </div>
                   
                    
                </form>
            </div>
        </div>
    </div>

  `
  article1.querySelector("#submit")?.addEventListener("click", () => addInnerHtml())
}


addInnerHtml()