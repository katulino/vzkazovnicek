import React, { Component } from 'react';
import HlavickaTabulky from './HlavickaTabulky/hlavickaTabulky';
import TeloTabulky from './TeloTabulky/teloTabulky'
import NewUserForm from './PridejUzivatele/Formular_NovyUzivatel'

export default class Tabulka extends Component {
    render() {
    		this.formPridat = null
   // formulář pro přidání uživatele proměnná a funkce
   		var popisek = "Přidat Vzkaz"
         if (this.props.ukazForm ===true) {
    			{this.formPridat = <NewUserForm pridej={this.props.pridatFunkce}
                                                        hlavicka = {this.props.hlavicka}/>
                                                        }
    			popisek = "Schovat formulář"
    				}
    		console.log(`pisuVtabulce ${this.props.telo}`);
    		console.log(`pisuVtabulce ${this.props.hlavicka}`);

    return (
    	<div className="tabulka_blok">
    		<h1 id='title'></h1>
         <button onClick={() =>this.props.formFunkce()} >{popisek}</button>
				{this.formPridat}
    		<table id = 'table'>

    				<HlavickaTabulky vstup={this.props.hlavicka} />
    				<TeloTabulky vstup={this.props.telo}
    				             smazat={this.props.smazat}
        				     editovat = {this.props.editFunkce}
        				     />
    			</table>

    	</div>       
  		);
  		}  
	}
