// data changed, sync it with the DOM

state.on('main volume', (value) => {
  jQuery('#input_range_main_vol').val(value)
})

state.on('midi velocity sensing', (value) => {
  const velocityToggleBtn = jQuery('#velocity-toggler')

  if (value) {
    velocityToggleBtn.removeClass('btn-basic').addClass('btn-success').text('on')
  } else {
    velocityToggleBtn.removeClass('btn-success').addClass('btn-basic').text('off')
  }
})
