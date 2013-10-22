zen
		.e({
			ahinfo : {
				init : function() {
					$('.b_corner').corner();
					zen.ahinfo.checklogin();

					this.checkmenu();

				},

				checkmenu : function() {

					if (document.getElementById('ahinfo_page_left')) {

						var sUrl = location.href;
						
						var sIndex="0-0";

						$('.ahinfo_top a').each(function(n, e) {

							if ($(e).attr('href')) {

								if (sUrl.indexOf($(e).attr('href')) > -1) {
									
									sIndex=$(this).attr('menu_id');
									
									
									
								}

							}

						});
						
						if(document.getElementById('ahinfo_page_now_menu_index'))
							{
							
							sIndex=$('#ahinfo_page_now_menu_index').val();
							}
						
						
						zen.ahinfo.changemenu(sIndex);

					}

				},
				
				changemenu:function(sCode)
				{
					if(!sCode)
						{
						sCode="0-9";
						}
					var sSplit=sCode.split('-');
					
					var sName=$('.ahinfo_nav_item_'+sSplit[0]).attr('menu_name')+'</li>';
					var sNav='';
					
					$('#ahinfo_page_left .c_nav ul').html('<li class="c_top">'+sName+$('.ahinfo_nav_item_'+sSplit[0]+' ul').html());
					
					$('#ahinfo_page_left .c_nav ul li a').each(
					function(n,e)
					{
						
						
							if(n==sSplit[1])
							{
							
								$(e).parent().addClass('c_active');
								sNav=$(e).text();
							
							}
						$(e).html('&nbsp;&nbsp;&gt;&nbsp;&nbsp;&nbsp;'+$(e).text());
						
						
						
					}
					
					);
					
					
					$('.ahinfo_page_nav').html('<a href="/">首页</a>&nbsp;&nbsp;&gt;&nbsp;&nbsp;'+sName+'&nbsp;&nbsp;&gt;&nbsp;&nbsp;<a href="">'+sNav+"</a>");
					
					
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
								zen.ahinfo.model('提示消息', '操作成功');
							} else {
								zen.ahinfo.model('错误消息', obj.message);
							}

						}

					});

				},

				showshop : function(o) {
					this.model("", $(o).next().html());

				},

				logout : function() {
					zen.f.cookie("yinxl_user_cookieid", null, {
						path : '/'
					});
					zen.f.cookie("yinxl_user_name", null, {
						path : '/'
					});

					zen.ahinfo.href('');
				},

				checklogin : function() {
					var sName = zen.f.cookie("yinxl_user_name");
					if (sName != null) {
						$('#ahinfo_header_user')
								.html(
										'欢迎，'
												+ sName
												+ '&nbsp;&nbsp;<a href="#" onclick="zen.ahinfo.logout()">[退出]</a>');

					}

				},

				regsuccess : function(oResult) {
					if (oResult.flag) {
						zen.ahinfo.model('提示消息', '注册成功', function() {
							zen.ahinfo.logindo(oResult);
						});
					} else {
						zen.ahinfo.model('错误消息', oResult.message);
					}
				},
				loginsuccess : function(oResult) {
					if (oResult.flag) {
						zen.ahinfo.logindo(oResult);
					} else {
						zen.ahinfo.model('错误消息', oResult.message);
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
					// zen.ahinfo.href('ahinfo/ucenter-user');

					location.href = "/";

				},

				// 参数bFlagShow 表示是否固定位置
				headernav : function(bFlagShow) {

					$('.ahinfo_nav_box .c_tip').srnprtip({
						target : '.ahinfo_nav_query',
						show : bFlagShow

					});

					$('#ahinfo_nav_box_address_other').srnprtip({
						target : '.ahinfo_nav_address'

					});
					$('.ahinfo_nav_address').hover(
							function() {
								$('#ahinfo_nav_box_address_other').addClass(
										'c_active')
							},
							function() {
								$('#ahinfo_nav_box_address_other').removeClass(
										'c_active')
							});

				},
				pagination : function() {
					$(".pagination").each(

					function(n, el) {
						zen.ahinfo.navel(el);

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
									: '><a href="' + zen.ahinfo.urlpager(aArr)
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
								+ ' ><a href="' + zen.ahinfo.urlpager(aArr)
								+ '">' + aNav[i] + '</a></li>');
					}

					aArr[0] = iMaxPage;

					aHtml
							.push('<li '
									+ ((iIndex == iMaxPage || iMaxPage == 0) ? ('class="disabled"><a')
											: '><a <a href="'
													+ zen.ahinfo.urlpager(aArr)
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

					if ($('#ahinfo_header_search_input').val() == "") {
						zen.ahinfo.model('错误消息', '请输入搜索关键字！');
					} else {
						this.href("ahinfo/list-0_0_0_0-"
								+ $('#ahinfo_header_search_input').val());

					}

				},

				searchtext : function(sText) {
					$('#ahinfo_header_search_input').val(sText);
				},

				model : function(sTitle, sContent, fHidden) {

					if (!$('#zen_ahinfo_model').length > 0) {
						var sModel = '<div id="zen_ahinfo_model" class="modal hide fade '
								+ sTitle
								+ '">'

								+ '<div></div><div class="modalclose" data-dismiss="modal" aria-hidden="true"></div><div class="modal-body">'
								+ '<div id="zen_ahinfo_model_info">'

								+ '</div>'
								+ '</div>'
								+ '<div>'
								+ '</div></div>';
						$(document.body).append(sModel);

					}

					$('#zen_ahinfo_model h3').html(sTitle);
					$('#zen_ahinfo_model_info').html(sContent);
					$('#zen_ahinfo_model').modal('show');
					if (fHidden != undefined) {
						$('#zen_ahinfo_model').on('hide', function() {
							fHidden();
						})
					}
				},

				query : function() {

					var aText = '您希望在 <span>'
							+ $('#ahinfo_nav_query_address input:radio:checked')
									.next('label').text()
							+ '</span> 寻找 <span>'
							+ $('#ahinfo_nav_query_money input:radio:checked')
									.next('label').text()
							+ '</span> 能照顾 <span>'
							+ $('#ahinfo_nav_query_older input:radio:checked')
									.next('label').text()
							+ '</span> 的养老院 <br/>系统显示共有 <b></b> 家养老院符合您的要求';
					$('#ahinfo_query_for .c_info').html(aText);
					var sQuery = $(
							'#ahinfo_nav_query_address input:radio:checked')
							.val()
							+ '_'
							+ $('#ahinfo_nav_query_money input:radio:checked')
									.val()
							+ '_'
							+ $('#ahinfo_nav_query_older input:radio:checked')
									.val();

					$('#ahinfo_query_for_query').val(sQuery);

					$(function() {
						$('#ahinfo_query_for').modal('show');

						$('#ahinfo_query_for').on('shown', function() {
							$('#ahinfo_query_for_phone').focus();
						});

					});
				},
				
				comentsubmit : function() {
					var sUserCookie = zen.f.cookie("yinxl_user_cookieid");

					if ($('#ahinfo_comment_post_textarea').val() == ""
							) {
						alert('请输入评论内容!');
						return;
					}
					if (sUserCookie) {

						
							zen.ahinfo.post('comentsubmit', {
								cookieid : sUserCookie,
								uid:'',
								url:location.href,
								info_title:$('.ahinfo_page_right .c_title').text(),
								text : $('#ahinfo_comment_post_textarea').val()
							}, zen.ahinfo.comentsuccess);
						
					} else {
						alert('请先登录，谢谢！');
					}
				},

				comentsuccess : function(o) {
					$('#zen_ahinfo_model').modal('hide');
					alert("评论发表成功，谢谢！");
				},
				
				
				querysubmit : function() {
					var sUserCookie = zen.f.cookie("yinxl_user_cookieid");

					if ($('#ahinfo_query_for_phone').val() == ""
							|| $('#ahinfo_query_for_phone').val().length != 11) {
						alert('请输入正确的手机号码');
						return;
					}
					if (sUserCookie) {

						var sHomeUid = $('#yold_info_home_uid').val();

						if (sHomeUid && sHomeUid != "") {
							zen.ahinfo.callpost(sUserCookie);
						} else {
							zen.ahinfo.post('postphone', {
								cookieid : sUserCookie,
								phone : $('#ahinfo_query_for_phone').val()
							}, zen.ahinfo.querysuccess);
						}
					} else {
						alert('请先登录，谢谢！');
					}
				},

				querysuccess : function(o) {
					$('#ahinfo_query_for').modal('hide');
					zen.ahinfo.model("提示消息", "操作成功，稍后会有工作人员与您联系，谢谢！");
				},
				callhome : function() {
					var sUserCookie = zen.f.cookie("yinxl_user_cookieid");
					if (sUserCookie) {
						var aText = '您希望预约参观：'
								+ $('.yold_info_right .c_top .c_left ').text();
						$('#ahinfo_query_for .c_info').html(aText);

						$('#ahinfo_query_for').modal('show');
						$('#ahinfo_query_for').on('shown', function() {
							$('#ahinfo_query_for_phone').focus();
						});
					} else {
						zen.ahinfo.model("提示消息", "请先登录后再执行该操作，谢谢！");
					}

				},
				callpost : function(sUserCookie) {

					zen.ahinfo.post('postcall', {
						cookieid : sUserCookie,
						info_uid : $('#yold_info_home_uid').val(),
						info_title : $('.yold_info_right .c_top .c_left ')
								.text(),
						phone : $('#ahinfo_query_for_phone').val()
					}, zen.ahinfo.callsuccess);
				},
				callsuccess : function() {
					$('#ahinfo_query_for').modal('hide');
					zen.ahinfo.model("提示消息", "操作成功，稍后会有工作人员与您联系，谢谢！");
				},

				queryskip : function() {
					zen.ahinfo.href('ahinfo/list-'
							+ $('#ahinfo_query_for_query').val());
				},
				post : function(url, data, success) {
					$.ajax({
						type : 'POST',
						url : zen.t.baseurl + 'ahinfo/func-' + url,
						data : data,
						success : function(data) {
							zen.ahinfo.success(data, success)
						},
						error : zen.ahinfo.error
					});

				},
				success : function(data, fSuc) {
					// alert(o);
					var obj = $.evalJSON(data);
					if (obj.flag == true) {
						if (fSuc != undefined) {
							fSuc(obj);
						} else {
							zen.ahinfo.model("提示消息", "操作成功！");
						}

					} else {
						zen.ahinfo.model("错误消息", obj.message);
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

					var oCom = zen.ahinfo.compare_up();

					var obj = $(oTarget);

					if (obj.prop("checked")) {

						if (oCom && oCom.length >= 4) {
							obj.prop("checked", false);
							zen.ahinfo.model("错误消息", "无法添加更多的养老院进行比较！");
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
						zen.ahinfo.compare_in(oCom);
						zen.ahinfo.compare_init();

					} else {
						zen.ahinfo.compare_del(obj.attr('y_zid'));
					}

				},
				compare_clear : function() {
					zen.ahinfo.compare_in(null);
					zen.ahinfo.compare_init();
				},

				compare_del : function(yzid) {

					var oCom = zen.ahinfo.compare_up();
					var iDel = -1;
					for ( var i = 0, j = oCom.length; i < j; i++) {
						if (oCom[i]["y_zid"] == yzid) {
							iDel = i;
						}
					}

					oCom.splice(iDel, 1);
					zen.ahinfo.compare_in(oCom);
					zen.ahinfo.compare_init();

				},
				compare_goto : function() {
					var oCom = zen.ahinfo.compare_up();
					if (oCom.length < 2) {
						zen.ahinfo.model("错误消息", "请选择两个以上养老院比较！");
						return;
					} else {

					}

				},
				compare_hide : function() {
					$('#ahinfo_compare_for').hide();
				},

				compare_init : function() {
					$('.ahinfo_compare_checkbox').prop('checked', false);
					var oCom = zen.ahinfo.compare_up();
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
											+ '</a><br/><span onclick="zen.ahinfo.compare_del('
											+ oCom[i]["y_zid"]
											+ ')">删除</span></div>');
							$('#ahinfo_compare_show_' + i).html(aHtml.join(''));

							$('#ahinfo_compare_cb_' + oCom[i]["y_zid"]).prop(
									'checked', true);
						}

						for ( var i = oCom.length; i <= 4; i++) {
							$('#ahinfo_compare_show_' + i)
									.html(
											'<div class="b_fl c_number">'
													+ (i + 1)
													+ '</div><div class="b_fl c_add">您还可以继续添加</div>');
						}

						$('#ahinfo_compare_for').show();
					} else {
						$('#ahinfo_compare_for').hide();
					}

				},

				comment_post : function() {
					// document.writeln("<style></style>");
					this
							.model(
									"zen_ahinfo_model_post",
									'<div class="ahinfo_model_right">请在下方输入您的评论：<br/><br/><textarea rows="10" cell="15" id="ahinfo_comment_post_textarea"></textarea><br/><br/><input type="button" class="btn" onclick="zen.ahinfo.comentsubmit()" value="提交"/></div><div style="height:20px;clear:both;"></div>');
				},
				try_post : function() {
					// document.writeln("<style></style>");
					this
							.model(
									"zen_ahinfo_model_post",
									'<div class="ahinfo_model_right"><br/>所在城市：<input type="text"/><br/><br/>您的电话：<input type="text"/><br/><br/><input type="button" class="btn" value="提交" onclick="zen.ahinfo.try_submit()"/></div><div style="height:20px;clear:both;"></div>');
				},
				
				try_submit:function()
				{
					alert('提交成功,谢谢!');
					location.href=location.href;
				},

				error : function(o) {

					zen.ahinfo.model('错误消息', '调用失败，请稍后重试或者联系技术人员，谢谢！');
				}

			}
		});

$(window).ready(function() {
	zen.ahinfo.init();
});