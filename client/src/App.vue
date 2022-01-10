<template>
  <div id="app">
    <div id="nav">
      <nav
        class="navbar navbar-expand-lg navbar-light fixed-top py-3"
        id="mainNav"
      >
        <div class="container px-4 px-lg-5">
          <a class="navbar-brand" href="#page-top">Dentistimo</h4> </a>
          <button
            class="navbar-toggler navbar-toggler-right"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ms-auto my-2 my-lg-0">
              <li class="nav-item"><router-link to="/"> Home &nbsp; &nbsp; &nbsp; </router-link></li>
              <li class="nav-item">
                <a class="nav-item" href="#services">  Services &nbsp; &nbsp; &nbsp; </a>
              </li>
              <li class="nav-item">
                <router-link to="/about">  About</router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    <header class="masthead">
      <div class="container px-4 px-lg-5 h-100">
        <div
          class="
            row
            gx-4 gx-lg-5
            h-100
            align-items-center
            justify-content-center
            text-center
          "
        >
          <div class="col-lg-8 align-self-end">
            <h1 class="text-black font-weight-bold">
              Choose your clinic from the map 
            </h1>
            <hr class="divider" />
          </div>
          <div class="col-lg-8 align-self-baseline">
            <p class="text-white-75 mb-5">             
            </p>
            <a class="btn btn-primary btn-xl" href="#about">Choose a Clinic!</a>
          </div>
        </div>
      </div>
    </header>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
