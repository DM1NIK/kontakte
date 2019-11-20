<template>
  <div id="app">
    <div class="container">
      <div class="card text-left bg-light">
        <div class="row align-items-center">
          <div class="col">
            <h1>MVC GIBS - Kontakte</h1>
          </div>
        </div>
      </div>
      <div class="card text-left">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <a class="navbar-brand" href="#">Navigation</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item"><router-link class="nav-link" to="/">Kontaktformular</router-link></li>
              <li class="nav-item"><router-link class="nav-link" to="/list">Erfasste Kontakte</router-link></li>
            </ul>
          </div>
        </nav>
        <div class="row m-3">
          <div class="col-12" style="overflow: auto">
            <router-view />
          </div>
        </div>
      </div>
      <div class="card text-center bg-light">
        <span class="small">&copy; Copyright GIBS Solothurn</span>
      </div>
    </div>
  </div>
</template>

<style>
  /* Bootstrap Navigation */
  .nav-tabs .nav-link { color: #495057}
  .nav-tabs .nav-link.active { color:#dc3545}
.navbar.dark .navbar-nav .nav-link.router-link-exact-active{
  color: #f3f2ff;
}
  /* Stacked Table */
  table.tstacked * {
    box-sizing:border-box;
  }

  table.tstacked {
    width:100%;
  }

  table.tstacked, table.tstacked td, table.tstacked tr, table.tstacked th {
    border:2px solid black;
    border-collapse: collapse;
    text-align: left;
  }

  table.tstacked td, table.tstacked th {
    padding:0.5em;
  }

  table.tstacked th {
    background:#eee;
    font-weight: bold;
  }

  #land-table {border-collapse:collapse;}

  #land-table tr:hover {background-color: #f3f2ff;}
  #land-table tr.selected td {
    background: none repeat scroll 0 0 #747072;
    color: #000000;
  }

  @media screen and (max-width:700px) {

    table.tstacked, table.tstacked tr, table.tstacked td {
      padding:0;
      border:1px solid black;
    }

    table.tstacked {
      border:none;
    }

    table.tstacked thead {
      display:none;
    }

    table.tstacked tr {
      float: left;
      width: 100%;
      margin-bottom: 2em;
    }

    table.tstacked td {
      float: left;
      width: 100%;
      padding:1em;
      word-break: break-all;
      /* display: block; */
      /* display: flex; */
    }

    table.tstacked td::before {
      content:attr(data-label);
      background: #eee;
      border-right:2px solid black;
      width: 45%;
      float:left;
      padding:1em;
      font-weight: bold;
      margin:-1em 1em -1em -1em;
      /* display: inline-block; */
      /* min-width: 100px; */
    }
  }

  /* End Stacked Table */
</style>