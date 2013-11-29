
<#macro m_site_common_header title="专业的养老机构网站" keywords="" description="" >


<title>${title}-银杏林</title> 
<meta name="keywords" content="银杏林" />
<meta name="description" content="${title}-银杏林" />
</head>
<body class="yinfo_body">

	<div class="yinfo_topbanner">
		<a href="${base_url}yinfo/static-static-40048de680df4aa5938b53bd5aa02ab9">
		<div class="yinfo_topbanner_adv">
		</div>
		</a>
	</div>

	<div class="yinfo_header y_center">
		<div class="yinfo_header_logo"><a href="${base_url}"></a></div>
		<div class="yinfo_header_area">北京</div>
		<div id="yinfo_header_search" class="yinfo_header_search">
			
			<div class="input-append">
				<input type="text" id="yinfo_header_search_input" class="span4" placeholder="搜索城市、地区、或者养老院名称">
				<a class="btn" onclick="zen.yinfo.search(this)">
					<i class="icon-search"></i>
				</a>
			</div>
		</div>
		<div id="yinfo_header_user" class="yinfo_header_user">
			<a href="${base_url}yinfo/login-login">登录</a>
			&nbsp;&nbsp;<a href="${base_url}yinfo/reg-reg">免费注册</a>
		</div>
		<div  class="yinfo_header_link">
			<a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=508681688&site=qq&menu=yes"><img border="0" src="http://wpa.qq.com/pa?p=2:508681688:41" alt="点击这里给我发消息" title="点击这里给我发消息"/></a>
		</div>
	</div>
	<div class="yinfo_nav">
		<div class="y_center">
			<div class="yinfo_nav_box">
				<div class="c_tip"></div>
				<div class="c_nav">
					<ul>
						<li class="c_active"><a href="${base_url}">首页</a></li>
						<li><a href="${base_url}yinfo/list-110108_0_0_0">海淀区</a></li>
						<li><a href="${base_url}yinfo/list-110105_0_0_0">朝阳区</a></li>
						<li><a href="${base_url}yinfo/list-110102_0_0_0">西城区</a></li>
						<li><a href="${base_url}yinfo/list-110101_0_0_0">东城区</a></li>
						<li><a href="${base_url}yinfo/list-110114_0_0_0">昌平区</a></li>
						<li><a href="${base_url}yinfo/list-110107_0_0_0">石景山区</a></li>
						<li id="yinfo_nav_box_address_other"><a href="#">其他区县</a></li>
					</ul>
				</div>

				<div class="yinfo_nav_address">
					<ul>
						<li><a href="${base_url}yinfo/list-110112_0_0_0">·通州区</a></li>
						<li><a href="${base_url}yinfo/list-110113_0_0_0">·顺义区</a></li>
						<li><a href="${base_url}yinfo/list-110106_0_0_0">·丰台区</a></li>
						<li><a href="${base_url}yinfo/list-110109_0_0_0">·门头沟区</a></li>
						<li><a href="${base_url}yinfo/list-110111_0_0_0">·房山区</a></li>
						<li><a href="${base_url}yinfo/list-110115_0_0_0">·大兴区</a></li>
						<li><a href="${base_url}yinfo/list-110116_0_0_0">·怀柔区</a></li>
						<li><a href="${base_url}yinfo/list-110117_0_0_0">·平谷区</a></li>
						<li><a href="${base_url}yinfo/list-110228_0_0_0">·密云县</a></li>
						<li><a href="${base_url}yinfo/list-110229_0_0_0">·延庆县</a></li>
					</ul>
				</div>

				<div class="yinfo_nav_query">
					<div class="c_box"></div>
					<div class="c_bg">
						<div class="c_info b_corner">
							<div class="c_margin">
								<dl>
									<dt>
										<i>1/</i>您希望养老院位于：
									</dt>
									<dd id="yinfo_nav_query_address">
										<input name="query_dept" type="radio" value="0"
											id="query_dept_0" checked="checked" /><label
											for="query_dept_0">不限</label> <input name="query_dept"
											type="radio" value="110108" id="query_dept_110108" /><label
											for="query_dept_110108">海淀</label> <input name="query_dept"
											type="radio" value="110105" id="query_dept_110105" /><label
											for="query_dept_110105">朝阳</label> <input name="query_dept"
											type="radio" value="110102" id="query_dept_110102" /><label
											for="query_dept_110102">西城</label> <br />
										<input name="query_dept" type="radio" value="110101"
											id="query_dept_110101" /><label for="query_dept_110101">东城</label>
										<input name="query_dept" type="radio" value="110114"
											id="query_dept_110114" /><label for="query_dept_110114">昌平</label>
											
											<input name="query_dept" type="radio" value="0"
											id="query_dept_00"  /><label
											for="query_dept_00">其他区域</label>
									</dd>
								</dl>
								<dl>
									<dt>
										<i>2/</i>您希望价格范围是：
									</dt>
									<dd id="yinfo_nav_query_money">
										<input name="query_price" id="query_price_0" type="radio"
											value="0" checked="checked" /><label for="query_price_0">不限</label> <input
											name="query_price" type="radio" id="query_price_32510001"
											value="32510001" /><label for="query_price_32510001">2000元以下</label>
										<input name="query_price" type="radio" value="32510002"
											id="query_price_32510002" /><label
											for="query_price_32510002">2000-3000</label> <input
											name="query_price" type="radio" value="32510003"
											id="query_price_32510003" /><label
											for="query_price_32510003">3000-4000</label> <input
											name="query_price" type="radio" value="32510004"
											id="query_price_32510004" /><label
											for="query_price_32510004">4000元以上</label>
									</dd>
								</dl>
								<dl>
									<dt>
										<i>3/</i>老人的情况是：
									</dt>
									<dd id="yinfo_nav_query_older">
										<input name="query_type" id="query_type_0" type="radio"
											value="0"  checked="checked" /><label for="query_type_0">不限</label>
										<input name="query_type" type="radio" id="query_type_32520001"
											value="32520001" /><label for="query_type_32520001">自理老人</label>
										<input name="query_type" type="radio" value="32520002"
											id="query_type_32520002" /><label for="query_type_32520002">半护理老人</label><br />
										<input name="query_type" type="radio" value="32520003"
											id="query_type_32520003" /><label for="query_type_32520003">全护理老人</label>
										<input name="query_type" type="radio" value="32520004"
											id="query_type_32520004" /><label for="query_type_32520004">临终关怀</label>
										

									</dd>
								</dl>
							</div>

						</div>
						<div class="c_bottons">
							<div class="c_btn b_corner" onclick="zen.yinfo.query()">立即查看</div>

						</div>

					</div>
				</div>
			</div>
		</div>
	</div>




