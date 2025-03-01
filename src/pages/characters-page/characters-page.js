import { LitElement, html } from "lit";
import { Styles } from "./characters-page-styles.js";
import "../../components/characters-component-dm/index.js";
import "../../components/character-card-list-component/index.js";

export class CharactersPage extends LitElement {
  static styles = [Styles];

  static properties = {
    _data: { type: Object },
  };

  constructor() {
    super();
    this._data = {
      Human: [],
      Alien: [],
    };
  }

  connectedCallback() {
    super.connectedCallback();
    
    this.addEventListener('characters-loaded', this.handleCharactersLoaded);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    
    this.removeEventListener('characters-loaded', this.handleCharactersLoaded);
  }

  handleCharactersLoaded(event) {
    
    this._data = event.detail;
  }

  render() {
    return html`
      <div>
        <h1>The <span>Rick & Morty</span> API</h1>
        <characters-component-dm></characters-component-dm>
        <div class="content">
        ${this._data.Alien && this._data.Alien.length
          ? html`<character-card-list-component
              species="Alien"
              .data=${this._data.Alien}
            />`
          : html`<p>No hay alienes a la vista!</p>`}
        </div>
        <div class="content">
        ${this._data.Human && this._data.Human.length
          ? html`<character-card-list-component
              species="Human"
              .data=${this._data.Human}
            />`
          : html`<p>No queda ningún humano</p>`}
        </div>
      </div>
    `;
  }
}
customElements.define("characters-page", CharactersPage);