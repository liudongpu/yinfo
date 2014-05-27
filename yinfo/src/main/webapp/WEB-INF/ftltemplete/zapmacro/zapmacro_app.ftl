<#-- 添加页 -->
<#macro m_zapmacro_app_page_base e_id="" e_title="">

<div data-role="page" id="${e_id}">

	<div data-role="header"  data-position="fixed">
		<h1>${e_title}</h1>
	</div>

	<div role="main" class="ui-content" >
		loading
	</div>


	<@m_zapmacro_app_page_footer e_index=e_id />
</div>

</#macro>






<#macro m_zapmacro_app_page_footer e_index="mobile_main" >

	<div data-role="footer" data-position="fixed"  data-id="footernav">
        <div data-role="navbar">
            <ul>
                <li><a href="#mobile_main"  data-transition="slide" onclick="zapapp.page.toPage('mobile_main')"  data-icon="grid" <#if e_index='mobile_main'> class="ui-btn-active ui-state-persist" </#if> >首页</a></li>
                <li><a href="#mobile_list"  data-transition="slide" onclick="zapapp.page.toPage('mobile_list')"  data-icon="star" <#if e_index='mobile_list'>  class="ui-btn-active ui-state-persist" </#if>>列表</a></li>
                <li><a href="#mobile_search"  data-transition="slide" onclick="zapapp.page.toPage('mobile_search')"  data-icon="gear" <#if e_index='mobile_search'>  class="ui-btn-active ui-state-persist" </#if>>搜索</a></li>
                <li><a href="#mobile_user"  data-transition="slide" onclick="zapapp.page.toPage('mobile_user')"  data-icon="gear" <#if e_index='mobile_user'>  class="ui-btn-active ui-state-persist" </#if>>个人中心</a></li>
            </ul>
        </div>
	</div>



</#macro>

