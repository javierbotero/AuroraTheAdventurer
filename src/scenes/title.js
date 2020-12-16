import Button from '../button/button';

export default class Menu extends Phaser.Scene {
  constructor () {
    super('Menu');
  }

  preload() {
    this.myCanvas = this.sys.game.canvas;
  }

  create() {
    const { width, height } = this.myCanvas;
    this.add.image(100, 100, 'Aurora');
    this.button = new Button(this, width / 2, height / 2 - 100, 'btn1', 'btn2', 'Play', 'Game');
    this.button2 = new Button(this, width / 2, height / 2 + 100, 'btn2', 'btn1', 'Leader Board', 'LeaderBoard');
    this.button.scale = 0.2;
    this.button2.scale = 0.2;
    this.button2.list[0].scaleX = 2;
    this.button2.list[1].style.fontSize = '50px';
    console.log(this.button2);
    if (!localStorage.getItem('username')) {
      this.button.setVisible(false);
      const container = document.createElement('form');
      const label = document.createElement('label');
      label.setAttribute('for', 'username');
      label.innerText = 'Please write your name';
      const username = document.createElement('input');
      username.setAttribute('id', 'username');
      username.setAttribute('placeholder', 'Your name');
      const send = document.createElement('input');
      send.setAttribute('value', 'Send');
      send.addEventListener('click', (e) => {
        e.preventDefault();
        localStorage.setItem('username', document.getElementById('username').value);
        document.querySelector('form').classList = 'remove';
        this.button.setVisible(true);
      });
      container.appendChild(label);
      container.appendChild(username);
      container.appendChild(send);
      document.body.appendChild(container);
    }
  }
}