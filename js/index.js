$(window).on('load',function(){
  // ここから文字を<span></span>で囲む記述
  $('.topBox__name').children().addBack().contents().each(function() {
  if (this.nodeType == 3) {
  $(this).replaceWith($(this).text().replace(/(\S)/g, '<span>$1</span>'));
  }
  });
  // ここから一文字ずつフェードインさせる記述
  $('.topBox__name').css({'opacity':1});
  let $typLength = $('.topBox__name').children().length
  for (var i = 0; i <= $typLength; i++) {
  $('.topBox__name').children('span:eq('+i+')').delay(50*i).animate({'opacity':1},3000);
  };
});
