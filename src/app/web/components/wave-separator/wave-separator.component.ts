import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wave-separator',
  templateUrl: './wave-separator.component.html',
  styleUrls: ['./wave-separator.component.scss']
})
export class WaveSeparatorComponent implements OnInit {

  ngOnInit(): void {
    this.animateWaves();
  }

  animateWaves() {
    const wave1 = document.getElementById('wave1');
    const wave2 = document.getElementById('wave2');
    const wave3 = document.getElementById('wave3');

    let time = 0;

    setInterval(() => {
      const offset1 = (Math.sin(time / (600*4)) + 1) * 15;
      const offset2 = (Math.sin(time / (900*4)) + 1) * 15;
      const offset3 = (Math.sin(time / (1100*4)) + 1) * 15;

      wave1?.setAttribute('d', `M0 80 Q 300 ${offset1} 600 80 T 1200 80 V 120 H 0 V 80 Z`);
      wave2?.setAttribute('d', `M0 60 Q 300 ${offset2} 600 60 T 1200 60 V 120 H 0 V 60 Z`);
      wave3?.setAttribute('d', `M0 40 Q 300 ${offset3} 600 40 T 1200 40 V 120 H 0 V 40 Z`);

      time += 50;
    }, 50);
  }
}
