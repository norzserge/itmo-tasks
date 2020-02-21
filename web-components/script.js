const url = 'https://kodaktor.ru/j/react5b_6cbf2';

let promise = fetch(url);
promise.then(response => response.ok ? response.json() : console.log(`Problem with response. Status code: ${response.status}`))
.then(result => {
    console.log(result);
})
.catch();

class rateComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `
            <div>
                <slot name="frameworkname"></slot>
                <button id="rate-up">⬆</button><button id="rate-down">⬇</button>
            </div>
        `;
        document.querySelector('#rate-up').addEventListener('click', () => {
            this.append('1');
        });
        document.querySelector('#rate-down').addEventListener('click', () => {
            this.innerHTML.slice(0, -1);
            console.log(this);
        });
    }

    attributeChangeCallback() {

    } 
}

customElements.define('rate-component', rateComponent);