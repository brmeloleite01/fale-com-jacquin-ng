import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', '../theme.min.css'],
})
export class AppComponent {
  title = 'fale-como-jacquin-ng';

  textToTranslate : string = "";

  textTranslated : string = "";

  translate(){
    this.textTranslated = this.textToTranslate
        .split(" ")
        .map((word) => {
            if (word.indexOf("ão") > 1) return word.replace("ão", "ión");

            if (word.length === 1 && word !== "é") return `l${word}`;

            word = word.replace("r", "rr");

            if (word.length > 2) word = word.slice(0, -1);

            return word;
        })
        .join(" ");

  }

  handleInput(){
    this.translate()
  }


}
