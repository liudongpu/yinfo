zen
		.e({
			page : {

				submit : function(sId, sAction) {

					var aForm = $(sId).parents('form');
					if (sAction) {
						aForm.attr("action", sAction);
					}

					zen.r("zen.page.submit.beforesubmit");
					$(aForm).ajaxForm();
					$(aForm).ajaxSubmit(function(data) {
						var obj = $.evalJSON(data);
						if (obj.run) {
							zen.page[obj.run](obj);
						} else {
							zen.page.submit_result(obj);
						}

					});

				},

				submit_result : function(oResult) {
					if (oResult.flag) {
						zen.page.model('提示消息', '操作成功！');
					} else {
						zen.page.model('错误消息', oResult.message);
					}

				},

				login_success : function(o) {
					zen.f.cookie("bgpm_zyou_user_cookieid", o.result["uid"], {
						path : '/',
						expires : 365
					});
					zen.f.cookie("bgpm_zyou_user_name", o.result["user_name"],
							{
								path : '/',
								expires : 365
							});

					zen.page.href($('#login_success_href').val());

				},

				logout : function() {
					zen.f.cookie("bgpm_zyou_user_cookieid", null, {
						path : '/'
					});
					zen.f.cookie("bgpm_zyou_user_name", null, {
						path : '/'
					});

					zen.page.href('manage');
				},

				href : function(sUrl) {

					if (sUrl != undefined) {
						sUrl = zen.t.baseurl + sUrl;
					} else {
						sUrl = location.href;
					}

					location.href = sUrl;
				},

				query : function(oEl) {
					var aQuery = [];

					$('input,select').each(

							function(n, el) {
								if ($(el).val() != '') {
									aQuery.push($(el).attr('name') + '='
											+ $(el).val());

								}

							});

					location.href = zen.page.urlreplace(5, aQuery.join('&'));

				},

				pagination : function() {
					$(".pagination").each(

					function(n, el) {
						zen.page.navel(el);

					}

					);

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
									: '><a href="'
											+ zen.page.urlreplace(4, aArr
													.join('_')) + '" ')
							+ ' >«</a></li>');

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
								+ ' ><a href="'
								+ zen.page.urlreplace(4, aArr.join('_')) + '">'
								+ aNav[i] + '</a></li>');
					}

					aArr[0] = iMaxPage;

					aHtml.push('<li '
							+ (iIndex == iMaxPage ? ('class="disabled"><a')
									: '><a <a href="'
											+ zen.page.urlreplace(4, aArr
													.join('_')) + '" ')
							+ ' >»</a></li>');

					$(eUL).append(aHtml.join(''));

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

				del : function(sUrl) {

					zen.page.model('提示消息', '确认要删除该内容吗？', '', ("zen.page.call('"
							+ sUrl + "', zen.page.del_success)"));

				},
				del_success : function(oSu) {
					zen.page.href();

				},

				call : function(sUrl, fCallBack) {
					$.getJSON(sUrl, function(obj) {
						if (fCallBack != undefined && fCallBack) {
							fCallBack(obj);
						} else {
							zen.page.okdo(obj.flag);
						}
					});
				},

				dialog : function(sUrl) {

					zen.page.model('操作', '<iframe src="' + zen.t.baseurl + sUrl
							+ '" frameborder="0" style="width:100%;"/>');

				},

				init : function() {

				},

				editorReload : function() {
					for (instance in CKEDITOR.instances) {

						CKEDITOR.instances[instance].updateElement();

					}
				},
				okdo : function(content) {

					$('#zen_page_model_show').modal('show');
				},

				model : function(sTitle, sContent, fHidden, fOk) {

					if (!($('#zen_page_model_box').length > 0)) {
						var sModel = '<div id="zen_page_model_box" class="modal hide fade"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>'
								+ '<h3>'
								+ sTitle
								+ '</h3></div><div class="modal-body">'
								+ '<p>'
								+ sContent
								+ '</p>'
								+ '</div>'
								+ '<div class="modal-footer">' + '</div></div>';
						$(document.body).append(sModel);

					}

					$('#zen_page_model_box h3').html(sTitle);
					$('#zen_page_model_box p').html(sContent);

					var aFuncHtml = [];

					if (fOk != undefined) {
						aFuncHtml
								.push('<a  class="btn btn-primary" data-dismiss="modal" onclick="'
										+ fOk + '" aria-hidden="true">确认</a>');
					}

					if (fHidden == undefined) {
						fHidden = '';
					}
					aFuncHtml
							.push('<a  class="btn" data-dismiss="modal" onclick="'
									+ fHidden + '" aria-hidden="true">关闭</a>');

					$('#zen_page_model_box .modal-footer').html(
							aFuncHtml.join(''));

					$('#zen_page_model_box').modal('show');

				},

				inValue : function(sId, oValue) {
					$('#' + sId).val(oValue);
				},
				upValue : function(sId, sAttr) {
					if (sAttr) {
						return $('#' + sId).attr(sAttr);
					} else {
						return $('#' + sId).val();
					}
				},

				upload : function(o) {

					if (o.flag) {

						var bFlagMuli = ($('#zen_page_upload_type').val() == "muli_upload");

						var sValue = parent.zen.page
								.upValue(o.result["parentid"]);

						sValue = sValue + (sValue ? ',' : '')
								+ o.result["fileurl"];

						parent.zen.page.inValue(o.result["parentid"], sValue);

						zen.page.uploadreload(0);

						location.href = location.href;

					} else {
						parent.zen.page.okdo(o.message);
					}
				},
				upcheck : function(sId) {
					var sVal = parent.zen.page.upValue(sId);
					if (sVal) {
						zen.page.uploadreload(0);

					}
				},

				upresize : function(sId) {
					var iLength = $('#' + sId).val().split(',').length;
					$('#' + sId).next().height((iLength + 1) * 50 + 'px');
				},

				uploadreload : function(iIndex, sUrl) {

					var bFlagMuli = ($('#zen_page_upload_type').val() == "muli_upload");

					if (iIndex == 1) {

						$("#page_upload_show").hide();
						if (!bFlagMuli)
							$("#page_upload_call").show();
					} else {
						$("#page_upload_show").show();
						if (!bFlagMuli)
							$("#page_upload_call").hide();
					}

					sUrl = parent.zen.page.upValue($('#zen_page_upload_parent')
							.val());

					if (sUrl) {

						var aUrls = sUrl.split(',');
						var aHtml = [];
						for ( var i = 0, j = aUrls.length; i < j; i++) {
							aHtml.push('<div class="c_item">');
							aHtml
									.push('<img  src="'
											+ aUrls[i]
											+ '"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="'
											+ aUrls[i]
											+ '" target="_blank" class="btn">查看大图</a>');
							aHtml
									.push('&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a class="btn" onclick="zen.page.uploaddel('
											+ i
											+ ',\''
											+ aUrls[i]
											+ '\')">删除</a></div>');

						}

						$('#page_upload_text').html(aHtml.join(''));
					}
					parent.zen.page
							.upresize($('#zen_page_upload_parent').val());

				},
				uploaddel : function(iIndex, oDel) {
					var sUrl = parent.zen.page.upValue($(
							'#zen_page_upload_parent').val());
					var aUrls = sUrl.split(',');
					aUrls.splice(iIndex, 1);
					sUrl = aUrls.join(',');
					parent.zen.page.inValue($('#zen_page_upload_parent').val(),
							sUrl);
					location.href=location.href;
				}

			}
		}

		);
