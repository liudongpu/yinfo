<!DOCTYPE html>
<html>
<head>
<#--
<#assign pageconfig=WebPage["PageConfig"]>
<#assign pageinfo=WebPage["PageInfo"]>
<#assign pageexec=WebPage["PageExec"]>
<#assign pagemethod=WebPage["PageMethod"]>
-->

<#assign pageinfo=WebPage["PageInfo"]>
<#assign pageexec=WebPage["PageExec"]>
<#assign pagemethod=WebPage["PageExec"]>
<#assign b_method=WebPage["PageExec"]>
<#assign base_url="/">
<#assign base_zero="http://bcs.duapp.com/srnprresources/resources/yinfo/">


<#include "lib_page.ftl" />
<#include "site_common.ftl" />

<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"> 

	
	
	<link type="text/css" href="${base_zero}lib/bootstrap/css/bootstrap.min.css" rel="stylesheet">
	<link type="text/css" href="${base_zero}webyinfo/css/yinfo.css" rel="stylesheet">
	<script type="text/javascript" src="${base_zero}lib/jquery/jquery-last.min.js"></script>
	<script type="text/javascript" src="${base_zero}lib/jquery/jquery-pluging.js"></script>
	<script type="text/javascript" src="${base_zero}lib/bootstrap/js/bootstrap.min.js"></script>
	<script type="text/javascript" src="${base_zero}zen/zen.js"></script>
	<script type="text/javascript" src="${base_zero}zen/zen_yinfo.js"></script>
	<script type="text/javascript" src="${base_zero}lib/jquery/jquery.corner.js"></script>
	<script type="text/javascript" src="${base_zero}lib/jquery/jquery.srnpr.js"></script>
	
	
	

	<@m_html_addscript "zen.i({baseurl:'"+base_url+"'});" />

	

<#include "page_"+WebPage["PageTarget"]?default('main')+".ftl" />










</html>
