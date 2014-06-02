<#include "../zapmacro/zapmacro_app.ftl" />
<#include "../macro/macro_mobile.ftl" />


<@m_zapmacro_app_page_center_start />

<form>
<fieldset data-role="controlgroup" data-type="horizontal" data-mini="true">
 
    <label for="select-native-14">所在区域</label>
    <select name="select-native-14" id="select-native-14">
        <option value="#">所在区域</option>
        <option value="#">Two</option>
        <option value="#">Three</option>
    </select>
    <label for="select-native-15">价格范围</label>
    <select name="select-native-15" id="select-native-15">
        <option value="#">价格范围</option>
        <option value="#">Two</option>
        <option value="#">Three</option>
    </select>
    <label for="select-native-16">老人情况</label>
    <select name="select-native-16" id="select-native-16">
        <option value="#">老人情况</option>
        <option value="#">Two</option>
        <option value="#">Three</option>
    </select>
</fieldset>
</form>


<div class="cmb_common_list_split_one"></div>
<div class="cmb_common_list_split_one"></div>
<div class="cmb_common_list_split_one"></div>

<#assign  pageSearchNav=b_method.upListPage("","")  >



<div class="cmb_list_info">
	<ul data-role="listview" >

<@m_mobile_index_list e_list=pageSearchNav.getPageData() />
    
	
	</ul>
	
	
	
	</div>

<@m_zapmacro_app_page_center_end />






