$(function(){
  function buildHTML(message){
    if (message.content && message.image) {
      var html = 
      `<div class="message" data-message-id=${message.id}>
        <div class="upper-message">
        <div class="upper-message__user-name">
          ${message.user_name}
        </div>
        <div class="upper-message__date">
          ${message.created_at}
        </div>
      </div>
        <div class="lower-message">
          <p class="lower-message__content">
          <img class="lower-message__image" src="${message.content}">
          </p>
        </div>
      </div>`
    } else if (message.image) {
      var html =
        `<div class="message" data-message-id="${message.id}">
          <div class="upper-message">
            <div class="upper-message__user-name">
            ${message.user_name}
            </div>
            <div class="upper-message__date">
            ${message.created_at}
            </div>
          </div>
            <div class="lower-message">
            <img class="lower-message__image" src="${message.image}">
            </div>
        </div>`
    } else if (message.content) {
      var html = 
      `<div class="message" data-message-id="${message.id}">
        <div class="upper-message">
          <div class="upper-message__user-name">
          ${message.user_name}
          </div>
          <div class="upper-message__date">
          ${message.created_at}
          </div>
        </div>
        <div class="lower-message">
          <p class="lower-message__content">
          ${message.content}
          </p>
        </div>
      </div>`
    };
    return html;
  };
  $("#new_message").on("submit", function(e){
    e.preventDefault()
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: 'POST',
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $(".bottom").append(html);
      $('.bottom').animate({ scrollTop: $('.bottom')[0].scrollHeight});
      $('form')[0].reset();
      $('.form__submit').prop('disabled', false);
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
  });
  })

  
  var reloadMessages = function() {
    last_message_id = $('.message:last').data("message-id");
    $.ajax({
      url: "api/messages",
      type: 'get',
      dataType: 'json',
      data: {id: last_message_id}
    })
    .done(function(messages) {
      if (messages.length !== 0) {
      var insertHTML = '';
      $.each(messages, function(i, message) {
        insertHTML += buildHTML(message)
      });
      $('.bottom').append(insertHTML);
      $('.bottom').animate({ scrollTop: $('.bottom')[0].scrollHeight});
      $("#new_message")[0].reset();
      $(".form__submit").prop("disabled", false);
        }
    })
    .fail(function() {
      alert('error');
    });
  };
  if (document.location.href.match(/\/groups\/\d+\/messages/)) {
    setInterval(reloadMessages, 5000);
  }
});