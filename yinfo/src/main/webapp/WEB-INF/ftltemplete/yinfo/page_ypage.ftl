<!DOCTYPE html>
<html>
<head>

<#include "lib_page.ftl" />
<#include "site_common.ftl" />
<#include "../zapmacro/zapmacro_common.ftl" />
<#include "../macro/macro_common.ftl" />
<#assign pageexec=b_method>
<#assign pagemethod=b_method>

<#assign base_url="/">
<#assign base_zero="http://yinxlcdn.yinxl.com/resources/">
<#assign base_user_url="/">
<#assign base_page_url="/">
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"> 
	<link type="text/css" href="${base_zero}yinfo/lib/bootstrap/css/bootstrap.min.css" rel="stylesheet">
	<link type="text/css" href="${base_zero}yinfo/webyinfo/css/yinfo.css" rel="stylesheet">
	<script type="text/javascript" src="${base_zero}yinfo/lib/jquery/jquery-last.min.js"></script>
	<script type="text/javascript" src="${base_zero}yinfo/lib/jquery/jquery-pluging.js"></script>
	<script type="text/javascript" src="${base_zero}yinfo/lib/bootstrap/js/bootstrap.min.js"></script>
	<script type="text/javascript" src="${base_zero}yinfo/zen/zen.js"></script>
	<script type="text/javascript" src="${base_zero}yinfo/zen/zen_yinfo.js"></script>
	<script type="text/javascript" src="${base_zero}yinfo/lib/jquery/jquery.corner.js"></script>
	<script type="text/javascript" src="${base_zero}yinfo/lib/jquery/jquery.srnpr.js"></script>
	<@m_html_addscript "zen.i({baseurl:'"+base_url+"'});" />
	<script type="text/javascript" src="${base_zero}lib/require/require.js"></script>
	<script type="text/javascript" src="${base_zero}zapjs/zapjs.js"></script>
	<script type="text/javascript" src="${base_zero}zapjs/zapjs.zw.js"></script>
	<script type="text/javascript" src="${base_zero}lib/easyui/jquery.easyui.min.js"></script>
	<link type="text/css" href="${base_zero}lib/easyui/themes/bootstrap/easyui.css" rel="stylesheet">
	<link type="text/css" href="${base_zero}zapadmin/css/zab_base.css" rel="stylesheet">
	<link type="text/css" href="${base_zero}zapweb/css/w.css" rel="stylesheet">

<@m_site_common_header />






<div class="y_center">
		<div class="yinfo_user">
			<div class="yinfo_list_nav">
				<a href="/">回到首页</a>&nbsp;&nbsp;&gt;&nbsp;&nbsp;<a href="">用户中心</a>
			</div>
			<div class="b_h10"></div>

			<@m_site_common_user_menu />
			<div class="yinfo_user_body">
				<div class="yinfo_user_body_title">${b_page.getWebPage().getPageName()}</div>
				<div class="b_h10"></div>
				<div class="yinfo_user_body_show">
					<div class="yinfo_user_body_edit" style="width:95%;margin-left:2%;">
					
					
					<@m_zapmacro_common_set_operate   b_page.getWebPage().getPageOperate() "116001020"  "btn btn-small" />
					
					<#include b_page.getWebPage().getPageTemplate()+".ftl" />
					
						
						<div class="b_h40"></div>
					</div>
				</div>
			</div>
			<div class="clearfix"></div>
			<div class="b_h40"></div>
		</div>
	</div>



<@m_site_common_footer />



