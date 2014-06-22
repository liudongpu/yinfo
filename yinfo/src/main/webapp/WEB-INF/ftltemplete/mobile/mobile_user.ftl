<#include "../zapmacro/zapmacro_app.ftl" />
<#include "../macro/macro_mobile.ftl" />

<@m_zapmacro_app_page_header  e_title="个人中心"/>



<div style="height:25rem;overflow:hidden;">
	<img src="http://dl.bizhi.sogou.com/images/2012/05/12/13618.jpg" style="width:100%;"/>
</div>

<@m_zapmacro_app_page_center_start />

<ul data-role="listview" data-inset="true">
    <li><a href="#">我的资料</a></li>
    <li><a href="#">我的消息</a></li>
    <li><a href="#">入住老人信息</a></li>
    
</ul>

<ul data-role="listview" data-inset="true">
    <li><a href="#">修改密码</a></li>
    <li><a href="#">退出系统</a></li>
    
</ul>
<@m_zapmacro_app_page_center_end />


<@m_zapmacro_app_page_footer  />