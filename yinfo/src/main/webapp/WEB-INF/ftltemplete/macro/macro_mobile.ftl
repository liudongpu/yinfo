




<#macro m_mobile_site_js e_list>
	<#list e_list as e>
	<script type="text/javascript" src="../resources/${e}"></script>
	</#list>
</#macro>


<#macro m_mobile_image_lazyload src="" alt="" >
<img class="lazy" data-original="${src}" alt="${alt}" />
</#macro>

























