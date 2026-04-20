<!DOCTYPE html>
<html>
<head>
  <title>Login</title>

  <style>
    body {
      margin: 0;
      font-family: Arial, sans-serif;
      background: black;
      overflow: hidden;
    }

    /* TOP BAR */
    .navbar {
      position: fixed;
      top: 0;
      width: 100%;
      height: 50px;
      background: #111;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 20px;
      color: white;
    }

    .nav-links span {
      margin: 0 15px;
      color: #ccc;
      cursor: pointer;
    }

    .nav-links span:hover {
      color: white;
    }

    .signup {
      background: #335fff;
      padding: 6px 12px;
      border-radius: 6px;
    }

    /* BACKGROUND */
    .background {
      position: absolute;
      width: 100%;
      height: 100%;

      background: radial-gradient(circle, rgba(0,0,0,0.5), rgba(0,0,0,0.9)),
                  url("https://picsum.photos/1920/1080");

      background-size: cover;
      background-position: center;
      filter: blur(2px);
    }

    /* LOGIN BOX */
    .login-box {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      background: #1e1e24;
      padding: 30px;
      border-radius: 12px;
      width: 300px;
      text-align: center;
      color: white;
      box-shadow: 0 10px 40px rgba(0,0,0,0.7);
    }

    input {
      width: 100%;
      padding: 10px;
      margin: 8px 0;
      border-radius: 6px;
      border: none;
      background: #2a2a30;
      color: white;
    }

    button {
      width: 100%;
      padding: 10px;
      margin-top: 10px;
      background: #335fff;
      border: none;
      border-radius: 6px;
      color: white;
      cursor: pointer;
    }

    button:hover {
      background: #244edb;
    }
  </style>
</head>

<body>

  <div class="navbar">
    <div><strong>LOGO</strong></div>
    <div class="nav-links">
      <span>Charts</span>
      <span>Marketplace</span>
      <span>Create</span>
      <span>Robux</span>
    </div>
    <div class="signup">Sign Up</div>
  </div>

  <div class="background"></div>

  <div class="login-box">
    <h2>Login</h2>

    <input type="text" placeholder="Username">
    <input type="password" placeholder="Password">

    <button>Log In</button>
  </div>

</body>
</html>