</#macro>


<#macro m_site_common_oldhead title="专业的养老机构网站" imgurl="" keywords="" description="">
<title>${title}-银杏林</title> 
<meta name="keywords" content="银杏林" />
<meta name="description" content="${title}-银杏林" />
</head>
<body class="yinfo_body">
	<div id="yold_header" class="yold_header y_center">
		<div class="yold_header_logo">
			<a href="${base_url}"></a>
		</div>
		<div class="yold_header_user">
			<div id="yinfo_header_user" class="yold_header_user_text">
				<a href="${base_url}yinfo/login-login">登录</a> &nbsp;&nbsp;<a
					href="${base_url}yinfo/reg-reg">免费注册</a>
			</div>
		</div>
		
		<div class="yold_header_link">
			<a target="_blank"
				href="http://wpa.qq.com/msgrd?v=3&uin=508681688&site=qq&menu=yes"><img
				border="0" src="http://wpa.qq.com/pa?p=2:508681688:41"
				alt="点击这里给我发消息" title="点击这里给我发消息" /></a>
		</div>
	</div>
	<div class="yold_headadv ">
		<div class="y_center">
			<img
				src="<#if imgurl!="">${imgurl}<#else>${base_zero}yinfo/webyinfo/images/topad.jpg</#if>" />
		</div>

	</div>
	<div class="yold_nav">
		<div class="y_center">
			<div class="yold_nav_box">

				<ul>
					<li><a class="c_active" href="#yold_header">首页</a></li>
					<li><a href="#yinfo_home_t1">养老院简介</a></li>
					<li><a href="#yinfo_home_t2">收费标准</a></li>
					<li><a href="#yinfo_home_t3">入住须知</a></li>
					<li><a href="#yinfo_home_t4">服务指南</a></li>
					<li><a href="#yinfo_home_t5">优惠信息</a></li>
					<li><a href="#yinfo_home_t6">联系方式</a></li>
					<li><a href="#yinfo_home_t7">机构位置</a></li>
				</ul>
			</div>
		</div>
	</div>
</#macro>


<#macro m_site_common_site_nav p_pagination>
<div class="pagination" zen_page_pagination_size="${p_pagination.getPageSize()}"  zen_page_pagination_index="${p_pagination.getPageIndex()}"  zen_page_pagination_count="${p_pagination.getPageCount()}">
  <ul>
  </ul>
</div>
<script>
$(document).ready(function(){zen.yinfo.pagination()});
</script>
</#macro>


