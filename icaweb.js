const ICAWEB = {
    elemento: function (tag, attributes, ...content) {
        const element = document.createElement(tag);
        
        if (attributes) {
            for (const key in attributes) {
                if (attributes.hasOwnProperty(key)) {
                    element.setAttribute(key, attributes[key]);
                }
            }
        }
        
        if (content) {
            content.forEach(item => {
                if (typeof item === 'string') {
                    element.appendChild(document.createTextNode(item));
                } else {
                    element.appendChild(item);
                }
            });
        }
        
        return element;
    },
    
    loadHTML: function (html, targetId) {
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            targetElement.innerHTML = "";
            targetElement.appendChild(html);
        } else {
            console.error("Element with ID '" + targetId + "' not found.");
        }
    },
    
    h1: function(attributes, content) {
        return this.elemento('h1', attributes, content);
    },
    
    h2: function(attributes, content) {
        return this.elemento('h2', attributes, content);
    },
    
    h3: function(attributes, content) {
        return this.elemento('h3', attributes, content);
    },
    
    h4: function(attributes, content) {
        return this.elemento('h4', attributes, content);
    },
    
    h5: function(attributes, content) {
        return this.elemento('h5', attributes, content);
    },
    
    h6: function(attributes, content) {
        return this.elemento('h6', attributes, content);
    },
    
    p: function(attributes, content) {
        return this.elemento('p', attributes, content);
    },
    
    div: function(attributes, ...content) {
        return this.elemento('div', attributes, ...content);
    },
    
    span: function(attributes, content) {
        return this.elemento('span', attributes, content);
    },
    
    ul: function(attributes, ...content) {
        return this.elemento('ul', attributes, ...content);
    },
    
    ol: function(attributes, ...content) {
        return this.elemento('ol', attributes, ...content);
    },
    
    li: function(attributes, content) {
        return this.elemento('li', attributes, content);
    },
    
    a: function(attributes, content) {
        return this.elemento('a', attributes, content);
    },
    
    input: function(attributes) {
        return this.elemento('input', attributes);
    },
    
    button: function(attributes, content) {
        return this.elemento('button', attributes, content);
    },
    
    img: function(attributes) {
        return this.elemento('img', attributes);
    },
    
    form: function(attributes, ...content) {
        return this.elemento('form', attributes, ...content);
    },
    
    label: function(attributes, content) {
        return this.elemento('label', attributes, content);
    },
    
    textarea: function(attributes, content) {
        return this.elemento('textarea', attributes, content);
    },
    
    header: function(attributes, ...content) {
        return this.elemento('header', attributes, ...content);
    },
    
    footer: function(attributes, ...content) {
        return this.elemento('footer', attributes, ...content);
    },
    
    nav: function(attributes, ...content) {
        return this.elemento('nav', attributes, ...content);
    },
    
    section: function(attributes, ...content) {
        return this.elemento('section', attributes, ...content);
    },
    
    article: function(attributes, ...content) {
        return this.elemento('article', attributes, ...content);
    },
    
    select: function(attributes, ...content) {
        return this.elemento('select', attributes, ...content);
    },
    
    option: function(attributes, content) {
        return this.elemento('option', attributes, content);
    },
    
    br: function(attributes) {
        return this.elemento('br', attributes);
    },
    
    table: function(attributes, ...content) {
        return this.elemento('table', attributes, ...content);
    },
    
    tr: function(attributes, ...content) {
        return this.elemento('tr', attributes, ...content);
    },
    
    th: function(attributes, content) {
        return this.elemento('th', attributes, content);
    },
    
    td: function(attributes, content) {
        return this.elemento('td', attributes, content);
    },
    
    thead: function(attributes, ...content) {
        return this.elemento('thead', attributes, ...content);
    },
    
    tbody: function(attributes, ...content) {
        return this.elemento('tbody', attributes, ...content);
    },
    
    tfoot: function(attributes, ...content) {
        return this.elemento('tfoot', attributes, ...content);
    },
    
    main: function(attributes, ...content) {
        return this.elemento('main', attributes, ...content);
    },
    
    iframe: function(attributes) {
        return this.elemento('iframe', attributes);
    },
    
    article: function(attributes, ...content) {
        return this.elemento('article', attributes, ...content);
    },
    
    aside: function(attributes, ...content) {
        return this.elemento('aside', attributes, ...content);
    },
    
    audio: function(attributes, ...content) {
        return this.elemento('audio', attributes, ...content);
    },
    
    b: function(attributes, content) {
        return this.elemento('b', attributes, content);
    },
    
    canvas: function(attributes) {
        return this.elemento('canvas', attributes);
    },
    
    caption: function(attributes, ...content) {
        return this.elemento('caption', attributes, ...content);
    },
    
    cite: function(attributes, content) {
        return this.elemento('cite', attributes, content);
    },
    
    code: function(attributes, content) {
        return this.elemento('code', attributes, content);
    },
    
    col: function(attributes) {
        return this.elemento('col', attributes);
    },
    
    colgroup: function(attributes, ...content) {
        return this.elemento('colgroup', attributes, ...content);
    },
    
    datalist: function(attributes, ...content) {
        return this.elemento('datalist', attributes, ...content);
    },
    
    del: function(attributes, content) {
        return this.elemento('del', attributes, content);
    },
    
    details: function(attributes, ...content) {
        return this.elemento('details', attributes, ...content);
    },
    
    dfn: function(attributes, content) {
        return this.elemento('dfn', attributes, content);
    },
    
    dialog: function(attributes, ...content) {
        return this.elemento('dialog', attributes, ...content);
    },
    
    em: function(attributes, content) {
        return this.elemento('em', attributes, content);
    },
    
    fieldset: function(attributes, ...content) {
        return this.elemento('fieldset', attributes, ...content);
    },
    
    figure: function(attributes, ...content) {
        return this.elemento('figure', attributes, ...content);
    },
    
    figcaption: function(attributes, ...content) {
        return this.elemento('figcaption', attributes, ...content);
    },
    
    footer: function(attributes, ...content) {
        return this.elemento('footer', attributes, ...content);
    },
    
    header: function(attributes, ...content) {
        return this.elemento('header', attributes, ...content);
    },
    
    hr: function(attributes) {
        return this.elemento('hr', attributes);
    },
    
    iframe: function(attributes) {
        return this.elemento('iframe', attributes);
    },
    
    legend: function(attributes, content) {
        return this.elemento('legend', attributes, content);
    },
    
    mark: function(attributes, content) {
        return this.elemento('mark', attributes, content);
    },
    
    menu: function(attributes, ...content) {
        return this.elemento('menu', attributes, ...content);
    },
    
    meter: function(attributes, ...content) {
        return this.elemento('meter', attributes, ...content);
    },
    
    optgroup: function(attributes, ...content) {
        return this.elemento('optgroup', attributes, ...content);
    },
    
    output: function(attributes, content) {
        return this.elemento('output', attributes, content);
    },
    
    progress: function(attributes, content) {
        return this.elemento('progress', attributes, content);
    },
    
    q: function(attributes, content) {
        return this.elemento('q', attributes, content);
    },
    
    rp: function(attributes, content) {
        return this.elemento('rp', attributes, content);
    },
    
    rt: function(attributes, content) {
        return this.elemento('rt', attributes, content);
    },
    
    ruby: function(attributes, ...content) {
        return this.elemento('ruby', attributes, ...content);
    },
    
    s: function(attributes, content) {
        return this.elemento('s', attributes, content);
    },
    
    samp: function(attributes, content) {
        return this.elemento('samp', attributes, content);
    },
    
    small: function(attributes, content) {
        return this.elemento('small', attributes, content);
    },
    
    source: function(attributes) {
        return this.elemento('source', attributes);
    },
    
    strong: function(attributes, content) {
        return this.elemento('strong', attributes, content);
    },
    
    sub: function(attributes, content) {
        return this.elemento('sub', attributes, content);
    },
    
    sup: function(attributes, content) {
        return this.elemento('sup', attributes, content);
    },
    
    template: function(attributes, ...content) {
        return this.elemento('template', attributes, ...content);
    },
    
    time: function(attributes, content) {
        return this.elemento('time', attributes, content);
    },
    
    track: function(attributes) {
        return this.elemento('track', attributes);
    },
    
    u: function(attributes, content) {
        return this.elemento('u', attributes, content);
    },
    
    var: function(attributes, content) {
        return this.elemento('var', attributes, content);
    },
    
    video: function(attributes, ...content) {
        return this.elemento('video', attributes, ...content);
    },
    
    wbr: function(attributes) {
        return this.elemento('wbr', attributes);
    }
};

let counter = 0;

function incrementCounter() {
    counter++;
}

function updateMybuttonCounter() {
    const mybutton = document.getElementById("mybutton");
    incrementCounter()
    mybutton.innerText = "Counter: " + counter
}

const htmlContent = (
    ICAWEB.div({id: "content"},
        ICAWEB.h1(null, "Welcome to icaweb (made with chatgpt)!"),
        ICAWEB.h2(null, "Click in the button"),
        ICAWEB.button({onclick: "updateMybuttonCounter()", id: "mybutton"}, `Counter: ${counter}`)
    )  
);

// you need to use the content in a div

ICAWEB.loadHTML(htmlContent, 'web');