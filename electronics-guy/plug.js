const o = document.querySelector('#outlet');
const p = document.querySelector('#plug');
const c = document.querySelector('#cord');
const root = document.documentElement;
let run = true;

// Create content wrapper
const contentWrapper = document.createElement('div');
contentWrapper.id = 'content-wrapper';
document.body.appendChild(contentWrapper);

// Create outlet container
const outletContainer = document.createElement('div');
outletContainer.id = 'outlet-container';
contentWrapper.appendChild(outletContainer);
outletContainer.appendChild(o);

// Add new elements
const infoDiv = document.createElement('div');
infoDiv.id = 'info';
contentWrapper.appendChild(infoDiv);

const moreButton = document.createElement('button');
moreButton.id = 'moreButton';
moreButton.textContent = 'More Info';
moreButton.onclick = () => window.location.href = '/more';
contentWrapper.appendChild(moreButton);

function updatePlugPosition() {
  const outletRect = o.getBoundingClientRect();
  const plugRect = p.getBoundingClientRect();
  
  const centerX = outletRect.left + outletRect.width / 2 - plugRect.width / 2;
  const bottomY = outletRect.bottom - plugRect.height / 2;
  
  p.style.left = `${centerX}px`;
  p.style.top = `${bottomY}px`;
}

function updateInfo(plugged) {
  if (plugged) {
    infoDiv.innerHTML = `
      <h2>Electrical-Electronics Engineer</h2>
      // <p>GPA: 3.0</p>
      <div id="skills">
        <div class="skill">Skill 1</div>
        <div class="skill">Skill 2</div>
        <div class="skill">Skill 3</div>
      </div>
    `;
    infoDiv.style.display = 'block';
    moreButton.style.display = 'block';
    root.style.setProperty('--bg-color', 'white');
    document.body.style.color = 'black';
    contentWrapper.style.transform = 'translateY(-25%)';
    setTimeout(updatePlugPosition, 10); // Slight delay to ensure DOM has updated
  } else {
    infoDiv.style.display = 'none';
    moreButton.style.display = 'none';
    root.style.setProperty('--bg-color', 'black');
    document.body.style.color = 'white';
    contentWrapper.style.transform = 'translateY(0)';
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

// Update plug position on window resize
window.addEventListener('resize', function() {
  if (!run) {
    updatePlugPosition();
  }
});

// Initial positioning
moveThePlug({ clientX: window.innerWidth * 0.75, clientY: window.innerHeight * 0.75 });