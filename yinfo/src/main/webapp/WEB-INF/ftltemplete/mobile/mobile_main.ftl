<#include "../zapmacro/zapmacro_app.ftl" />
<#include "../macro/macro_mobile.ftl" />

<@m_zapmacro_app_page_header  e_title="银杏林"/>





<div id="mobile_main_slide_img" class="cmb_mobile_main_slide">
<div class="c_box">
	<ul class="c_ul">
		<#assign page_main_listadv=b_method.upDataQuery("y_adv","-sortid","","position_cid","32620001")>
					
      <#list page_main_listadv as el>
					<li> <img src="${el["file_url"]}" /> </li>		
		</#list>
			     		
     </ul>
</div>
</div>

<@m_zapmacro_app_slide_img e_id="#mobile_main_slide_img" />









<@m_zapmacro_app_page_center_start />
	
	<div class="cmb_list_info">
	<ul data-role="listview" >
	
		<li data-role="list-divider">本周热门 <span class="ui-li-count">6</span></li>
		<@m_mobile_index_list e_list=b_method.upListInfo("hot") />
	
	    <li data-role="list-divider">最新活动<span class="ui-li-count">6</span></li>
		<@m_mobile_index_list e_list=b_method.upListInfo("mark") />
	    
	    <li data-role="list-divider">最新入驻 <span class="ui-li-count">6</span></li>
		<@m_mobile_index_list e_list=b_method.upListInfo("new") />
	    
	    
	    
	    
	
	</ul>
	
	
	
	</div>


<@m_zapmacro_app_page_center_end />






<@m_zapmacro_app_page_footer  />






