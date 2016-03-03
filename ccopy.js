// Copy to clipboard with tooltip
// <a href="#" onclick="copyfieldvalue(event, 'sometextfield');return false">Copy</a>
// load <script>createtooltip();</script> somewhre on the page

var tooltip,
  hidetooltiptimer

function createtooltip() {
  tooltip = document.createElement('div')
  tooltip.style.cssText = 'position:absolute; background:black; color:white; padding:4px;z-index:10000;' 
                        + 'border-radius:2px; font-size:12px;box-shadow:3px 3px 3px rgba(0,0,0,.4);'
                        + 'opacity:0;transition:opacity 0.3s'
  tooltip.innerHTML = 'Copied!'
  document.body.appendChild(tooltip)
}

function showtooltip(e) {
  var evt = e || event
  clearTimeout(hidetooltiptimer)
  tooltip.style.left = evt.pageX + 25 + 'px'
  tooltip.style.top = evt.pageY + 15 + 'px'
  tooltip.style.opacity = 1
  hidetooltiptimer = setTimeout(function() {
    tooltip.style.opacity = 0
  }, 500)
}

function copyfieldvalue(e, id) {
  var field = document.getElementById(id)
  field.focus()
  field.setSelectionRange(0, field.value.length)
  var copysuccess = copySelectionText()
  if (copysuccess) {
    showtooltip(e)
  }
}

function copySelectionText() {
  var copysuccess
  try {
    copysuccess = document.execCommand("copy")
  } catch (e) {
    copysuccess = false
  }
  return copysuccess
}
