const template = document.createElement('template');
template.innerHTML = `
    <style>
        .CardOne{
            display:block;
            margin:35px;
            background-color: #fff;
            border-radius: 20px;
            overflow: hidden;
        }
        
        .Banner{
            display: flex;
            justify-content: space-between;
        }
        
        h1{
            padding:12px;
            font-size: 20px;
        }
        
        button{
            padding:12px;
            background-color: #ddd;
        
        }
        button:hover{
            text-decoration:underline;
        }
        .ContentRow{
            display:flex;
            flex-direction: row;
            border-top: 1px solid #333;
        }
        
        p{
            padding:12px;
        }
        
        
        .close{display:none;}
    </style>
    <article class="CardOne" id="card"> 
        <div id= "Banner" class="Banner"> 
            <h1 id = "title">
                Header
            </h1>
            <button id = "dismiss" onclick="toggleClose()">
                close
            </button>
        </div>
        <div class="ContentRow">
            <image id = "media1"/>
            <p id = "p1">
                paragraph1
            </p>
        </div>
        <div class="ContentRow">
            <p id = "p2">
                paragraph2
            </p>
            <image id="media2"/>
        </div>
    </article>
`;

class ContentCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));

    }
    set data(val){
        this.setAttribute('data', val);
        let data = JSON.parse(val);
        console.log(data);
        if(data.hasOwnProperty("heading")){
            this.shadowRoot.querySelector('h1').innerText = data.heading.title;
            this.shadowRoot.querySelector('button').innerText = data.heading.dismiss.label;
        }else{
            this.shadowRoot.getElementById("Banner").classList.toggle("close");
        }
    }
    
    get data(){
        return this.getAttribute('data')
    }
    attributeChangedCallback(name, oldValue, newValue) {
        console.log(this.data);

         

    }

    
}

window.customElements.define('content-card', ContentCard);