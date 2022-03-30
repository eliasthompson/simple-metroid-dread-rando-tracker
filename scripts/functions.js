function toggleItem(e) {
  e.preventDefault();

  var parent = e.currentTarget;
  var items = parent.querySelector('.items');

  if (e.which === 1 && !items.classList.contains('locked')) items.classList.toggle('grayscale');

  checkGoMode();
};

function checkGoMode() {
  var unacquiredItemNodes = document.querySelectorAll('.items.grayscale');
  var goModeNode = document.querySelector('#go-mode');
  var unacquiredItems = [];
  let goMode = true;

  unacquiredItemNodes.forEach(function (item) {
    unacquiredItems.push(item.getAttribute('id'));
  });

  if (
    unacquiredItems.includes('morphball')
    || (
      unacquiredItems.includes('bomb')
      && unacquiredItems.includes('speedbooster')
      && unacquiredItems.includes('spacejump')
    )
    || unacquiredItems.includes('flashshift')
    || unacquiredItems.includes('grapplebeam')
    || unacquiredItems.includes('supermissile')
    || unacquiredItems.includes('screwattack')
    || unacquiredItems.includes('crossbomb')
    || unacquiredItems.includes('wavebeam')
    || unacquiredItems.includes('powerbomb')
  ) {
    goMode = false;
  }

  if (goMode && goModeNode.classList.contains('grayscale')) goModeNode.classList.remove('grayscale');
  else if (!goMode) goModeNode.classList.add('grayscale');
};
