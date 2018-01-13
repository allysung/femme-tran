// 문장을 받으면 규칙대로 변형해서 리턴하는 함수
function translator(str){
  return str.split('').map(function(char){
    var d = Hangul.disassemble(char);
    if(d[3] && Hangul.isVowel(d[1]) && Hangul.isVowel(d[2])){
      var temp = d[3];
      d[3] = d[2];
      d[2] = temp;

    }
    return Hangul.assemble(d);
  }).join('');
};

window.addEventListener('DOMContentLoaded', function(){

  document.querySelector('.change').addEventListener('click', function() {
    var changedText = translator(document.querySelector('.original-text').value);
    document.querySelector('.result-text').innerText = changedText;
  })
})
