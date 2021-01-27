$(function () {
  const buildInput = (index) => {
    const html = `<div data-index="${index} "class="js-file_group">
                    <input class="js-file required" type="text" name="calender[todos_attributes][${index}][sentence]"
                    id="calender_todos_attributes_${index}_sentence">
                    <span class="js-remove">削除</span>
                  </div>`;
    return html;
  }
  //text_fieldのnameに動的なindexをつけるための配列
  const textIndex = [1, 2, 3, 4, 5];
  //既に使われているindexを除外
  lastIndex = $('.js-file_group:last').data('index');
  textIndex.splice(0, lastIndex);
  $('.hidden-destroy').hide();

  $('#todo-box').on('change', '.js-file', function (e) {

    //入力欄を5つまでにする
    const jsnum = $('.js-file').length;
    //入力欄が4つまである時に新しい入力欄を追加する
    if (jsnum < 5)
    //textIndexの先頭の数字を使い、インプットを作る
    $('#todo-box').append(buildInput(textIndex[0]));
    //先頭の数字を削除
    textIndex.shift();
    //末尾の数に1を足した数を追加
    textIndex.push(textIndex[textIndex.length - 1] + 1)

  });

  $('#todo-box').on('click', '.js-remove', function () {
    const targetIndex = $(this).parent().data('index')
    //該当indexを割り振られているチェックボックスを取得する
    const hiddenCheck = $(`input[data-index="${targetIndex}"].hidden-destroy`);
    //もしチェックボックスが存在すればチェックを入れる
    if (hiddenCheck) hiddenCheck.prop('checked', true);
    $(this).parent().remove();
    //テキスト入力が０にならないようにする
    if ($('.js-file').length == 0)  {
      $('#todo-box').append(buildInput(textIndex[0]));
    }
  });

  $('input.required').on('blur', function () {
    let error;
    if ($(this).val() === '') {
      error = true
    }
    if (error) {
      if (!$(this).next('span.error').lenght) {
        $(this).after(`<span class="error">未入力です</span>`)

      }
    } else {
      $(this).next('span.error').remove();
    }
  })

  //todoボタン押下時
  $('.submitBtn').on('click', function (e) {
    if ($('#calender_day').val() === '') {
      alert('日付を入力してください')
      e.preventDefault();
    }
  })
});
