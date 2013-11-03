zen
		.e({
			yinfo : {
				init : function() {
					$('.b_corner').corner();
					zen.yinfo.checklogin();

				},

				submit : function(sId, fCall, sAction) {

					var aForm = $(sId).parents('form');
					if (sAction) {
						aForm.attr("action", sAction);
					}

					$(aForm).ajaxSubmit(function(data) {
						var obj = $.evalJSON(data);
						if (fCall) {
							fCall(obj);
						} else {
							if (obj.flag) {
								zen.yinfo.model('提示消息', '操作成功');
							} else {
								zen.yinfo.model('错误消息', obj.message);
							}

						}

					});

				},

				logout : function() {
					zen.f.cookie("yinxl_user_cookieid", null, {
						path : '/'
					});
					zen.f.cookie("yinxl_user_name", null, {
						path : '/'
					});

					zen.yinfo.href('');
				},

				checklogin : function() {
					var sName = zen.f.cookie("yinxl_user_name");
					if (sName != null) {
						$('#yinfo_header_user')
								.html(
										'欢迎，'
												+ sName
												+ '&nbsp;&nbsp;<a href="#" onclick="zen.yinfo.href(\'yinfo/ucenter-user\')">[个人中心]</a>&nbsp;&nbsp;<a href="#" onclick="zen.yinfo.logout()">[退出]</a>');

					}

				},

				regsuccess : function(oResult) {
					if (oResult.flag) {
						zen.yinfo.model('提示消息', '注册成功', function() {
							zen.yinfo.logindo(oResult);
						});
					} else {
						zen.yinfo.model('错误消息', oResult.message);
					}
				},
				loginsuccess : function(oResult) {
					if (oResult.flag) {
						zen.yinfo.logindo(oResult);
					} else {
						zen.yinfo.model('错误消息', oResult.message);
					}
				},

				logindo : function(o) {
					zen.f.cookie("yinxl_user_cookieid",
							o.result["yinxl_user_cookieid"], {
								path : '/',
								expires : 365
							});
					zen.f.cookie("yinxl_user_name",
							o.result["yinxl_user_name"], {
								path : '/',
								expires : 365
							});

					zen.f.cookie("yinxl_user_levelid",
							o.result["yinxl_user_levelid"], {
								path : '/',
								expires : 365
							});
					zen.yinfo.href('yinfo/ucenter-user');

				},

				// 参数bFlagShow 表示是否固定位置
				headernav : function(bFlagShow) {

					$('.yinfo_nav_box .c_tip').srnprtip({
						target : '.yinfo_nav_query',
						show : bFlagShow

					});

					$('#yinfo_nav_box_address_other').srnprtip({
						target : '.yinfo_nav_address'

					});
					$('.yinfo_nav_address').hover(
							function() {
								$('#yinfo_nav_box_address_other').addClass(
										'c_active')
							},
							function() {
								$('#yinfo_nav_box_address_other').removeClass(
										'c_active')
							});

				},
				pagination : function() {
					$(".pagination").each(

					function(n, el) {
						zen.yinfo.navel(el);

					}

					);

				},
				href : function(sUrl) {
					top.location.href = zen.t.baseurl + sUrl;
				},
				navel : function(el) {

					var iSize = parseInt($(el).attr("zen_page_pagination_size"));
					var iIndex = parseInt($(el).attr(
							"zen_page_pagination_index"));
					var iCount = parseInt($(el).attr(
							"zen_page_pagination_count"));

					var iMaxPage = Math.ceil(iCount / iSize);
					var eUL = $(el).children('ul');
					if (eUL.children().length > 0)
						return;

					var aArr = [ iIndex, iCount, iSize ];
					aArr[0] = 1;

					var aHtml = [];

					aHtml.push('<li '
							+ (iIndex == 1 ? ('class="disabled"><a ')
									: '><a href="' + zen.yinfo.urlpager(aArr)
											+ '" ') + ' >«</a></li>');

					var aNav = [];
					var iNavSize = 5;

					aNav.push(iIndex);

					for ( var i = 1; i <= iNavSize; i++) {
						if (aNav.length < iNavSize) {
							if (iIndex - i > 0) {
								aNav.splice(0, 0, iIndex - i);
							}
							if (iIndex + i <= iMaxPage) {
								aNav.push(iIndex + i);
							}
						}

					}

					for ( var i = 0, j = aNav.length; i < j; i++) {
						aArr[0] = aNav[i];
						aHtml.push('<li '
								+ (aNav[i] == iIndex ? 'class="active"' : '')
								+ ' ><a href="' + zen.yinfo.urlpager(aArr)
								+ '">' + aNav[i] + '</a></li>');
					}

					aArr[0] = iMaxPage;

					aHtml
							.push('<li '
									+ ((iIndex == iMaxPage || iMaxPage == 0) ? ('class="disabled"><a')
											: '><a <a href="'
													+ zen.yinfo.urlpager(aArr)
													+ '" ') + ' >»</a></li>');

					$(eUL).append(aHtml.join(''));

				},

				urlpager : function(aPager) {
					return '?z_page_index=' + aPager[0] + '&z_page_count='
							+ aPager[1] + '&z_page_size=' + aPager[2];

				},

				urlreplace : function(iIndex, sTo) {
					var sShareUrl = location.href;
					var iQuery = sShareUrl.indexOf('?');
					var sQuery = "";
					if (iQuery > -1) {
						sQuery = sShareUrl.substring(iQuery);
						sShareUrl = sShareUrl.substring(0, iQuery);
					}
					var iLeft = sShareUrl.lastIndexOf('/');
					var sPageUrl = sShareUrl.substring(iLeft);
					sShareUrl = sShareUrl.substring(0, iLeft);

					var aUrls = sPageUrl.split('-');

					for ( var i = aUrls.length; i <= iIndex; i++) {
						aUrls.push('');
					}

					aUrls[iIndex] = sTo;
					return sShareUrl + aUrls.join('-') + sQuery;

				},

				search : function() {

					if ($('#yinfo_header_search_input').val() == "") {
						zen.yinfo.model('错误消息', '请输入搜索关键字！');
					} else {
						this.href("yinfo/list-0_0_0_0-"
								+ $('#yinfo_header_search_input').val());

					}

				},

				searchtext : function(sText) {
					$('#yinfo_header_search_input').val(sText);
				},

				model : function(sTitle, sContent, fHidden) {

					if (!$('#zen_yinfo_model').length > 0) {
						var sModel = '<div id="zen_yinfo_model" class="modal hide fade"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>'
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

					$('#zen_yinfo_model h3').html(sTitle);
					$('#zen_yinfo_model p').html(sContent);
					$('#zen_yinfo_model').modal('show');
					if (fHidden != undefined) {
						$('#zen_yinfo_model').on('hide', function() {
							fHidden();
						})
					}
				},

				query : function() {

					var aText = '您希望在 <span>'
							+ $('#yinfo_nav_query_address input:radio:checked')
									.next('label').text()
							+ '</span> 寻找 <span>'
							+ $('#yinfo_nav_query_money input:radio:checked')
									.next('label').text()
							+ '</span> 能照顾 <span>'
							+ $('#yinfo_nav_query_older input:radio:checked')
									.next('label').text()
							+ '</span> 的养老院 <br/>系统显示共有 <b></b> 家养老院符合您的要求';
					$('#yinfo_query_for .c_info').html(aText);
					var sQuery = $(
							'#yinfo_nav_query_address input:radio:checked')
							.val()
							+ '_'
							+ $('#yinfo_nav_query_money input:radio:checked')
									.val()
							+ '_'
							+ $('#yinfo_nav_query_older input:radio:checked')
									.val();

					$('#yinfo_query_for_query').val(sQuery);

					$(function() {
						$('#yinfo_query_for').modal('show');

						$('#yinfo_query_for').on('shown', function() {
							$('#yinfo_query_for_phone').focus();
						});

					});
				},
				querysubmit : function() {
					var sUserCookie = zen.f.cookie("yinxl_user_cookieid");

					if ($('#yinfo_query_for_phone').val() == ""
							|| $('#yinfo_query_for_phone').val().length != 11) {
						alert('请输入正确的手机号码');
						return;
					}
					if (sUserCookie) {

						var sHomeUid = $('#yold_info_home_uid').val();

						if (sHomeUid && sHomeUid != "") {
							zen.yinfo.callpost(sUserCookie);
						} else {
							zen.yinfo.post('postphone', {
								cookieid : sUserCookie,
								phone : $('#yinfo_query_for_phone').val()
							}, zen.yinfo.querysuccess);
						}
					} else {
						alert('请先登录，谢谢！');
					}
				},

				querysuccess : function(o) {
					$('#yinfo_query_for').modal('hide');
					zen.yinfo.model("提示消息", "操作成功，稍后会有工作人员与您联系，谢谢！");
				},
				callhome : function() {
					var sUserCookie = zen.f.cookie("yinxl_user_cookieid");
					if (sUserCookie) {
						var aText = '您希望预约参观：'
								+ $('.yold_info_right .c_top .c_left ').text();
						$('#yinfo_query_for .c_info').html(aText);

						$('#yinfo_query_for').modal('show');
						$('#yinfo_query_for').on('shown', function() {
							$('#yinfo_query_for_phone').focus();
						});
					} else {
						zen.yinfo.model("提示消息", "请先登录后再执行该操作，谢谢！");
					}

				},
				callpost : function(sUserCookie) {

					zen.yinfo.post('postcall', {
						cookieid : sUserCookie,
						info_uid : $('#yold_info_home_uid').val(),
						info_title : $('.yold_info_right .c_top .c_left ')
								.text(),
						phone : $('#yinfo_query_for_phone').val()
					}, zen.yinfo.callsuccess);
				},
				callsuccess : function() {
					$('#yinfo_query_for').modal('hide');
					zen.yinfo.model("提示消息", "操作成功，稍后会有工作人员与您联系，谢谢！");
				},

				queryskip : function() {
					zen.yinfo.href('yinfo/list-'
							+ $('#yinfo_query_for_query').val());
				},
				post : function(url, data, success) {
					$.ajax({
						type : 'POST',
						url : zen.t.baseurl + 'yinfo/func-' + url,
						data : data,
						success : function(data) {
							zen.yinfo.success(data, success)
						},
						error : zen.yinfo.error
					});

				},
				success : function(data, fSuc) {
					// alert(o);
					var obj = $.evalJSON(data);
					if (obj.flag == true) {
						if (fSuc != undefined) {
							fSuc(obj);
						} else {
							zen.yinfo.model("提示消息", "操作成功！");
						}

					} else {
						zen.yinfo.model("错误消息", obj.message);
					}

				},

				compare_in : function(oCompare) {
					zen.f.cookie("yinxl_cookie_compare", $.toJSON(oCompare), {
						path : '/',
						expires : 365
					});
				},
				compare_up : function() {
					return $.evalJSON(zen.f.cookie("yinxl_cookie_compare"));
				},

				compare_add : function(oTarget) {

					var oCom = zen.yinfo.compare_up();

					var obj = $(oTarget);

					if (obj.prop("checked")) {

						if (oCom && oCom.length >= 4) {
							obj.prop("checked", false);
							zen.yinfo.model("错误消息", "无法添加更多的养老院进行比较！");
							return;
						}

						var oNew = {
							y_zid : obj.attr('y_zid'),
							y_name : obj.attr('y_name'),
							y_link : obj.attr('y_link'),
							y_img : obj.attr('y_img')
						};

						if (!oCom) {
							oCom = [];
						}
						oCom.push(oNew);
						zen.yinfo.compare_in(oCom);
						zen.yinfo.compare_init();

					} else {
						zen.yinfo.compare_del(obj.attr('y_zid'));
					}

				},
				compare_clear : function() {
					zen.yinfo.compare_in(null);
					zen.yinfo.compare_init();
				},

				compare_del : function(yzid) {

					var oCom = zen.yinfo.compare_up();
					var iDel = -1;
					for ( var i = 0, j = oCom.length; i < j; i++) {
						if (oCom[i]["y_zid"] == yzid) {
							iDel = i;
						}
					}

					oCom.splice(iDel, 1);
					zen.yinfo.compare_in(oCom);
					zen.yinfo.compare_init();

				},
				compare_goto : function() {
					var oCom = zen.yinfo.compare_up();
					if (oCom.length < 2) {
						zen.yinfo.model("错误消息", "请选择两个以上养老院比较！");
						return;
					}
					else
						{
							var aZid=[];
							
							for ( var i = 0, j = oCom.length; i < j; i++) {
								
								
								aZid.push(oCom[i]["y_zid"]);
								
							}
							
							location.href="diff-"+aZid.join('_');
							
						}

				},
				compare_hide:function()
				{
					$('#yinfo_compare_for').hide();
				},

				compare_init : function() {
					$('.yinfo_compare_checkbox').prop('checked', false);
					var oCom = zen.yinfo.compare_up();
					if (oCom && oCom.length > 0) {

						for ( var i = 0, j = oCom.length; i < j; i++) {
							var aHtml = [];
							aHtml.push('<div class="b_fl"><a href="'
									+ oCom[i]["y_link"] + '"><img src="'
									+ oCom[i]["y_img"] + '"></a></div>');
							aHtml
									.push('<div class="b_fl c_text"><a href="'
											+ oCom[i]["y_link"]
											+ '">'
											+ oCom[i]["y_name"]
											+ '</a><br/><span onclick="zen.yinfo.compare_del('
											+ oCom[i]["y_zid"]
											+ ')">删除</span></div>');
							$('#yinfo_compare_show_' + i).html(aHtml.join(''));

							$('#yinfo_compare_cb_' + oCom[i]["y_zid"]).prop(
									'checked', true);
						}

						for ( var i = oCom.length; i <= 4; i++) {
							$('#yinfo_compare_show_' + i)
									.html(
											'<div class="b_fl c_number">'
													+ (i + 1)
													+ '</div><div class="b_fl c_add">您还可以继续添加</div>');
						}

						$('#yinfo_compare_for').show();
					} else {
						$('#yinfo_compare_for').hide();
					}

				},

				error : function(o) {

					zen.yinfo.model('错误消息', '调用失败，请稍后重试或者联系技术人员，谢谢！');
				}

			}
		});

$(window).ready(function() {
	zen.yinfo.init();
});