<#macro m_site_common_site_list el fromtype>

							<div class="c_img">
								<a href="${base_url}yinfo/home-${el["domain"]}" target="_blank"><img src="${el["main_img"]}" /></a>
							</div>
							<div class="yinfo_item_box">
								<div class="c_title"><a href="${base_url}yinfo/home-${el["domain"]}" target="_blank">${el["name"]}</a></div>
								<div class="c_in">
									<div class="c_left">保障：</div>
									<div class="c_right">
										<div class="yinfo_keep">
											<ul>
												<li class="c_0  <#if (el["icon_cids"]?index_of("32590001")>-1)>c_a</#if>"></li>
												<li class="c_1  <#if (el["icon_cids"]?index_of("32590002")>-1)>c_a</#if>"></li>
												<li class="c_2  <#if (el["icon_cids"]?index_of("32590003")>-1)>c_a</#if>"></li>
												<li class="c_3  <#if (el["icon_cids"]?index_of("32590004")>-1)>c_a</#if>"></li>
												<li class="c_4  <#if (el["icon_cids"]?index_of("32590005")>-1)>c_a</#if>"></li>
												<li class="c_5  <#if (el["icon_cids"]?index_of("32590006")>-1)>c_a</#if>"></li>
											</ul>
										</div>
									</div>
								</div>
								<!--
								<div class="c_in">
									<div class="c_left">评价：</div>
									<div class="c_right">
										<div class="yinfo_star">
											<div class="c_line" style="width: 90%;"></div>
										</div>
										<div class="c_tips">好评率：90%</div>
									</div>
								</div>
								-->
								<div class="c_in">
									<div class="c_left">地区：</div>
									<div class="c_right">北京 ${pagemethod.upClassName("area_"+el["area"])}</div>
								</div>
								<div class="c_in">
									<div class="c_left">床位：</div>
									<div class="c_right">${el["q_bednumber"]}</div>
								</div>
								<div class="clearfix"></div>
								<div class="c_buttons">
									<#if (fromtype=="list")><input type="checkbox" id="yinfo_compare_cb_${el["zid"]}" class="yinfo_compare_checkbox" y_name="${el["name"]}"  y_zid="${el["zid"]}" y_img="${el["main_img"]?default("")}" y_link="${base_url}yinfo/home-${el["domain"]}" onclick="zen.yinfo.compare_add(this)" /><label for="yinfo_compare_cb_${el["zid"]}">加入对比</label></#if>
									<a href="${base_url}yinfo/home-${el["domain"]}" target="_blank" class="btn btn-success">去看看</a>
								</div>
							</div>

</#macro>

<#macro m_site_common_footer>

	<div class="yinfo_footer">
		<div class="c_border"></div>
		<div class="y_center">
			<div class="c_nav">
				
				<#list b_method.upData("y_static","type_cid","32630001") as el> 
					<span><a href="${base_url}yinfo/static-static-${el["uid"]}">${el["title"]}</a></span>|
				</#list>
				
				
			</div>
			<div class="b_h20"></div>
			<div style="display:none;">
			<script type="text/javascript">

			var _bdhmProtocol = (("https:" == document.location.protocol) ? " https://" : " http://");
			
			document.write(unescape("%3Cscript src='" + _bdhmProtocol + "hm.baidu.com/h.js%3F76be1d1daefa4a133790ced2d9634156' type='text/javascript'%3E%3C/script%3E"));
			
			</script>
			</div>
			<div class="c_text">CopyRight 2013 京ICP备11035185号-2 </div>
			<div class="b_h40"></div>
		</div>
	</div>


	<div id="yinfo_query_for" class="modal hide fade yinfo_query_for">
		<div class="c_box">
			<div class="c_top"></div>
			<div class="c_info"></div>
			<div class="c_input">
				<input type="text" name="yinfo_query_for_phone"
					id="yinfo_query_for_phone" maxlength="11" />
			</div>
			<div class="c_button">
				<a class="btn  btn-success" onclick="zen.yinfo.querysubmit()">&nbsp;&nbsp;提&nbsp;&nbsp;交&nbsp;&nbsp;</a>
			</div>
			<div class="c_desc">您的重要信息不会被泄露,详见隐私条款</div>
			<div class="c_skip">
				<a href="#" onclick="$('#yinfo_query_for_notice').show();">跳过</a>
			</div>

			<div class="c_close" data-dismiss="modal" aria-hidden="true"></div>

			<div id="yinfo_query_for_notice" class="c_notice">
				<div class="c_notice_head">确定要跳过吗？</div>
				<div class="c_notice_body">
					<br /> 这样您将无法获得：
					<ul>
						<li>您需要的养老院最新折扣优惠信息</li>
						<li>银杏林赠送的超值大礼</li>
						<li>养老院免费一对一贴心顾问</li>
					</ul>

				</div>
				<div class="c_notice_skip">确定要跳过吗？</div>
				<div class="c_notice_buttons">
					<a class="btn btn-small" onclick="zen.yinfo.queryskip()">&nbsp;&nbsp;是&nbsp;&nbsp;</a>&nbsp;&nbsp;&nbsp;&nbsp;
					<a class="btn btn-small"
						onclick="$('#yinfo_query_for_notice').hide();">&nbsp;&nbsp;否&nbsp;&nbsp;</a>
				</div>
			</div>
			<input type="hidden" id="yinfo_query_for_query" name="yinfo_query_for_query"/>
		</div>
	</div>


