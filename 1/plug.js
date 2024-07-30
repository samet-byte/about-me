const o = document.querySelector('#outlet');
const p = document.querySelector('#plug');
const c = document.querySelector('#cord');
const root = document.documentElement;
let run = true;

// Add new elements
const infoDiv = document.createElement('div');
infoDiv.id = 'info';
document.body.appendChild(infoDiv);

const moreButton = document.createElement('button');
moreButton.id = 'moreButton';
moreButton.textContent = 'More Info';
moreButton.onclick = () => window.location.href = '/more';
infoDiv.appendChild(moreButton);

function updateInfo(plugged) {
  if (plugged) {
    infoDiv.innerHTML = `
      <h2>Electrical-Electronics Engineer</h2>
      <p>GPA: 3.0</p>
      <div id="skills">
        <div class="skill">Circuit Design</div>
        <div class="skill">PCB Layout</div>
        <div class="skill">Microcontrollers</div>
        <div class="skill">Signal Processing</div>
        <div class="skill">Power Electronics</div>
      </div>
    `;
    infoDiv.appendChild(moreButton);
    infoDiv.style.display = 'block';
    moreButton.style.display = 'block';
    root.style.setProperty('--bg-color', 'white');
    document.body.style.color = 'black';
  } else {
    infoDiv.style.display = 'none';
    moreButton.style.display = 'none';
    root.style.setProperty('--bg-color', 'black');
    document.body.style.color = 'white';
  }
}

o.addEventListener('click', function(e) {
  if (run) {
    run = false;
    p.classList.add('plugged');
    updateInfo(true);
  } else {
    run = true;
    p.classList.remove('plugged');
    updateInfo(false);
    moveThePlug(e);
  }
});

function moveThePlug(e) {
  if (run) {
    e = e.type == 'touchmove' ? e.touches[0] : e;
    var x = e.clientX - 40;
    var y = e.clientY - 40;
    p.style.left = x + 'px';
    p.style.top = y + 'px';
    c.style.width = window.innerWidth - x - 35 + 'px';
    c.style.height = window.innerHeight - y - 80 + 'px';
  }
}

['mousemove', 'touchmove'].forEach(function(evt) {
  window.addEventListener(evt, moveThePlug, false);
});

// Initialize the unplugged state
updateInfo(false);

// Initial positioning
moveThePlug({ clientX: window.innerWidth * 0.75, clientY: window.innerHeight * 0.75 });