
//injecting arrow points
function zen_timeline() {

	var iIndex = 0;
	var s = $("#container").find(".c_item");

	var iTempYear = 0;
	var iTempMonth = -1;

	var aMonthName = [ '一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月',
			'十月', '十一月', '十二月' ];

	$
			.each(
					s,
					function(i, obj) {

						var posLeft = $(obj).css("left");

						var sCss = "c_left";
						var sCssLine = ($(obj).find(".c_flagprep").size() > 0) ? 'c_prep'
								: 'c_success';

						if (posLeft == "0px") {

						} else {
							$(obj).css("left", parseInt(posLeft) + 100);
							sCss = "c_right";
						}
						var posTop = parseInt($(obj).css("top"));

						if (iIndex > 0) {

							var sTime = $(obj).find(".c_time span").text();

							var iNowYear = parseInt(sTime.split('-')[0]);
							var iNowMonth = parseInt(sTime.split('-')[1]);
							var iNowDay = parseInt(sTime.split('-')[2]);

							if (iIndex > 1 && iNowYear != iTempYear) {
								if (sCss == "c_left") {
									posTop = posTop + 140;
								}
								$("#container")
										.append(
												'<div class="c_box" style="top:'
														+ (posTop + 20)
														+ 'px"><div class="c_year" id="y'
														+ iTempYear + '">'
														+ iTempYear
														+ '</div></div>');
								posTop = posTop + 80;

							} else if (iNowMonth != iTempMonth) {
								if (sCss == "c_left") {
									posTop = posTop + 80;
								}
								$("#container").append(
										'<div class="c_box" style="top:'
												+ (posTop + 50)
												+ 'px"><div class="c_month">'
												+ aMonthName[iNowMonth - 1]
												+ '</div></div>');
								posTop = posTop + 10;
							}

							iTempYear = iNowYear;
							iTempMonth = iNowMonth;

							$("#container").append(
									'<div class="c_box ' + sCss
											+ '" style="top:'
											+ ((posTop + 100) + "px")
											+ '"><div class="c_line"><span>'
											+ iNowMonth + '月' + iNowDay
											+ '日</span></div><div class="'
											+ sCssLine + '"></div></div>');
						} else {

							$("#container")
									.append(
											'<div class="c_box '
													+ sCss
													+ '" style="top:0px"><div class="c_target"></div></div>');

						}

						iIndex++;

					});
	$("#container").append(
			'<div class="c_box" style="top:' + ($("#container").height() - 120)
					+ 'px"><div class="c_year">' + iTempYear + '</div></div>');
}
