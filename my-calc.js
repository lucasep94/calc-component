const template = document.createElement('template');
const html = `
<div class="main">
<div class="box-formula">
    <span class="text-formula"></span>
    <span class="result"></span>
</div>
<table>
    <tr class="row">
        <td class="button"><input type="button" onclick="insertValue(this);" value="%" /></td>
        <td class="button"><input type="button" onclick="empty();" value="C" /></td>
        <td class="button"><input type="button" onclick="remove();" value="CE" /></td>
        <td class="button"><input type="button" onclick="insertValue(this);" value="/" /></td>
    </tr>
    <tr class="row">
        <td class="button"><input type="button" onclick="insertValue(this);" value="7" /></td>
        <td class="button"><input type="button" onclick="insertValue(this);" value="8" /></td>
        <td class="button"><input type="button" onclick="insertValue(this);" value="9" /></td>
        <td class="button"><input type="button" onclick="insertValue(this);" value="*" /></td>
    </tr>
    <tr class="row">
        <td class="button"><input type="button" onclick="insertValue(this);" value="4" /></td>
        <td class="button"><input type="button" onclick="insertValue(this);" value="5" /></td>
        <td class="button"><input type="button" onclick="insertValue(this);" value="6" /></td>
        <td class="button"><input type="button" onclick="insertValue(this);" value="-" /></td>
    </tr>
    <tr class="row">
        <td class="button"><input type="button" onclick="insertValue(this);" value="1" /></td>
        <td class="button"><input type="button" onclick="insertValue(this);" value="2" /></td>
        <td class="button"><input type="button" onclick="insertValue(this);" value="3" /></td>
        <td class="button"><input type="button" onclick="insertValue(this);" value="+" /></td>
    </tr>
    <tr class="row">
        <td class="button"><input type="button" class="zero" onclick="insertValue(this);" value="0" /></td>
        <td class="button"><input type="button" onclick="calculate();" value="=" /></td>
    </tr>
</table>
</div>
`;
const styles = `
<style>


.main {
    display: flex;
    flex-direction: column;
    width: 250px;
    margin: auto;
    background: #d0d0d0;
    border-radius: 4px;
    box-shadow: 0px 5px 17px 5px rgba(0, 0, 0, 0.15);
}

.box-formula {
    height: 50px;
    margin: 15px;
    text-align: end;
    padding: 0 15px;
}

.text-formula {
    display: block;
}

span.result {
    font-size: 24px;
    font-weight: bold;
}

.row {
    text-align: center;
}

.button {
    display: inline-block;
    margin: 5px;
}

.button input {
    width: 45px;
    height: 45px;
    text-align: center;
    box-sizing: border-box;
    border-radius: 50%;
    border: none;
    background: none;
    cursor: pointer;
    outline: none;
}

.button input:active {
    font-size: 12px;
}

input.zero {
    width: 160px;
}
</style>
`;

template.innerHTML = `${html}${styles}`;

class MyCalculadora extends HTMLElement {

    static get observedAttributes() {
        return ['formula', 'result']
    }

    constructor() {
        super();
        this.formula = '';
        this.result = '';

        if (!this.shadowRoot) {
            this.attachShadow({
                mode: 'open'
            });
            this.shadowRoot.appendChild(template.content.cloneNode(true));
        }
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if(name === 'formula'){
            this.shadowRoot.querySelector('.text-formula').innerText = newValue;
        }
        if(name === 'result'){
            this.shadowRoot.querySelector('.result').innerText = newValue;
        }
    }

    set formula(value) {
        if (this.getAttribute('formula') !== value) {
            this.setAttribute('formula', value);
        }
    }

    get formula() {
        return this.getAttribute('formula');
    }

    set result(value) {
        if (this.getAttribute('result') !== value) {
            this.setAttribute('result', value);
        }
    }

    get result() {
        return this.getAttribute('result');
    }

    

}

customElements.define('my-calc', MyCalculadora);