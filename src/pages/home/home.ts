import { Component, Injectable } from '@angular/core';
import { Html5Audio } from "../../providers/html5audio";
import { NavController } from "ionic-angular";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

@Injectable()
export class HomePage {

  stations = [
    {
      name: "Rede",
      url: "http://198.24.156.115:9300/;"
    },
    {
      name: "Aracati",
      url: "http://198.24.156.115:9304/;"
    },
    {
      name: "Crateús",
      url: "http://198.24.156.115:9308/;"
    },
    {
      name: "Paraipaba",
      url: "http://198.24.156.115:9302/;"
    },
    {
      name: "St° Quitéria",
      url: "http://198.24.156.115:9316/;"
    },
    {
      name: "Redenção",
      url: "http://198.24.156.115:9310/;"
    },
    {
      name: "Sobral",
      url: "http://198.24.156.115:9306/;"
    }
  ];

  constructor(
      private player: Html5Audio,
      public navCtrl: NavController
  ) {

    {
      this.player.plaY
    }

  }

  ionViewDidEnter() {
    this.player = new Html5Audio();
  }

  play(url: string) {
    this.player.play(url);
  }

  stop() {
    this.player.stop();
  }

  pause(){
    this.player.pause();
  }

}
