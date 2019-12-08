class Villain extends Person {
  constructor(name) {
      super(name);

  }
  render() {
      return `
      <div class="Villain">
         <img src="./Villain.jpg" />
          <div class="health">${this.health}</div>
      <div></div>
    `
  }

}