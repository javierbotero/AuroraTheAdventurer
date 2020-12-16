import Button from '../button/button';

export default class Menu extends Phaser.Scene {
  constructor () {
    super('Menu');
  }

  create() {
    this.add.image(100, 100, 'Aurora');
    this.button = new Button(this, 200, 200, 'btn1', 'btn2', 'Play', 'Game');
    if (!localStorage.getItem('username')) {
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
        document.querySelector('form').remove();
      });
      container.appendChild(label);
      container.appendChild(username);
      container.appendChild(send);
      document.body.appendChild(container);
    }
  }
}