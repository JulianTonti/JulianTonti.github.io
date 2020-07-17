import sync from '../../js/unyield.js';
import require from '../../js/require.js';

require([
  '../../js/moment.js',
  '../../js/uhtml.js',
], render);

let state = {
  days : 0
};
let proxy = new Proxy(state, { 
  set : function(obj, key, val) {
    obj[key] = val;
    render();
    return true;
  }
});

function render()
{
  uhtml.render(document.body, uhtml.html`<div>
    <input type='date' oninput=${update} />
  </div>
  <div>
    You have been alive for ${proxy.days} days.
  </div>
  `);
}

function update(){
  let a = moment(this.value);
  let b = moment();
  proxy.days = b.diff(a, 'days');
}



