function toggleItem(e) {
  e.preventDefault();

  var parent = e.currentTarget;
  var items = parent.querySelector('.items');

  if (e.which === 1 && !items.classList.contains('locked')) {
    items.classList.toggle('grayscale');
  } else if (e.which === 3 && !items.classList.contains('locked') && parent.classList.contains('boss')) {
    parent.classList.toggle('dna');
  }

  checkGoMode();
};

function checkGoMode() {
  var acquiredItemNodes = document.querySelectorAll('.items:not(.grayscale)');
  var bossesNodes = document.querySelectorAll('.item.boss.dna');
  var goModeNode = document.querySelector('#go-mode');
  var acquiredItems = [];
  let goMode = false;

  acquiredItemNodes.forEach(function (item) {
    acquiredItems.push(item.getAttribute('id'));
  });

  if (
    // Hard required
    acquiredItems.includes('morphball')
    && acquiredItems.includes('powerbomb')
    && acquiredItems.includes('screwattack')
    && (
      acquiredItems.includes('bomb')
      || acquiredItems.includes('crossbomb')
      || acquiredItems.includes('speedbooster')
      || acquiredItems.includes('spacejump')
    )
    && (
      (
        // Front door
        acquiredItems.includes('spidermagnet')
        && acquiredItems.includes('grapplebeam')
        && acquiredItems.includes('supermissile')
        && acquiredItems.includes('crossbomb')
      ) || (
        // Back door (psuedowave)
        acquiredItems.includes('chargebeam')
        && acquiredItems.includes('gravitysuit')
        && (
          (
            // Ferenia Front
            acquiredItems.includes('grapplebeam')
          ) || (
            // Cyan Teleporter
            acquiredItems.includes('diffusionbeam')
            && acquiredItems.includes('stormmissile')
          )
        )
      )
    )
  ) {
    goMode = true;
  }

  bossesNodes.forEach(function (boss) {
    if (goMode && boss.querySelectorAll('.items.grayscale').length) goMode = false;
  });

  if (goMode && goModeNode.classList.contains('grayscale')) goModeNode.classList.remove('grayscale');
  else if (!goMode) goModeNode.classList.add('grayscale');
};