</body>
</html>
</#macro>



<#macro m_site_common_compare>



	<div id="yinfo_compare_for" class="yinfo_compare_for y_center">
		<div class="c_box">
			<div class="c_title">
				<div class="b_fl c_bold">对比栏</div>
				<div class="b_fr" ><a  onclick="zen.yinfo.compare_hide()">[隐藏]</a></div>
			</div>
			<div class="c_list">
				<div id="yinfo_compare_show_0" class="c_item b_fl">
					<div class="b_fl c_number">1</div>
					<div class="b_fl c_add">您还可以继续添加</div>
				</div>
				<div id="yinfo_compare_show_1" class="c_item b_fl">
					<div class="b_fl c_number">2</div>
					<div class="b_fl c_add">您还可以继续添加</div>
				</div>
				<div id="yinfo_compare_show_2" class="c_item b_fl">
					<div class="b_fl c_number">3</div>
					<div class="b_fl c_add">您还可以继续添加</div>
				</div>
				<div id="yinfo_compare_show_3" class="c_item b_fl">
					<div class="b_fl c_number">4</div>
					<div class="b_fl c_add">您还可以继续添加</div>
				</div>
				
				<div class="c_buttons b_fr">
					<a class="btn btn-success" onclick="zen.yinfo.compare_goto()">对比</a>
					<br/>
					<a onclick="zen.yinfo.compare_clear()">清空对比栏</a>
				</div>
				
			</div>
		</div>
	</div>


<script>
$(document).ready(function(){zen.yinfo.compare_init()});
</script>
</#macro>

<#macro m_site_common_user_menu>

<#assign  userinfo=b_method.upYinfoUserInfo()  >
			<div class="yinfo_user_menu">
				<div class="yinfo_user_menu_show">
					<div class="c_title">会员中心</div>
					<div class="c_label">&gt;&nbsp;&nbsp;个人用户</div>
					<div class="c_sub">
						<ul>
							<li><a href="${base_url}yinfo/ucenter-user">·我的资料</a></li>
							<li><a href="${base_url}ypage/page_chart_v_web_y_notice">·我的消息</a></li>
							<li><a href="${base_url}ypage/page_chart_v_y_people">·入住老人信息</a></li>
							<!--
							<li><a href="${base_url}yinfo/ulike-user">·我的收藏</a></li>
							<li><a href="${base_url}yinfo/ucomment-user">·我入住过的机构/评价</a></li>
							-->
						</ul>
					</div>
					<div class="b_h10"></div>
					<#if userinfo["yinxl_user_info_uid"]??&&userinfo["yinxl_user_info_uid"]!="">
						<div class="c_label">&gt;&nbsp;&nbsp;养老机构</div>
						<div class="c_sub">
							<ul>
								<li><a href="${base_url}ypage/page_chart_v_change_y_call?iuid=${userinfo["yinxl_user_info_uid"]}">·用户探视记录</a></li>
								
								<li><a href="${base_url}yinfo/uaccess-user">·机构认证申请</a></li>
								<li><a href="${base_url}yinfo/usign-user">·在线签约</a></li>
								<li><a href="${base_url}ypage/page_edit_v_change_y_info?zw_f_uid=${userinfo["yinxl_user_info_uid"] }">·机构资料编辑</a></li>
	
							</ul>
						</div>
					</#if>
					<div class="b_h10"></div>
					<div class="c_label">&gt;&nbsp;&nbsp;账户设置</div>
					<div class="c_sub">
						<ul>
							<li><a href="${base_url}yinfo/upassword-user">·修改密码</a></li>
							<li><a href="#" onclick="zen.yinfo.logout()">·退出系统</a></li>

						</ul>
					</div>
				</div>
			</div>
</#macro>

<#macro m_site_common_site_zapjs_add >

</#macro>
