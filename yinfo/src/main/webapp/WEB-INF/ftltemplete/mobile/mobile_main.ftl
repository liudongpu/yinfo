<#include "../zapmacro/zapmacro_app.ftl" />
<#include "../macro/macro_mobile.ftl" />

<div class="cmb_list_info">
<ul data-role="listview" data-inset="true">

	<li data-role="list-divider">本周热门 <span class="ui-li-count">6</span></li>
	<@m_mobile_index_list e_list=b_method.upListInfo("hot") />

    <li data-role="list-divider">最新活动<span class="ui-li-count">6</span></li>
	<@m_mobile_index_list e_list=b_method.upListInfo("mark") />
    
    <li data-role="list-divider">最新入驻 <span class="ui-li-count">6</span></li>
	<@m_mobile_index_list e_list=b_method.upListInfo("new") />
    
    
    
    

</ul>



</div>



