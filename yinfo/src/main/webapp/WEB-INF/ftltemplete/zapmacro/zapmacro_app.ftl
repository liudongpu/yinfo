<#-- 通用页面展示 -->
<#macro m_zapmacro_app_page_base e_id="" e_title="">
<div data-role="page" id="${e_id}">
	
	
	
	<div class="zmb_page_center">
	</div>
	
</div>

</#macro>






<#-- 通用内容起始 -->
<#macro m_zapmacro_app_page_center_start>

	<div role="main" class="ui-content" >

</#macro>
<#-- 通用内容结束 -->
<#macro m_zapmacro_app_page_center_end>
	</div>
</#macro>






<#macro m_zapmacro_app_page_header e_title="" >


<div class="ui-header ui-bar-inherit">
		<h1 class="ui-title">loading</h1>
	</div>
	
	<div class="ui-header ui-bar-inherit ui-header-fixed slidedown">
		<h1 class="ui-title">${e_title}</h1>
	</div>


</#macro>



<#-- 页面底部占位 -->
<#macro m_zapmacro_app_page_footer e_index="mobile_main" >
	<div  class="zmb_layout_inline_footer">
       
	</div>
</#macro>







<#-- 脚本-轮播图 -->
<#macro m_zapmacro_app_slide_img e_id="" >
	<script>
		
	$(function(){zapapp_slide.slide({id:"${e_id}"});});
	 
	 
  </script>

</#macro>















