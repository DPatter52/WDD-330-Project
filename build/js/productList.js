var d=(i,c,t)=>new Promise((a,o)=>{var l=e=>{try{s(t.next(e))}catch(n){o(n)}},r=e=>{try{s(t.throw(e))}catch(n){o(n)}},s=e=>e.done?a(e.value):Promise.resolve(e.value).then(l,r);s((t=t.apply(i,c)).next())});export default class u{constructor(c,t,a){this.category=c,this.dataSource=t,this.listElement=a}init(){return d(this,null,function*(){const c=yield this.dataSource.getData()})}renderList(c){const t=document.getElementById("product-card-template");c.forEach(a=>{const o=t.contentEditable.cloneNode(!0);this.listElement.appendChild(o)})}}