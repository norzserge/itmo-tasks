const url = 'https://kodaktor.ru/j/react5b_6cbf2';
let rateWrapper = '';

let initialVotes = value => {
    let container = '';
    for (let i = 0; i < value; i++) {container += '❤'}
    return container;
}

let promise = fetch(url);
promise.then(response => response.ok ? response.json() : console.log(`Problem with response. Status code: ${response.status}`))
.then(result => {
    result.forEach(element => {
        rateWrapper += `
            <rate-component>
                <span slot="frameworkname">${element.title}</span>
                <span slot="marks">${initialVotes(element.votes)}</span>
            </rate-component>
        `;
    });
    document.body.innerHTML = rateWrapper;
})
.catch(err => console.error(err));

class RateComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
        <div class="component">
            <slot name="frameworkname"></slot><slot name="marks"></slot>
            <div>
                <button id="rate-up">⬆</button><button id="rate-down">⬇</button>
            </div>
        </div>`;
        this.shadowRoot.querySelector('.component').style.marginBottom = '10px';
        this.rateUpBtn = this.shadowRoot.querySelector('#rate-up');
        this.rateDownBtn = this.shadowRoot.querySelector('#rate-down');
        this.marks = this.querySelector('[slot=marks]');
    }

    connectedCallback() {
        this.rateUpBtn.addEventListener('click', () => this.marks.textContent += '❤');
        this.rateDownBtn.addEventListener('click', () => this.marks.textContent = this.marks.textContent.slice(0, -1));
    }
}

customElements.define('rate-component', RateComponent);