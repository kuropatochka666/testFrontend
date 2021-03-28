$(function () {
	$("form").submit(function (e) {
		var $form = $(this);
		$.ajax({
			type: $form.attr("method"),
			url: $form.attr("action"),
			dataType: "html",
			data: $form.serialize(),
		})
			.done(function () {
				$($form).find(".form-inputs").val("");
				console.log("success");
				alert("Запрос отправлен.");
			})
			.fail(function () {
				console.log("fail");
				// console.log($form.attr('action'));
				// console.log($form.attr('method'));
				// console.log($form.serialize());
				alert("Сервер не отвечает.");
			});
		//отмена действия по умолчанию для кнопки submit
		e.preventDefault();
	});
});
$(document).ready(function () {
	$("#phoneInput").mask("+7 (999)-99-99-999");
});
