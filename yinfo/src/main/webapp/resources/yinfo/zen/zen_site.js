zen
		.e({

			site : {

				temp : {
					picnav_index : 0,
					picnav_size : 0,
					user_cookieid : ''

				},

				init : function() {
					zen.site.initlogin();
					$('.b_corner').corner();
				},

				search : function() {

					var sVal = $('#site_common_search_box').val();
					if (sVal != "") {
						zen.site.href('newsinfo/search-search-' + sVal);
					} else {
						zen.site.model('错误消息', '请输入关键字后重试，谢谢！');
					}

				},

				post : function(url, data, success) {
					$.ajax({
						type : 'POST',
						url : zen.t.baseurl + 'newsinfo/func-' + url,
						data : data,
						success : function(data) {
							zen.site.success(data, success)
						},
						error : zen.site.error
					});

				},

				upurl : function(sUrl) {
					var sShareUrl = location.href;
					sShareUrl = sShareUrl.substring(0, sShareUrl
							.lastIndexOf('/'))
							+ '/' + sUrl;

					return sShareUrl;
				},

				success : function(data, fSuc) {
					// alert(o);
					var obj = $.evalJSON(data);
					if (obj.flag == true) {
						if (fSuc != undefined) {
							fSuc(obj);
						} else {
							zen.site.model("提示消息", "操作成功！");
						}

					} else {
						zen.site.model("错误消息", obj.message);
					}

				},
				error : function(o) {

					zen.site.model('错误消息', '调用失败，请稍后重试或者联系技术人员，谢谢！');
				},

				href : function(sUrl) {
					top.location.href = zen.t.baseurl + sUrl;
				},

				initlogin : function() {

					var sName = zen.f.cookie("bgpm_user_name");
					if (sName != null) {
						$('#header_user')
								.html(
										'欢迎你:'
												+ sName
												+ '&nbsp;&nbsp;&nbsp;&nbsp;<a href="#" onclick="zen.site.href(\'newsinfo/usercenter-user\')">[个人中心]</a>&nbsp;&nbsp;<a href="#" onclick="zen.site.logout()">[退出]</a>');

						zen.site.temp.user_cookieid = zen.f
								.cookie("bgpm_user_cookieid");
					}

				},
				loginreg : function() {

					if ($('#reg_pass').val() != $('#reg_pass2').val()) {
						zen.site.model('错误消息', '密码与重复密码输入不一致！');
					} else {
						zen.site.post('reg', {
							reg_name : $('#reg_name').val(),
							reg_pass : $('#reg_pass').val(),
							reg_phone : $('#reg_phone').val(),
						}, zen.site.reg_success);
					}

				},
				reg_success : function(o) {

					zen.site.login_success(o);
					zen.site.model('提示消息', '注册成功！', function() {
						zen.site.href('newsinfo/usercenter-user');
					});
				},

				login_login : function() {
					zen.site.post('login', {
						login_name : $('#login_loginname').val(),
						login_pass : $('#login_loginpass').val()
					}, zen.site.login_success);
				},

				login_success : function(o) {

					zen.f.cookie("bgpm_user_cookieid",
							o.result["bgpm_user_cookieid"], {
								path : '/',
								expires : 365
							});
					zen.f.cookie("bgpm_user_name", o.result["bgpm_user_name"],
							{
								path : '/',
								expires : 365
							});

					zen.f.cookie("bgpm_user_levelid",
							o.result["bgpm_user_levelid"], {
								path : '/',
								expires : 365
							});

					var sFromUrl = "newsinfo/usercenter-user";
					if ($('#zen_site_url_login_from').length > 0
							&& $('#zen_site_url_login_from').val() != "") {
						sFromUrl = "newsinfo/"
								+ $('#zen_site_url_login_from').val();
					}

					zen.site.href(sFromUrl);
				},
				logout : function() {
					zen.f.cookie("bgpm_user_cookieid", null, {
						path : '/'
					});
					zen.f.cookie("bgpm_user_name", null, {
						path : '/'
					});

					zen.site.href('');
				},

				change_info : function() {
					zen.site.post('change_info', {
						cookie_id : zen.site.temp.user_cookieid,
						user_email : $('#user_email').val(),
						phone_num : $('#phone_num').val(),
						real_name : $('#real_name').val()
					});
				},

				change_pass : function() {

					if ($('#login_pass').val() != $('#login_pass2').val()) {
						zen.site.model('错误消息', '密码与重复密码输入不一致！');
					} else {

						zen.site.post('change_pass', {
							cookie_id : zen.site.temp.user_cookieid,
							old_login_pass : $('#old_login_pass').val(),
							login_pass : $('#login_pass').val()
						});
					}
				},

				comment_show : function(sId) {

					zen.site.post('comment_show', {
						uid : sId
					}, zen.site.comment_show_success);
				},
				comment_show_success : function(oSuccess) {

					var sUid = oSuccess.message;

					var aHtml = [];
					aHtml
							.push('<div id="zen_site_comment_box_'
									+ sUid
									+ '" class="index_comment"><div class="c_head">文章评论</div>');

					var bFlagUerLevel = false;

					var sUserLev = zen.f.cookie("bgpm_user_levelid");

					if (sUserLev && sUserLev == "30210002") {
						bFlagUerLevel = true;
					}

					if (oSuccess.result && oSuccess.result.length > 0) {
						for ( var i = 0, j = oSuccess.result.length; i < j; i++) {

							var oItem = oSuccess.result[i];

							aHtml
									.push('<div class="c_item"><div class="c_title"><span>'
											+ oItem["username"]
											+(oItem["userlevel"]=="30210002"?'<i class="b_icon b_vip" title="名家账号"></i>':'')
											+ '</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
											+ oItem["comment_date"]
											+ '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
											+ (bFlagUerLevel ? ('<a href="#this" onclick="zen.site.comment_replay(\''
													+ sUid
													+ '\',\''
													+ oItem["replayid"]
													+ '\',\''
													+ oItem["username"] + '\')">回复</a>')
													: '')

											+ '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </br/> </br/></div><div class="c_content">'
											+ oItem["note"] + '</div></div>');
						}

					} else {
						aHtml.push('<div class="c_noreplay">暂无回复</div>');
					}

					if (zen.site.temp.user_cookieid != "") {
						aHtml
								.push('<div class="c_text"><div class="c_top"><div class="c_head">发表评论</div></div><div class="c_area"><textarea id="zen_site_common_comment_text_'
										+ sUid
										+ '"></textarea></div><div class="c_label"><input onclick="zen.site.comment_submit(\''
										+ sUid
										+ '\')" type="button" value="发表"/></div></div>');
					} else {
						aHtml
								.push('<div class="c_show"><div class="c_login">游客您好，<a href="login-login">登录</a>后可以发表评论，如果您还没有帐号可以现在<a href="reg-reg">注册</a>。</div></div>');
					}

					aHtml.push('</div>');

					if ($('#zen_site_common_comment_box_' + sUid).length > 0) {

						$('#zen_site_common_comment_box_' + sUid).html(
								aHtml.join(''));

					} else {
						$('#zen_site_common_comment_url_' + sUid).parent('div')
								.after(
										'<div id="zen_site_common_comment_box_'
												+ sUid + '">' + aHtml.join('')
												+ '</div>');
					}

				},
				comment_replay : function(sUid, sRepid, sName) {
					$('#zen_site_common_comment_text_' + sUid).val(
							'回复@' + sName + ':  ');
				},

				comment_submit : function(sUid) {

					zen.site.post('comment_submit', {
						uid : sUid,
						title : $('#zen_site_common_comment_title_' + sUid)
								.val(),
						url : $('#zen_site_common_comment_url_' + sUid).val(),
						text : $('#zen_site_common_comment_text_' + sUid).val()
					}, zen.site.comment_submit_success);

				},
				comment_submit_success : function(oSuccess) {
					zen.site.model('提示消息', '评论发表成功！');
					zen.site.comment_show(oSuccess.result);
				},

				collect_submit : function(sUid) {
					zen.site.post('collect_submit', {
						uid : sUid,
						title : $('#zen_site_common_collect_title_' + sUid)
								.val(),
						url : $('#zen_site_common_collect_url_' + sUid).val()
					}, zen.site.collect_submit_success);

				},
				collect_submit_success : function(oSuccess) {
					zen.site.model('提示消息', '收藏成功！');
				},

				model : function(sTitle, sContent, fHidden) {

					if (!$('#zen_site_model').length > 0) {
						var sModel = '<div id="zen_site_model" class="modal hide fade"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>'
								+ '<h3>'
								+ sTitle
								+ '</h3></div><div class="modal-body">'
								+ '<p>'
								+ sContent
								+ '</p>'
								+ '</div>'
								+ '<div class="modal-footer"><a  class="btn" data-dismiss="modal" aria-hidden="true">关闭</a>'
								+ '</div></div>';
						$(document.body).append(sModel);

					}

					$('#zen_site_model h3').html(sTitle);
					$('#zen_site_model p').html(sContent);
					$('#zen_site_model').modal('show');
					if (fHidden != undefined) {
						$('#zen_site_model').on('hide', function() {
							fHidden();
						})
					}
				},

				picnav : function(sId, oTarget) {

					if (oTarget != "i") {

						var iNow = parseInt($('#' + sId).attr(
								'zen_picnav_index'));
						var iSize = parseInt($('#' + sId).attr(
								'zen_picnav_size'));

						var iEverySize = parseInt($('#' + sId).attr(
								'zen_picnav_itemwidth'));

						if (oTarget == "p") {
							oTarget = iNow - 1;

						} else if (oTarget == "n") {
							oTarget = iNow + 1;

						} else if (oTarget == "a") {
							oTarget = iNow + 1;
							if (oTarget > iSize) {
								oTarget = 0;
							}
						}

						if (oTarget <= 0) {
							oTarget = 0;
							$('#' + sId + ' .c_prev').parent()
									.addClass('c_nav');
							$('#' + sId + ' .c_prev').parent().removeClass(
									'c_nav_select');
						} else {
							$('#' + sId + ' .c_prev').parent().addClass(
									'c_nav_select');
						}

						if (oTarget >= iSize) {
							oTarget = iSize;
							$('#' + sId + ' .c_next').parent()
									.addClass('c_nav');
							$('#' + sId + ' .c_next').parent().removeClass(
									'c_nav_select');
						} else {
							$('#' + sId + ' .c_next').parent().addClass(
									'c_nav_select');
						}

						$('#' + sId + '_item_' + iNow).removeClass('c_select');

						$('#' + sId).attr('zen_picnav_index', oTarget);

						$('#' + sId + ' .zen_picnav_list').animate(
								{
									left : '-'
											+ (oTarget * iEverySize).toString()
											+ "px"
								});
						$('#' + sId + '_item_' + oTarget).addClass('c_select');

					} else {
						var iSize = $('#' + sId + ' .zen_picnav_list ul li')
								.size();

						var iItemSize = parseInt($(
								'#' + sId + ' .zen_picnav_list ul li').width());

						var iShowSize = Math.floor($('#' + sId).width()
								/ iItemSize);

						$('#' + sId + ' .zen_picnav_list').css('width',
								(iSize * iItemSize) + 'px');

						if (iSize > iShowSize) {
							for ( var i = iSize - iShowSize, j = 0; i >= j; i--) {
								$('#' + sId + ' .zen_picnav_nav ul')
										.prepend(
												'<li id="'
														+ sId
														+ '_item_'
														+ i
														+ '" onclick="zen.site.picnav(\''
														+ sId
														+ '\','
														+ (i.toString())
														+ ')"'
														+ (i == 0 ? 'class="c_select"'
																: '')
														+ '></li>');
							}

							$('#' + sId + ' .zen_picnav_nav ul')
									.append(
											'<li class="c_nav" onclick="zen.site.picnav(\''
													+ sId
													+ '\',\'p\')"><span class="c_prev"></span></li>');
							$('#' + sId + ' .zen_picnav_nav ul')
									.append(
											'<li class="c_nav" onclick="zen.site.picnav(\''
													+ sId
													+ '\',\'n\')"><span class="c_next"></span></li>');

							$('#' + sId).attr('zen_picnav_size',
									iSize - iShowSize);
							$('#' + sId)
									.attr('zen_picnav_itemwidth', iItemSize);
							zen.site.picnav(sId, 0);
							$('#' + sId).show();

							// setInterval(function(){zen.site.picnav(sId,'a');},5000);

						}

					}
				}
			}
		});

$(window).ready(function() {
	zen.site.init();
}

);
