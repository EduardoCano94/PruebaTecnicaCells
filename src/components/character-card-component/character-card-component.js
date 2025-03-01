import { LitElement, html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { Styles } from "./character-card-component-styles.js";

export class CharacterCardComponent extends LitElement {
  static properties = {
    name: { type: String },
    status: { type: String },
    species: { type: String },
    type: { type: String },
    gender: { type: String },
    origin: { type: Object },
    location: { type: Object },
    image: { type: String },
  };

  static styles = [Styles];

  constructor() {
    super();
    this.name = "";
    this.status = "";
    this.species = "";
    this.type = "";
    this.gender = "";
    this.origin = {};
    this.location = {};
    this.image = "";
  }

  render() {
    const classes = {
      'card': true,
      'card--alive': this.status.toLowerCase() === 'alive',
      'card--dead': this.status.toLowerCase() === 'dead',
      'card--unknown': this.status.toLowerCase() === 'unknown'
    };

    const dimension = this.location && this.location.name ? this.location.name : 'Unknown';

    return html`
      <div class=${classMap(classes)}>
        <h2 class="card__title">${this.name}</h2>
        <div class="card__body">
          <p class="card__body--type"><strong>Type:</strong> ${this.type || 'Unknown'}</p>
          <p class="card__body--dimension"><strong>Dimension:</strong> ${dimension}</p>
          <p class="card__body--gender"><strong>Gender:</strong> ${this.gender}</p>
        </div>
        <img class="card__img" src="${this.image}" alt="Image of ${this.name}" />
      </div>
    `;
  }
}
