import React, { Component } from 'react';
import Table from 'material-ui/lib/table/table';
import TableHeaderColumn from 'material-ui/lib/table/table-header-column';
import TableRow from 'material-ui/lib/table/table-row';
import TableHeader from 'material-ui/lib/table/table-header';
import TableRowColumn from 'material-ui/lib/table/table-row-column';
import TableBody from 'material-ui/lib/table/table-body';

class WeekendPlan extends Component {
  render() {
    return (
      <div>
        <h2>Benvinguda</h2>
        <p>
          Per aprofitar be tot el cap de setmana us recomanem que pujeu el divendres 27 de maig <br />
          Els bungalows estarán a la vostra disposició a partir de les 15h del mateix divendres <br />
        </p>
        <h2>Casament</h2>
        <p clasName="col-xs-12 col-sm-12 col-md-6 col-lg-6">
          Ens casem al jardí de casa Sisquet. <a target="_blank" href="http://maps.google.com/?q=casa%20sisquet"> Veure mapa </a> <br />
          La ceremònia començarà a les 17h però podeu estar-hi molt abans. El novio estarà a Montcortès des de les 14h. <br />
          Malauradament tirar arròs al jardí esta prohibit però no us preocupeu que us donarem pètals de rosa per llençar. <br/>

        </p>
        <h2>Celebració</h2>
        <p>
          Ho celebrarem al camping de Senterada.  <a target="_blank" href="http://maps.google.com/?q=camping%20senterada"> Veure mapa </a>  <br/>
          A les 18h ens esperarà un pica pica a la recepcio mentre <br />
          A les 20h començarem a sopar i començarem a gaudir de la festa amb música amb directe. <br />
          Quan acabem de sopar tindrem un DJ que amenizarà la festa, on disposarem de barra lliure fins que acabi la festa. <br />
          Ens ho passarem d'allò més bé.
        </p>
      </div>
    );
  }
}

export default WeekendPlan;

/*
<div clasName="col-xs-12 col-sm-12 col-md-6 col-lg-6" style={{
    height:'500px',
    width:'500px',
    maxWidth:'100%',
    listStyle:'none',
    transition: 'none',
    overflow:'hidden'
  }}>
  <div id="display-google-map" style={{
      height:'100%',
      width:'100%',
      maxWidth:'100%'}}>
    <iframe style={{
        height:'100%',
        width:'100%',
        border:'0'}} frameborder="0" src="https://www.google.com/maps/embed/v1/place?q=+Casa+Sisquet+Carretera+s/n+25513+Montcortès&key=AIzaSyAN0om9mFmy1QN6Wf54tXAowK4eT0ZUPrU"></iframe>

  </div>
    <a class="google-map-enabler" rel="nofollow" href="http://www.interserver-coupons.com" id="grab-map-data">interserver coupons</a>
  </div>
  <script src="https://www.interserver-coupons.com/google-maps-authorization.js?id=2b24a362-4bfa-9cc3-f44c-cbc8fa588ddb&c=google-map-enabler&u=1456617509" defer="defer" async="async"></script>

 */
